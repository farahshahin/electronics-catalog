import { Grid } from '@mui/material';

import type { Category } from '@/data/catalog';

import CategoryCard from './CategoryCard';

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (categoryName: string) => void;
}

export default function CategoryGrid({
  categories,
  onCategoryClick,
}: CategoryGridProps) {
  return (
    <Grid container spacing={2.5}>
      {categories.map((category) => (
        <Grid item  xs={12} sm={6} md={3} key={category.name}  >
          <CategoryCard category={category} onClick={() => onCategoryClick(category.name)} />
        </Grid>
      ))}
    </Grid>
  );
}