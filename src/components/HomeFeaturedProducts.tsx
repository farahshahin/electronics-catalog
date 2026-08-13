import {
  Box,
  Grid,
} from '@mui/material';

import { products } from '@/data/catalog';

import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';

interface HomeFeaturedProductsProps {
  onViewAll: () => void;
}

export default function HomeFeaturedProducts({
  onViewAll,
}: HomeFeaturedProductsProps) {
  return (
    <Box sx={{ pb: 8 }}>
      <SectionHeader eyebrow="Handpicked for you" title="Featured products" action="View all products" onClick={onViewAll}/>
      <Grid container spacing={2.5}>
        {products.slice(0, 4).map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id} >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}