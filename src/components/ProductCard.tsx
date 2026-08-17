import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import type { Product } from "@/data/catalog";
import { formatPrice } from "@/data/catalog";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  // =====================================================
  // LOAD WISHLIST STATE FROM SHELL
  // =====================================================

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data;

      if (!message?.type) {
        return;
      }

      // ================================================
      // INITIAL WISHLIST DATA
      // ================================================

      if (message.type === "WISHLIST_DATA") {
        const wishlist = Array.isArray(message.wishlist)
          ? message.wishlist
          : [];

        const exists = wishlist.some(
          (item: any) =>
            item.productId === product.id
        );

        setLiked(exists);

        return;
      }

      // ================================================
      // WISHLIST STATE
      // ================================================

      if (
        message.type === "WISHLIST_STATE" &&
        message.productId === product.id
      ) {
        setLiked(message.liked === true);

        return;
      }

      // ================================================
      // CART UPDATED
      // ================================================

      if (
        message.type === "CART_UPDATED" &&
        message.productId === product.id &&
        message.success === true
      ) {
        setAdded(true);

        setTimeout(() => {
          setAdded(false);
        }, 2000);

        return;
      }
    };

    window.addEventListener(
      "message",
      handleMessage
    );

    // Ask Shell for the current wishlist
    window.parent.postMessage(
      {
        type: "GET_WISHLIST",
      },
      "*"
    );

    return () => {
      window.removeEventListener(
        "message",
        handleMessage
      );
    };
  }, [product.id]);

  // =====================================================
  // PRODUCT DETAILS
  // =====================================================

  const go = () => {
    navigate(`/products/${product.id}`);
  };

  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = (
    event?: {
      stopPropagation: () => void;
      preventDefault?: () => void;
    }
  ) => {
    event?.stopPropagation();
    event?.preventDefault?.();

    setAdded(false);

    window.parent.postMessage(
      {
        type: "ADD_TO_CART",
        productId: product.id,
        product: product,
        delta: 1,
      },
      "*"
    );
  };

  // =====================================================
  // TOGGLE WISHLIST
  // =====================================================

  const toggleLike = (
    event?: {
      stopPropagation: () => void;
    }
  ) => {
    event?.stopPropagation();

    const nextLiked = !liked;

    // Update UI immediately
    setLiked(nextLiked);

    // Send update to Shell
    window.parent.postMessage(
      {
        type: "WISHLIST_UPDATED",
        productId: product.id,
        liked: nextLiked,
        product: product,
      },
      "*"
    );
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        border: "1px solid #e9edf3",

        borderRadius: {
          xs: 2.5,
          sm: 3,
          md: 3.5,
        },

        boxShadow:
          "0 8px 30px rgba(22,53,95,.045)",

        overflow: "hidden",

        transition:
          "transform .25s, box-shadow .25s",

        "&:hover": {
          transform: {
            xs: "none",
            sm: "translateY(-5px)",
          },

          boxShadow: {
            xs:
              "0 8px 30px rgba(22,53,95,.045)",

            sm:
              "0 18px 34px rgba(22,53,95,.12)",
          },
        },
      }}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <Box
        sx={{
          position: "relative",
          bgcolor: "#f5f8fc",

          p: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },

          cursor: "pointer",
        }}
        onClick={go}
      >
        {/* WISHLIST */}

        <IconButton
          onClick={toggleLike}
          size="small"
          sx={{
            position: "absolute",

            right: {
              xs: 5,
              sm: 8,
              md: 10,
            },

            top: {
              xs: 5,
              sm: 7,
              md: 8,
            },

            width: {
              xs: 28,
              sm: 32,
            },

            height: {
              xs: 28,
              sm: 32,
            },

            bgcolor: "white",

            color: liked
              ? "error.main"
              : "text.secondary",

            "&:hover": {
              bgcolor: "white",
            },

            "& svg": {
              fontSize: {
                xs: 16,
                sm: 18,
              },
            },

            zIndex: 1,
          }}
        >
          {liked ? (
            <Favorite />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>

        {/* PRODUCT IMAGE */}

        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",

            height: {
              xs: 120,
              sm: 160,
              md: 190,
              lg: 205,
            },

            objectFit: "cover",

            mixBlendMode: "multiply",

            borderRadius: {
              xs: 1.5,
              sm: 2,
            },
          }}
        />
      </Box>

      {/* =================================================
          CONTENT
      ================================================= */}

      <CardContent
        sx={{
          p: {
            xs: 1.25,
            sm: 1.75,
            md: 2.25,
          },

          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* CATEGORY */}

        <Typography
          variant="caption"
          sx={{
            color: "primary.main",
            fontWeight: 700,

            mb: {
              xs: 0.4,
              sm: 0.6,
              md: 0.7,
            },

            fontSize: {
              xs: "0.65rem",
              sm: "0.7rem",
              md: "0.75rem",
            },
          }}
        >
          {product.category}
        </Typography>

        {/* PRODUCT NAME */}

        <Typography
          onClick={go}
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,

            minHeight: {
              xs: 36,
              sm: 42,
              md: 44,
            },

            fontSize: {
              xs: "0.8rem",
              sm: "0.9rem",
              md: "1rem",
            },

            cursor: "pointer",

            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {product.name}
        </Typography>

        {/* RATING */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            mt: {
              xs: 0.7,
              sm: 1,
              md: 1.2,
            },

            gap: {
              xs: 0.3,
              sm: 0.5,
              md: 0.7,
            },
          }}
        >
          <Rating
            value={product.rating}
            precision={0.1}
            size="small"
            readOnly
            sx={{
              "& .MuiRating-icon": {
                fontSize: {
                  xs: 14,
                  sm: 17,
                  md: 19,
                },
              },
            }}
          />

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              fontSize: {
                xs: "0.6rem",
                sm: "0.65rem",
                md: "0.75rem",
              },
            }}
          >
            {product.rating} ({product.reviews})
          </Typography>
        </Box>

        {/* PRICE */}

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",

            gap: {
              xs: 0.5,
              sm: 0.7,
              md: 1,
            },

            mt: {
              xs: 0.8,
              sm: 1.2,
              md: 1.5,
            },

            mb: {
              xs: 1,
              sm: 1.4,
              md: 1.8,
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              color: "#15233c",

              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
                md: "1.25rem",
              },
            }}
          >
            {formatPrice(product.price)}
          </Typography>

          {product.oldPrice && (
            <Typography
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",

                fontSize: {
                  xs: "0.65rem",
                  sm: "0.7rem",
                  md: "0.875rem",
                },
              }}
            >
              {formatPrice(product.oldPrice)}
            </Typography>
          )}
        </Box>

        {/* ADD TO CART */}

        <Button
          fullWidth
          variant="contained"
          startIcon={
            added
              ? undefined
              : <AddShoppingCart />
          }
          onClick={addToCart}
          disabled={added}
          sx={{
            mt: "auto",

            borderRadius: {
              xs: 1.5,
              sm: 2,
            },

            py: {
              xs: 0.7,
              sm: 0.9,
              md: 1.15,
            },

            minHeight: {
              xs: 34,
              sm: 40,
              md: 44,
            },

            fontWeight: 700,

            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
              md: "0.9rem",
            },

            "& .MuiButton-startIcon": {
              marginRight: {
                xs: 0.3,
                sm: 0.5,
                md: 1,
              },

              "& svg": {
                fontSize: {
                  xs: 16,
                  sm: 18,
                  md: 20,
                },
              },
            },
          }}
        >
          {added
            ? "Added to cart ✓"
            : "Add to cart"}
        </Button>
      </CardContent>
    </Card>
  );
}