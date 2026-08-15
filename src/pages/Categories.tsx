import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { categories } from '@/data/categories';

import CategoryHeader from '@/components/CategoryHeader';
import CategoryGrid from '@/components/CategoryGrid';

export default function Categories() {
  const navigate = useNavigate();

  const goToProducts = (categoryName: string) => {
    const category = encodeURIComponent(categoryName);
    navigate(`/products?category=${category}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 3, md: 5 },
      }}
    >
      <CategoryHeader />

      <CategoryGrid
        categories={categories}
        onCategoryClick={goToProducts}
      />
    </Container>
  );
}

