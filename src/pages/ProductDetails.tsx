import { AddShoppingCart, ArrowBack } from '@mui/icons-material';
import { Box, Button, Chip, Container, Divider, Grid, Rating, Stack, Tab, Tabs, Typography } from '@mui/material';
import { products, formatPrice } from '@/data/catalog';
import ProductCard from '@/components/ProductCard';

export default function ProductDetails({ id }: { id: string }) {
  const product = products.find((p) => p.id === id) ?? products[0];

  const goBack = () => {
    window.history.pushState({}, '', '/products');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const addToCart = (event?: { stopPropagation: () => void; preventDefault?: () => void }) => {
    event?.stopPropagation();
    event?.preventDefault?.();
    window.dispatchEvent(new CustomEvent('technova:add-to-cart', { detail: { productId: product.id, delta: 1 } }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Button onClick={goBack} startIcon={<ArrowBack />} sx={{ mb: 3, color: 'text.secondary' }}>Back to products</Button>
      <Grid container spacing={{ xs: 3, md: 7 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#f5f8fc', borderRadius: 4, p: { xs: 2, md: 4 }, position: 'relative' }}>
            {product.badge && <Chip label={product.badge} color="primary" sx={{ position: 'absolute', top: 20, left: 20, fontWeight: 700 }} />}
            <Box component="img" src={product.image} alt={product.name} sx={{ width: '100%', height: { xs: 310, md: 500 }, objectFit: 'cover', borderRadius: 3, mixBlendMode: 'multiply' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="primary" fontWeight={800} letterSpacing=".12em">{product.category}</Typography>
          <Typography variant="h1" sx={{ mt: 1, fontSize: { xs: '2rem', md: '3.25rem' } }}>{product.name}</Typography>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography fontWeight={700}>{product.rating}</Typography>
            <Typography color="text.secondary">({product.reviews} reviews)</Typography>
          </Stack>

          <Stack direction="row" alignItems="baseline" spacing={1.5} sx={{ mt: 3 }}>
            <Typography variant="h3" fontWeight={800}>{formatPrice(product.price)}</Typography>
            <Typography variant="h6" color="text.disabled" sx={{ textDecoration: 'line-through' }}>{formatPrice(product.oldPrice)}</Typography>
          </Stack>

          <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8 }}>{product.description}</Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2.5 }}>
            <Box sx={{ width: 8, height: 8, bgcolor: 'success.main', borderRadius: '50%' }} />
            <Typography variant="body2" fontWeight={700}>In stock: {product.stock} units</Typography>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3.5 }}>
            <Button variant="contained" size="large" startIcon={<AddShoppingCart />} onClick={addToCart} sx={{ py: 1.5, px: 3, flex: 1 }}>Add to cart</Button>
            <Button variant="outlined" size="large" sx={{ py: 1.5, px: 3, flex: 1 }}>Buy now</Button>
          </Stack>

          <Box sx={{ mt: 4 }}>
            <Divider />
            <Tabs value={0} sx={{ mt: 2 }}>
              <Tab label="Overview" />
              <Tab label="Specs" />
            </Tabs>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">Premium design, performance, and reliability for everyday use.</Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {product.specs.map((spec) => (
                  <Grid item xs={12} sm={6} key={spec}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box sx={{ width: 7, height: 7, bgcolor: 'primary.main', borderRadius: '50%' }} />
                      <Typography variant="body2">{spec}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 7 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>You may also like</Typography>
        <Grid container spacing={2.5}>
          {products.filter((p) => p.id !== product.id).slice(0, 4).map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
