import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  Typography,
} from '@mui/material';

interface ProductFiltersProps {
  category: string;
  setCategory: (value: string) => void;
  brand: string;
  setBrand: (value: string) => void;
  price: number[];
  setPrice: (value: number[]) => void;
  rating: number;
  setRating: (value: number) => void;
}

const categories = [
  'All categories',
  'Smartphones',
  'Laptops & Computers',
  'Headphones & Audio',
  'Smartwatches',
  'Gaming',
  'Smart Home',
  'Accessories',
];

const brands = [
  'All brands',
  'Apple',
  'Samsung',
  'Sony',
  'Logitech',
  'Anker',
];

const ratings = [4, 3, 2];

export default function ProductFilters({
  category,
  setCategory,
  brand,
  setBrand,
  price,
  setPrice,
  rating,
  setRating,
}: ProductFiltersProps) {
  return (
    <Paper
      sx={{
        p: { xs: 1.25, md: 2.5 },
        borderRadius: { xs: 2.5, md: 3.5 },
        border: '1px solid #e9edf3',
        boxShadow: '0 10px 30px rgba(18, 34, 60, 0.04)',
        bgcolor: '#fff',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 1.5, md: 2.5 } }}>
        <Typography fontWeight={800} sx={{ fontSize: { xs: 15, md: 18 } }}>
          Filter by
        </Typography>
        <Box sx={{ px: 1, py: 0.45, borderRadius: 999, bgcolor: 'primary.light', color: 'primary.main', fontWeight: 700, fontSize: 10 }}>
          {categories.length - 1}+ options
        </Box>
      </Box>

      <Box sx={{ mb: { xs: 1.5, md: 2.5 }, p: { xs: 1, md: 1.5 }, border: '1px solid #edf2f8', borderRadius: 2, bgcolor: '#f9fbff' }}>
        <Typography variant="body2" fontWeight={700} sx={{ mb: 1, color: 'text.primary', fontSize: { xs: 12.5, md: 14 } }}>
          Category
        </Typography>

        <FormControl fullWidth size="small">
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              borderRadius: 2,
              bgcolor: '#f7f9fc',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e7edf5' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#c6d5f2' },
            }}
          >
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Divider sx={{ mb: 2.5 }} />

      <Box sx={{ mb: { xs: 1.5, md: 2.5 }, p: { xs: 1, md: 1.5 }, border: '1px solid #edf2f8', borderRadius: 2, bgcolor: '#f9fbff' }}>
        <Typography variant="body2" fontWeight={700} sx={{ mb: 1.5, fontSize: { xs: 12.5, md: 14 } }}>
          Price range
        </Typography>

        <Slider
          value={price}
          onChange={(_, value) => setPrice(value as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={1600}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': { boxShadow: '0 0 0 4px rgba(33,103,220,.12)' },
          }}
        />

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">$0</Typography>
          <Typography variant="caption" color="text.secondary">$1,600+</Typography>
        </Stack>
      </Box>

      <Divider sx={{ mb: 2.5 }} />

      <Box sx={{ mb: { xs: 1.5, md: 2.5 }, p: { xs: 1, md: 1.5 }, border: '1px solid #edf2f8', borderRadius: 2, bgcolor: '#f9fbff' }}>
        <Typography variant="body2" fontWeight={700} sx={{ mb: 1, fontSize: { xs: 12.5, md: 14 } }}>
          Brand
        </Typography>

        <Stack spacing={0.1}>
          {brands.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  checked={brand === item}
                  onChange={() => setBrand(item)}
                  size="small"
                  sx={{
                    color: 'primary.main',
                    '&.Mui-checked': { color: 'primary.main' },
                  }}
                />
              }
              label={<Typography variant="body2">{item}</Typography>}
              sx={{ m: 0, px: 0.5, borderRadius: 1.5, '&:hover': { bgcolor: '#f7f9fc' } }}
            />
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 2 }} />
    </Paper>
  );
}
