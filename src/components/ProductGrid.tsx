import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import type { Product } from '@/data/catalog';

import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onClearFilters: () => void;
}

export default function ProductGrid({
  products,
  onClearFilters,
}: ProductGridProps) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography color="text.secondary">
          Showing{' '}
          <b style={{ color: '#17253d' }}>
            {products.length}
          </b>{' '}
          products
        </Typography>

        <Typography variant="body2"color="text.secondary">
          Page 1 of 1
        </Typography>
      </Stack>

      {products.length > 0 ? (
        <Grid container spacing={2.5}>
          {products.map((product) => (
            <Grid item xs={12} sm={6}lg={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{  p: 6,textAlign: 'center',borderRadius: 3, }} >
          <Typography variant="h6">
            No products match those filters.
          </Typography>

          <Button sx={{ mt: 2 }} onClick={onClearFilters} >
            Clear filters
          </Button>
        </Paper>
      )}
    </>
  );
}