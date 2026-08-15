import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { products } from '@/data/catalog';

import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';
import ProductSearchBar from '@/components/ProductSearchBar';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchFromUrl = searchParams.get('search');

  const [query, setQuery] = useState(searchFromUrl || '');
  const [category, setCategory] = useState(
    categoryFromUrl || 'All categories'
  );
  const [brand, setBrand] = useState('All brands');
  const [price, setPrice] = useState<number[]>([
    0,
    1600,
  ]);
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState('Featured');
  const [mobileFilters, setMobileFilters] =
    useState(false);

  useEffect(() => {
    setCategory(categoryFromUrl || 'All categories');
    setQuery(searchFromUrl || '');
  }, [categoryFromUrl, searchFromUrl]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (category === 'All categories' ||
            product.category === category) &&
          (brand === 'All brands' ||
            product.brand === brand) &&
          product.price >= price[0] &&
          product.price <= price[1] &&
          product.rating >= rating
      )
      .sort((a, b) => {
        if (sort === 'Price: low to high') {
          return a.price - b.price;
        }

        if (sort === 'Price: high to low') {
          return b.price - a.price;
        }

        if (sort === 'Top rated') {
          return b.rating - a.rating;
        }

        return 0;
      });
  }, [
    query,
    category,
    brand,
    price,
    rating,
    sort,
  ]);

  const clearFilters = () => {
    setQuery('');
    setCategory('All categories');
    setBrand('All brands');
    setPrice([0, 1600]);
    setRating(0);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          color="primary"
          fontWeight={800}
          letterSpacing=".14em"
        >
          THE CATALOG
        </Typography>

        <Typography
          variant="h1"
          sx={{ mt: 1 }}
        >
          Find your next favorite tech.
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Explore our curated collection of products
          made for how you live, work, and play.
        </Typography>
      </Box>

      {/* Search / Sort */}
      <ProductSearchBar
        query={query}
        setQuery={setQuery}
        sort={sort}
        setSort={setSort}
        mobileFilters={mobileFilters}
        setMobileFilters={setMobileFilters}
      />

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* Filters */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: {
              xs: mobileFilters
                ? 'block'
                : 'none',
              md: 'block',
            },
          }}
        >
          <ProductFilters
            category={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            price={price}
            setPrice={setPrice}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        {/* Products */}
        <Grid item xs={12} md={9}>
          <ProductGrid
            products={filteredProducts}
            onClearFilters={clearFilters}
          />
        </Grid>
      </Grid>
    </Container>
  );
}