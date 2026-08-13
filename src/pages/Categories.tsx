import { Container } from '@mui/material';
import { categories } from '@/data/categories';

import CategoryHeader from '@/components/CategoryHeader';
import CategoryGrid from '@/components/CategoryGrid';

export default function Categories() {
  const goToProducts = (categoryName: string) => {
    const category = encodeURIComponent(categoryName);

    window.history.pushState(
      {},
      '',
      `/products?category=${category}`
    );

    window.dispatchEvent(new PopStateEvent('popstate'));
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

