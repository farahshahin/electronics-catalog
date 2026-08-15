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
        sx={{
          mb: 2,
          px: { xs: 0.5, sm: 0 },
        }}
      >
        <Typography
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          Showing{' '}
          <b style={{ color: '#17253d' }}>
            {products.length}
          </b>{' '}
          products
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.7rem', sm: '0.875rem' },
          }}
        >
          Page 1 of 1
        </Typography>
      </Stack>

      {products.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 2.5 }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper
          sx={{
            p: { xs: 3, sm: 6 },
            textAlign: 'center',
            borderRadius: 3,
          }}
        >
          <Typography variant="h6">
            No products match those filters.
          </Typography>

          <Button
            sx={{ mt: 2 }}
            onClick={onClearFilters}
          >
            Clear filters
          </Button>
        </Paper>
      )}
    </>
  );
}