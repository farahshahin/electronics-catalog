import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import HomeHero from '@/components/HomeHero';
import HomeBenefits from '@/components/HomeBenefits';
import HomeCategories from '@/components/HomeCategories';
import HomeBrands from '@/components/HomeBrands';
import HomeNewArrivals from '@/components/HomeNewArrivals';
import HomeTestimonials from '@/components/HomeTestimonials';

export default function Home() {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  const goToProducts = () => {
    goTo('/products');
  };

  const goToCategories = () => {
    goTo('/categories');
  };

  const goToCategory = (categoryName: string) => {
    goTo(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <HomeHero
        onShopClick={goToProducts}
        onCategoriesClick={goToCategories}
      />

      <HomeBenefits />

      <Container maxWidth="lg">
        <HomeCategories onViewAll={goToCategories} onCategoryClick={goToCategory} />
        <HomeNewArrivals onViewAll={goToProducts} />
        <HomeTestimonials />
      </Container>
    </Box>
  );
}