import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Rating
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import styles from "./CardDesign.module.css";
import type { Product } from "../../Type/product";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../Contexts/CartContext";
import { useWishlist } from "../../Contexts/WishlistContext";

interface Props {
  product: Product;
  isAdmin?: boolean;
}

const CardDesign = ({ product, isAdmin = false }: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Card className={styles.card} onDoubleClick={() => navigate(`/products/${product.id}`)}>
      <div className={styles.imageWrapper}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          className={styles.image}
        />

        {product.discount && (
          <div className={styles.discountBadge}>
            {product.discount}%
          </div>
        )}

        <IconButton className={styles.wishlist} onClick={handleWishlistClick}>
          {isInWishlist(product.id) ? (
            <FavoriteIcon sx={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        {!isAdmin && (
          <Button variant="contained" className={styles.cartBtn} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </div>

      <CardContent>
        <Typography className={styles.category}>
          {product.category}
        </Typography>

        <Typography variant="h6" className={styles.title}>
          {product.title}
        </Typography>

        <div className={styles.bottom}>
          <div>
            {product.discount ? (
              <div>
                <Typography className={styles.originalPrice}>
                  ₹{(product.price)}
                </Typography>
                <Typography className={styles.price}>
                  ₹{((product.price) * (1 - product.discount / 100)).toFixed(0)}
                </Typography>
              </div>
            ) : (
              <Typography className={styles.price}>
                ₹{(product.price).toFixed(0)}
              </Typography>
            )}



          </div>

          <Rating value={product.rating} readOnly size="small" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDesign;
