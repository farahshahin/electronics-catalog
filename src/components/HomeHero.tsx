import { ArrowForward } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

interface HomeHeroProps {
  onShopClick: () => void;
  onCategoriesClick: () => void;
}

export default function HomeHero({
  onShopClick,
  onCategoriesClick,
}: HomeHeroProps) {
  return (
    <Box sx={{ bgcolor: '#f4f8ff', overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 2.5, md: 3 } }} >
        <Grid container alignItems="center" spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Chip label="THE FUTURE OF SHOPPING"
              sx={{
                bgcolor: '#dceaff',
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: '.08em',
                fontSize: 10,
                mb: 1.5,
              }}
            />

            <Typography variant="h1" sx={{maxWidth: 620, fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },lineHeight: 1.08,fontWeight: 700,}} >
              Discover your next{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                gadget
              </Box>
              .
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{maxWidth: 520,mt: 1.5,fontSize: 16, lineHeight: 1.6,  }}>
              Explore premium devices, smart essentials, and everyday tech
              upgrades built to fit the way you live and work.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}sx={{ mt: 2.5 }}>
              <Button onClick={onShopClick} size="large" variant="contained" endIcon={<ArrowForward />}sx={{ py: 1.2, px: 2.5 }} >
                Shop now
              </Button>

              <Button onClick={onCategoriesClick}size="large"  variant="outlined"sx={{ py: 1.2, px: 2.5 }}>
                Explore categories
              </Button>
            </Stack>

            <Stack direction="row"  alignItems="center"  spacing={1.5}   sx={{ mt: 2.5 }} >
              <Box sx={{ display: 'flex' }}>
                {['#ffd8cd', '#cce0ff', '#d9f2df', '#f7e1ba'].map(
                  (color, index) => (
                    <Box key={color}
                      sx={{
                        width: 28,
                        height: 28,
                        ml: index ? -1 : 0,
                        borderRadius: '50%',
                        bgcolor: color,
                        border: '3px solid #f4f8ff',
                      }}
                    />
                  ),
                )}
              </Box>

              <Typography variant="body2" color="text.secondary">
                <Box component="span"  sx={{ color: '#15233c', fontWeight: 700 }} >
                  20k+
                </Box>{' '}
                happy customers
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{position: 'relative', display: 'grid',placeItems: 'center',minHeight: { xs: 240, sm: 290, md: 360 }, }}>
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: '65%', md: '75%' },
                  height: { xs: '65%', md: '75%' },
                  borderRadius: '50%',
                  bgcolor: '#cfe1ff',
                  filter: 'blur(2px)',
                }}
              />

              <Box
                component="img"
                src="https://images.pexels.com/photos/16247545/pexels-photo-16247545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Modern collection of electronics"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 240, sm: 290, md: 360 },
                  objectFit: 'cover',
                  borderRadius: 5,
                  mixBlendMode: 'multiply',
                  filter: 'saturate(1.05)',
                }}
              />

              {/* New Arrivals */}
              <Paper
                sx={{
                  position: 'absolute',
                  top: { xs: '4%', md: '8%' },
                  right: { xs: 0, md: -5 },
                  p: 1.2,
                  borderRadius: 2.5,
                  boxShadow: '0 12px 30px rgba(39,76,130,.15)',
                }}
              >
                <Typography variant="caption" fontWeight={700}>
                  New arrivals
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Just landed
                </Typography>
              </Paper>

              <Paper
                sx={{
                  position: 'absolute',
                  bottom: { xs: '3%', md: '5%' },
                  left: { xs: 0, md: -5 },
                  p: 1.2,
                  borderRadius: 2.5,
                  boxShadow: '0 12px 30px rgba(39,76,130,.15)',
                }}
              >
                <Typography variant="caption" fontWeight={700}>
                  Quality first
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Curated tech picks
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}