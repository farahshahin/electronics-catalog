import { ArrowForward } from '@mui/icons-material';
import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  action: string;
  onClick: () => void;
}

export default function SectionHeader({
  eyebrow,
  title,
  action,
  onClick,
}: SectionHeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="end"
      sx={{ mb: 3 }}
    >
      <Box>
        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '.13em',
          }}
        >
          {eyebrow}
        </Typography>

        <Typography
          variant="h2"
          sx={{ mt: 0.4 }}
        >
          {title}
        </Typography>
      </Box>

      <Button
        onClick={onClick}
        endIcon={<ArrowForward />}
        sx={{
          display: {
            xs: 'none',
            sm: 'inline-flex',
          },
          fontWeight: 700,
        }}
      >
        {action}
      </Button>
    </Stack>
  );
}