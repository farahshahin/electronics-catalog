import { useState } from 'react';

import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import {
  AccountCircleOutlined,
  Close,
  FavoriteBorder,
  Menu,
  Search,
  ShoppingBagOutlined,
} from '@mui/icons-material';

const navItems = [
  ['Home', '/'],
  ['Categories', '/categories'],
  ['Products', '/products'],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const go = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setOpen(false);
  };

  const handleSearch = () => {
    const query = searchValue.trim();

    if (query) {
      go(`/products?search=${encodeURIComponent(query)}`);
    } else {
      go('/products');
    }
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.96)',
          color: 'text.primary',
          borderBottom: '1px solid #e9edf3',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        <Toolbar
          sx={{
            minHeight: {
              xs: 68,
              md: 78,
            },

            px: {
              xs: 1.5,
              sm: 3,
              md: 5,
              lg: 7,
            },

            gap: {
              xs: 1,
              md: 2,
            },
          }}
        >
          {/* ================= MOBILE MENU ================= */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },

              color: '#526071',

              width: 42,
              height: 42,

              flexShrink: 0,

              '&:hover': {
                bgcolor: '#f3f6fa',
              },
            }}
          >
            <Menu />
          </IconButton>

          {/* ================= LOGO ================= */}
          <Box
            onClick={() => go('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',

              gap: 1.1,

              cursor: 'pointer',

              mr: {
                xs: 'auto',
                md: 2,
              },

              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,

                borderRadius: 2.5,

                display: 'grid',
                placeItems: 'center',

                bgcolor: '#2067dc',
                color: '#fff',

                fontWeight: 800,
                fontSize: 18,

                boxShadow:
                  '0 7px 18px rgba(32,103,220,0.22)',

                flexShrink: 0,
              }}
            >
              T
            </Box>

            <Typography
              sx={{
                fontSize: {
                  xs: 20,
                  md: 22,
                },

                fontWeight: 800,

                letterSpacing: '-0.045em',

                color: '#13213a',

                lineHeight: 1,

                whiteSpace: 'nowrap',
              }}
            >
              Electro
              <Box
                component="span"
                sx={{
                  color: '#2067dc',
                }}
              >
                Shop
              </Box>
            </Typography>
          </Box>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },

              alignItems: 'center',

              justifyContent: 'center',

              gap: 1,

              flex: 1,

              whiteSpace: 'nowrap',
            }}
          >
            {navItems.map(([label, path]) => (
              <Box
                key={label}
                component="button"
                onClick={() => go(path)}
                sx={{
                  border: 0,
                  outline: 'none',

                  background: 'transparent',

                  cursor: 'pointer',

                  px: 2,
                  py: 1,

                  color: '#596579',

                  fontFamily: 'inherit',

                  fontSize: 14,
                  fontWeight: 600,

                  borderRadius: 2,

                  whiteSpace: 'nowrap',

                  textDecoration: 'none',

                  '&:hover': {
                    color: '#2067dc',

                    bgcolor: '#f4f7fc',

                    textDecoration: 'none',
                  },

                  '&:focus': {
                    outline: 'none',
                    textDecoration: 'none',
                  },

                  '&:focus-visible': {
                    outline: 'none',
                    textDecoration: 'none',
                  },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>

          {/* ================= RIGHT ACTIONS ================= */}
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',

              gap: {
                xs: 0,
                sm: 0.4,
                md: 0.6,
              },

              flexShrink: 0,

              whiteSpace: 'nowrap',
            }}
          >
            {/* ================= SEARCH FIELD ================= */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex',
                },

                alignItems: 'center',

                width: {
                  sm: 180,
                  md: 220,
                  lg: 250,
                },

                height: 42,

                px: 1.5,

                borderRadius: 2.5,

                bgcolor: '#f5f7fa',

                border: '1px solid transparent',

                transition: 'all 0.2s ease',

                '&:focus-within': {
                  bgcolor: '#fff',

                  borderColor: '#b9cff5',

                  boxShadow:
                    '0 0 0 3px rgba(32,103,220,0.08)',
                },
              }}
            >
              <Search
                sx={{
                  color: '#7a8699',

                  fontSize: 20,

                  mr: 1,
                }}
              />

              <InputBase
                value={searchValue}
                onChange={(event) =>
                  setSearchValue(event.target.value)
                }
                onKeyDown={handleSearchKeyDown}
                placeholder="Search products..."
                inputProps={{
                  'aria-label': 'Search products',
                }}
                sx={{
                  flex: 1,

                  minWidth: 0,

                  fontSize: 13.5,

                  color: '#27364d',

                  '& input::placeholder': {
                    color: '#8994a5',

                    opacity: 1,
                  },
                }}
              />

              {searchValue && (
                <IconButton
                  onClick={() => setSearchValue('')}
                  size="small"
                  sx={{
                    width: 26,
                    height: 26,

                    color: '#8994a5',

                    '&:hover': {
                      bgcolor: '#e9edf3',
                    },
                  }}
                >
                  <Close
                    sx={{
                      fontSize: 16,
                    }}
                  />
                </IconButton>
              )}
            </Box>

            {/* ================= MOBILE SEARCH ================= */}
            <IconButton
              onClick={() => go('/products')}
              sx={{
                display: {
                  xs: 'flex',
                  sm: 'none',
                },

                color: '#526071',

                width: 42,
                height: 42,

                flexShrink: 0,

                '&:hover': {
                  bgcolor: '#f3f6fa',

                  color: '#2067dc',
                },
              }}
            >
              <Search fontSize="small" />
            </IconButton>

            {/* ================= FAVORITES ================= */}
            <IconButton
              sx={{
                color: '#526071',

                width: 42,
                height: 42,

                display: {
                  xs: 'none',
                  sm: 'flex',
                },

                flexShrink: 0,

                '&:hover': {
                  bgcolor: '#f3f6fa',

                  color: '#2067dc',
                },
              }}
            >
              <Badge
                badgeContent={0}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: 9,

                    minWidth: 16,

                    height: 16,
                  },
                }}
              >
                <FavoriteBorder fontSize="small" />
              </Badge>
            </IconButton>

            {/* ================= CART ================= */}
            <IconButton
              sx={{
                color: '#526071',

                width: 42,
                height: 42,

                flexShrink: 0,

                '&:hover': {
                  bgcolor: '#f3f6fa',

                  color: '#2067dc',
                },
              }}
            >
              <Badge
                badgeContent={0}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: 9,

                    minWidth: 16,

                    height: 16,
                  },
                }}
              >
                <ShoppingBagOutlined fontSize="small" />
              </Badge>
            </IconButton>

            {/* ================= ACCOUNT ================= */}
            <IconButton
              sx={{
                color: '#526071',

                width: 42,
                height: 42,

                display: {
                  xs: 'none',
                  sm: 'flex',
                },

                flexShrink: 0,

                '&:hover': {
                  bgcolor: '#f3f6fa',

                  color: '#2067dc',
                },
              }}
            >
              <AccountCircleOutlined fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: '82vw',
              sm: 300,
            },

            maxWidth: 320,

            bgcolor: '#fff',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',

            display: 'flex',

            flexDirection: 'column',
          }}
        >
          {/* ================= DRAWER HEADER ================= */}
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',

              justifyContent: 'space-between',

              px: 2.5,

              py: 2.2,

              borderBottom:
                '1px solid #edf0f5',
            }}
          >
            <Box
              sx={{
                display: 'flex',

                alignItems: 'center',

                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 34,

                  height: 34,

                  borderRadius: 2,

                  display: 'grid',

                  placeItems: 'center',

                  bgcolor: '#2067dc',

                  color: '#fff',

                  fontWeight: 800,
                }}
              >
                T
              </Box>

              <Typography
                sx={{
                  fontWeight: 800,

                  fontSize: 18,

                  color: '#13213a',

                  whiteSpace: 'nowrap',
                }}
              >
                Electro
                <Box
                  component="span"
                  sx={{
                    color: '#2067dc',
                  }}
                >
                  Shop
                </Box>
              </Typography>
            </Box>

            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                color: '#526071',

                '&:hover': {
                  bgcolor: '#f3f6fa',
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* ================= MOBILE SEARCH ================= */}
          <Box
            sx={{
              display: 'flex',

              alignItems: 'center',

              mx: 2,

              mt: 2,

              px: 1.5,

              height: 44,

              borderRadius: 2.5,

              bgcolor: '#f5f7fa',

              border: '1px solid #edf0f5',
            }}
          >
            <Search sx={{color: '#7a8699',fontSize: 20,mr: 1, }} />

            <InputBase value={searchValue}
              onChange={(event) => setSearchValue(event.target.value) }
              onKeyDown={handleSearchKeyDown}
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'Search products', }}
              sx={{
                flex: 1,
                minWidth: 0,
                fontSize: 14,
                color: '#27364d',
                '& input::placeholder': { color: '#8994a5',opacity: 1,}, }}
            />
          </Box>

          <List sx={{px: 1.5, py: 2, }} >
            {navItems.map(([label, path]) => (
              <ListItemButton key={label} onClick={() => go(path)}
                sx={{minHeight: 48,mb: 0.5,  px: 2,borderRadius: 2,whiteSpace: 'nowrap',
                   '&:hover': { bgcolor: '#f3f7fd', },
                  '&:hover .MuiListItemText-primary':  { color: '#2067dc',},
                }}
              >
                <ListItemText primary={label} 
                primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#526071',
                    whiteSpace: 'nowrap',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}