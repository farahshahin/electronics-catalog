import { useEffect, useMemo, useState } from 'react';

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Footer from '@/components/Footer';

import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Categories from '@/pages/Categories';
import ProductDetails from '@/pages/ProductDetails';

const CART_KEY = 'ElectroShop';



const theme = createTheme({
  palette: {
    primary: {
      main: '#2167dc',
      light: '#dceaff',
      dark: '#1649a3',
    },

    secondary: {
      main: '#ffbd4a',
    },

    background: {
      default: '#fff',
    },

    text: {
      primary: '#15233c',
      secondary: '#6d7b90',
    },

    success: {
      main: '#2aa66f',
    },

    error: {
      main: '#e45d67',
    },
  },

  typography: {
    fontSize: 13,

    fontFamily: 'Poppins, Arial, sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: '-.055em',
      lineHeight: 1.08,
      fontSize: '2.6rem',
    },

    h2: {
      fontWeight: 800,
      letterSpacing: '-.04em',
      fontSize: '1.6rem',
    },

    h3: {
      letterSpacing: '-.04em',
      fontSize: '1.4rem',
    },

    h6: {
      fontSize: '1rem',
    },

    body1: {
      lineHeight: 1.6,
      fontSize: '0.85rem',
    },

    body2: {
      fontSize: '0.8rem',
    },

    button: {
      fontFamily: 'Poppins, Arial, sans-serif',
      textTransform: 'none',
      fontSize: '0.8rem',
    },

    caption: {
      fontSize: '0.7rem',
    },

    overline: {
      fontSize: '0.65rem',
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },

    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});



function CatalogApp() {
  const location = useLocation();



  const detailId =
    location.pathname.startsWith('/products/') ||
    location.pathname.startsWith('/product/')
      ? location.pathname
          .split('/')
          .filter(Boolean)
          .slice(-1)[0] ?? ''
      : '';

 
  const [cart, setCart] = useState<Record<string, number>>(() => {
    try {
      const saved = window.localStorage.getItem(CART_KEY);

      return saved
        ? (JSON.parse(saved) as Record<string, number>)
        : {};
    } catch {
      return {};
    }
  });
  const cartCount = useMemo(() => {
    return Object.values(cart).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }, [cart]);
  useEffect(() => {
    const handleAddToCart = (event: Event) => {
      const customEvent =
        event as CustomEvent<{
          productId?: string;
          delta?: number;
        }>;

      const productId =
        customEvent.detail?.productId ?? 'unknown';

      const delta =
        customEvent.detail?.delta ?? 1;

      setCart((current) => ({
        ...current,

        [productId]:
          (current[productId] ?? 0) + delta,
      }));
    };

    window.addEventListener(
      'technova:add-to-cart',
      handleAddToCart
    );

    return () => {
      window.removeEventListener(
        'technova:add-to-cart',
        handleAddToCart
      );
    };
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
      );
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [location.pathname]);

  

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'ElectroShop | Home',
      '/categories': 'ElectroShop | Categories',
      '/products': 'ElectroShop | Products',
    };

    if (detailId) {
      document.title =
        `ElectroShop | ${detailId.replace(/-/g, ' ')}`;
    } else {
      document.title =
        titles[location.pathname] || 'ElectroShop';
    }
  }, [detailId, location.pathname]);

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      <main>
        <Routes>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* CATEGORIES */}

          <Route
            path="/categories"
            element={<Categories />}
          />

          {/* PRODUCTS */}

          <Route
            path="/products"
            element={<Products />}
          />

          {/* PRODUCT DETAILS */}

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* OLD PRODUCT URL */}

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          {/* UNKNOWN URL */}

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>
      </main>

      <Footer />
    </ThemeProvider>
  );
}



export default function App() {
  return (
    <BrowserRouter>
      <CatalogApp />
    </BrowserRouter>
  );
}