import { Box, Grid } from '@mui/material';

import { categories } from '@/data/catalog';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';

interface HomeCategoriesProps {
  onViewAll: () => void;
  onCategoryClick: (categoryName: string) => void;
}

const selectedCategories = [
  'Smartphones',
  'Laptops & Computers',
  'Headphones & Audio',
  'Gaming',
  'Accessories',
] as const;

export default function HomeCategories({
  onViewAll,
  onCategoryClick,
}: HomeCategoriesProps) {
  const visibleCategories = categories.filter((category) =>
    selectedCategories.includes(
      category.name as (typeof selectedCategories)[number]
    )
  );

  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
      <SectionHeader eyebrow="Browse the collection" title="Shop by category" action="View all categories" onClick={onViewAll} />
      <Grid container spacing={{ xs: 2, sm: 2.5 }}>
        {visibleCategories.map((category) => (
          <Grid item xs={12}  sm={6} md={4} lg={2.4} key={category.name}>
            <CategoryCard category={category} onClick={() => onCategoryClick(category.name)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}