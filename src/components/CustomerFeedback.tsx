import { Avatar, Box, Stack, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface CustomerFeedbackProps {
  name: string;
  role?: string;
  feedback: string;
  avatar?: string;
}

export default function CustomerFeedback({
  name,
  role = 'Verified Customer',
  feedback,
  avatar,
}: CustomerFeedbackProps) {
  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid',
        borderColor: 'grey.200',
        borderLeft: '4px solid',
        borderLeftColor: 'primary.main',
        borderRadius: 2,
        p: { xs: 2, sm: 2.5 },
        bgcolor: 'background.paper',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 5px 18px rgba(0, 0, 0, 0.08)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar src={avatar} alt={name}
          sx={{ width: { xs: 48, sm: 54 },height: { xs: 48, sm: 54 },bgcolor: 'primary.main',fontWeight: 700,flexShrink: 0,}}
        >
          {!avatar && name.charAt(0)}
        </Avatar>

        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography sx={{ fontSize: '0.7rem',color: 'primary.main', fontWeight: 700,mb: 0.2,}}>
            {role}
          </Typography>

          <Typography
            sx={{
              fontSize: '0.95rem',
              fontWeight: 800,
              color: 'text.primary',
              mb: 0.5,
            }}
          >
            {name}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                left: -3,
                top: -3,
                fontSize: 20,
                color: 'primary.main',
                opacity: 0.6,
              }}
            />

            <Typography
              sx={{
                pl: 2,
                color: 'text.secondary',
                fontSize: '0.85rem',
                lineHeight: 1.6,
              }}
            >
              {feedback}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}