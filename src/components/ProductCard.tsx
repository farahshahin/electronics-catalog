import { useState } from 'react';
import { Box, Button, Card, CardContent, Chip, IconButton, Rating, Typography } from '@mui/material';
import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
import type { Product } from '@/data/catalog';
import { formatPrice } from '@/data/catalog';

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  const go = () => {
    window.history.pushState({}, '', `/products/${product.id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const addToCart = (event?: { stopPropagation: () => void; preventDefault?: () => void }) => {
    event?.stopPropagation();
    event?.preventDefault?.();
    window.dispatchEvent(new CustomEvent('technova:add-to-cart', { detail: { productId: product.id, delta: 1 } }));
  };

  const toggleLike = (event?: { stopPropagation: () => void }) => {
    event?.stopPropagation();
    setLiked((value) => !value);
  };

  return <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #e9edf3', borderRadius: 3.5, boxShadow: '0 8px 30px rgba(22,53,95,.045)', overflow: 'hidden', transition: 'transform .25s, box-shadow .25s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 18px 34px rgba(22,53,95,.12)' } }}>
    <Box sx={{ position: 'relative', bgcolor: '#f5f8fc', p: 2, cursor: 'pointer' }} onClick={go}>
      {product.badge && <Chip label={product.badge} size="small" color={product.badge.includes('off') ? 'error' : 'primary'} sx={{ position: 'absolute', top: 14, left: 14, fontWeight: 700, fontSize: 11, zIndex: 1 }} />}
      <IconButton onClick={toggleLike} sx={{ position: 'absolute', right: 10, top: 8, bgcolor: 'white', color: liked ? 'error.main' : 'text.secondary', '&:hover': { bgcolor: 'white' }, zIndex: 1 }} size="small">{liked ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}</IconButton>
      <Box component="img" src={product.image} alt={product.name} sx={{ width: '100%', height: { xs: 180, sm: 205 }, objectFit: 'cover', mixBlendMode: 'multiply', borderRadius: 2 }} />
    </Box>
    <CardContent sx={{ p: 2.25, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, mb: .7 }}>{product.category}</Typography>
      <Typography onClick={go} sx={{ fontWeight: 700, lineHeight: 1.35, minHeight: 44, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>{product.name}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.2, gap: .7 }}><Rating value={product.rating} precision={.1} size="small" readOnly /><Typography variant="caption" color="text.secondary">{product.rating} ({product.reviews})</Typography></Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mt: 1.5, mb: 1.8 }}><Typography variant="h6" sx={{ fontWeight: 800, color: '#15233c' }}>{formatPrice(product.price)}</Typography><Typography variant="body2" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>{formatPrice(product.oldPrice)}</Typography></Box>
      <Button fullWidth variant="contained" startIcon={<AddShoppingCart />} onClick={addToCart} sx={{ mt: 'auto', borderRadius: 2, py: 1.15, fontWeight: 700 }}>Add to cart</Button>
    </CardContent>
  </Card>;
}
