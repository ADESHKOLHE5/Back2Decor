import { useWishlist } from "../Contexts/WishlistContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
import type { Product } from "../Type/product";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wishlist = () => {
  const { state, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  if (state.items.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Your wishlist is empty
        </Typography>
        <Button variant="contained" onClick={() => navigate("/shop")} sx={{ mt: 2 }}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h4">
          My Wishlist ({state.items.length})
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={() => clearWishlist()}
        >
          Clear Wishlist
        </Button>
      </Box>

      <Grid container spacing={3}>
        {state.items.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" color="textSecondary" gutterBottom>
                  {product.category}
                </Typography>
                <Typography variant="h6" gutterBottom noWrap>
                  {product.title}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                  <Box>
                    {product.discount ? (
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: "line-through", color: "textSecondary" }}
                        >
                          ₹{product.price.toFixed(0)}
                        </Typography>
                        <Typography variant="h6" color="error">
                          ₹{(product.price * (1 - product.discount / 100)).toFixed(0)}
                        </Typography>
                      </Box>
                    ) : (
                      <Typography variant="h6">
                        ₹{product.price.toFixed(0)}
                      </Typography>
                    )}
                  </Box>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                      title="Add to Cart"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeFromWishlist(product.id)}
                      title="Remove from Wishlist"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="outlined"
        onClick={() => navigate("/shop")}
        sx={{ mt: 4 }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default Wishlist;
