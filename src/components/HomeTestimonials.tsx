import { Box, Grid, Typography } from '@mui/material';

import CustomerFeedback from '@/components/CustomerFeedback';

const feedbacks = [
  {
    name: 'Sarah M.',
    role: 'Verified Customer',
    feedback:
      'The products were exactly as described, delivery was quick, and the whole shopping experience was really easy.',
  },
  {
    name: 'James R.',
    role: 'Verified Customer',
    feedback:
      'Great quality and very fast delivery. The website was simple to use and I found exactly what I needed.',
  },
  {
    name: 'Emily K.',
    role: 'Verified Customer',
    feedback:
      'I really enjoyed my shopping experience. The product quality was excellent and everything arrived perfectly.',
  },
  {
    name: 'Michael T.',
    role: 'Verified Customer',
    feedback:
      'Excellent service from start to finish. The order process was smooth and delivery was faster than expected.',
  },
];

export default function HomeTestimonials() {
  return (
    <Box sx={{ py: { xs: 4, md: 5 } }}>
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: '.14em',
          mb: 2,
          textAlign: 'center',
        }}
      >
        Customer Feedback
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 2, sm: 3 },
        }}
      >
        {feedbacks.map((item) => (
          <Grid item xs={12} sm={6} key={item.name}>
            <CustomerFeedback  name={item.name} role={item.role} feedback={item.feedback} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}