import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';

interface ProductSearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
  mobileFilters: boolean;
  setMobileFilters: (value: boolean) => void;
}

const sortOptions = [
  'Featured',
  'Price: low to high',
  'Price: high to low',
  'Top rated',
];

export default function ProductSearchBar({
  query,
  setQuery,
  sort,
  setSort,
  mobileFilters,
  setMobileFilters,
}: ProductSearchBarProps) {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      useFlexGap
      flexWrap="wrap"
      alignItems="stretch"
      sx={{ mb: 3, width: '100%',}}
    >
      <TextField placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: '1 1 320px',
          minWidth: { xs: 0, sm: 220 },
          maxWidth: '100%',
        }}
      />

      <Button
        onClick={() => setMobileFilters(!mobileFilters)}
        variant="outlined"
        startIcon={<FilterList />}
        sx={{
          display: { md: 'none' },
          whiteSpace: 'nowrap',
          flex: '0 0 auto',
          minWidth: 110,
        }}
      >
        Filters
      </Button>

      <Select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        size="small"
        sx={{
          flex: { xs: '1 1 180px', md: '0 1 200px' },
          minWidth: { xs: 140, sm: 170 },
          maxWidth: '100%',
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}