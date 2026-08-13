import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';

interface Category {
  name: string;
  image: string;
  accent: string;
  count: string;
}

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export default function CategoryCard({
  category,
  onClick,
}: CategoryCardProps) {
  return (
    <Paper onClick={onClick}
      sx={{ p: 2, borderRadius: 3.5, bgcolor: '#FFFFFF', minHeight: 255,  cursor: 'pointer', overflow: 'hidden',border: '1px solid #D6DCE5',transition: 'all .25s',
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: '#1976D2',
          boxShadow: '0 15px 28px rgba(40, 70, 110, 0.1)',
        },
      }}>
      <Box component="img" src={category.image}  alt={category.name}
        sx={{ width: '100%',height: 150,objectFit: 'cover',borderRadius: 2.5, mixBlendMode: 'multiply',}}
      />
      <Typography variant="h6" fontWeight={800} sx={{ mt: 1.5,}} >
        {category.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{mt: 0.5,}}>
        {category.count}
      </Typography>
      <Button size="small" endIcon={<ArrowForward />} sx={{mt: 1,px: 0,fontWeight: 700,}}>
        Shop now
      </Button>
    </Paper>
  );
}