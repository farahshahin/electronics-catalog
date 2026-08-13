import { Box, Typography } from '@mui/material';
export default function CategoryHeader() {
  return (
    <Box sx={{ maxWidth: 650,  mb: 2, }}>
      <Typography variant="overline"color="primary"fontWeight={800} letterSpacing=".14em" >
        DISCOVER MORE
      </Typography>

      <Typography variant="h1"sx={{ mt: 1, }} >
        Shop by category.
      </Typography>

      <Typography color="text.secondary" sx={{mt: 1.5,fontSize: 17,}} >
        From everyday essentials to the most exciting new releases, find the
        right tech for every part of your life.
      </Typography>
    </Box>
  );
}

