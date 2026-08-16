import { useState } from 'react';
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const brands = [
  { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple' },
  { name: 'Samsung', logo: 'https://cdn.simpleicons.org/samsung' },
  { name: 'Sony', logo: 'https://cdn.simpleicons.org/sony' },
  { name: 'ASUS', logo: 'https://cdn.simpleicons.org/asus' },
  { name: 'Lenovo', logo: 'https://cdn.simpleicons.org/lenovo' },
  { name: 'JBL', logo: 'https://cdn.simpleicons.org/jbl' },
  { name: 'LG', logo: 'https://cdn.simpleicons.org/lg' },
  { name: 'Dell', logo: 'https://cdn.simpleicons.org/dell' },
  { name: 'HP', logo: 'https://cdn.simpleicons.org/hp' },
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft' },
  { name: 'Nintendo', logo: 'https://cdn.simpleicons.org/nintendo' },
  { name: 'Xiaomi', logo: 'https://cdn.simpleicons.org/xiaomi' },
];

export default function HomeBrands() {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const visibleCount = isMobile ? 2 : 5;

  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) =>
      prev + visibleCount < brands.length ? prev + 1 : prev
    );
  };

  const previous = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleBrandClick = (brandName: string) => {
    navigate(`/products?brand=${encodeURIComponent(brandName)}`);
  };

  const visibleBrands = brands.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <Box sx={{ width: '100%', pb: { xs: 5, md: 7 } }}>
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          mb: { xs: 2, md: 2.5 },
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: '.14em',
        }}
      >
        Shop by Brand
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          width: '100%',
        }}
      >
        <IconButton
          onClick={previous}
          disabled={startIndex === 0}
          size="small"
          sx={{
            flexShrink: 0,
            width: { xs: 34, md: 42 },
            height: { xs: 34, md: 42 },
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'grey.50',
              borderColor: 'primary.main',
            },
          }}
        >
          <ArrowBackIos
            sx={{
              fontSize: { xs: 15, md: 18 },
              ml: 0.5,
            }}
          />
        </IconButton>

        <Stack
          direction="row"
          sx={{
            flex: 1,
            overflow: 'hidden',
            gap: { xs: 1.5, sm: 2, md: 2.5 },
          }}
        >
          {visibleBrands.map(({ name, logo }) => (
            <Box
              key={name}
              onClick={() => handleBrandClick(name)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleBrandClick(name);
                }
              }}
              sx={{
                flex: '1 1 0',
                minWidth: 0,
                height: { xs: 90, sm: 105, md: 120 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 2,
                bgcolor: 'background.paper',
                transition: 'all .2s ease',
                cursor: 'pointer',

                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: 2,
                  transform: 'translateY(-2px)',
                },

                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 2,
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`${name} logo`}
                loading="lazy"
                sx={{
                  width: { xs: 70, sm: 85, md: 105 },
                  height: { xs: 55, sm: 65, md: 75 },
                  objectFit: 'contain',
                  opacity: 0.8,
                  transition: 'all .2s ease',

                  '.MuiBox-root:hover &': {
                    opacity: 1,
                    transform: 'scale(1.08)',
                  },
                }}
              />
            </Box>
          ))}
        </Stack>

        <IconButton
          onClick={next}
          disabled={startIndex + visibleCount >= brands.length}
          size="small"
          sx={{
            flexShrink: 0,
            width: { xs: 34, md: 42 },
            height: { xs: 34, md: 42 },
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'grey.50',
              borderColor: 'primary.main',
            },
          }}
        >
          <ArrowForwardIos
            sx={{
              fontSize: { xs: 15, md: 18 },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

