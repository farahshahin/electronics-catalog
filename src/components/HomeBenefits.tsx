import {
  LocalShippingOutlined,
  Replay,
  Security,
  SupportAgent,
} from '@mui/icons-material';

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

const benefits = [
  {
    Icon: LocalShippingOutlined,
    title: 'Fast Delivery',
    subtitle: 'Quick dispatch',
  },
  {
    Icon: Security,
    title: 'Secure Payment',
    subtitle: 'Protected checkout',
  },
  {
    Icon: Replay,
    title: 'Easy Returns',
    subtitle: 'Hassle-free',
  },
  {
    Icon: SupportAgent,
    title: 'Customer Support',
    subtitle: 'Always here',
  },
];

export default function HomeBenefits() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 1.5, md: 2 }} sx={{py: { xs: 3, md: 4 }, borderBottom: '1px solid #edf0f5', }}>
        {benefits.map(({ Icon, title, subtitle }) => (
          <Grid item xs={6} md={3} key={title}>
            <Stack direction="row"  spacing={1.2} alignItems="center" sx={{minHeight: 62,px: { xs: 0.5, md: 1 }, }}>
              <Icon sx={{color: 'primary.main', fontSize: { xs: 24, md: 28 },  }}/>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" fontWeight={800}>
                  {title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.5 }} >
                  {subtitle}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}