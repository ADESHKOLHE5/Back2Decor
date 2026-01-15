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


import styles from "./CardDesign.module.css";
import type { Product } from "../../Type/product";

interface Props {
  product: Product;
}

const CardDesign = ({ product }: Props) => {
  return (
    <Card className={styles.card}>
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

        <IconButton className={styles.wishlist}>
          <FavoriteBorderIcon />
        </IconButton>

        <Button variant="contained" className={styles.cartBtn}>
          Add to Cart
        </Button>
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
                  ₹{(product.price * 83).toFixed(0)}
                </Typography>
                <Typography className={styles.price}>
                  ₹{((product.price * 83) * (1 - product.discount / 100)).toFixed(0)}
                </Typography>
              </div>
            ) : (
              <Typography className={styles.price}>
                ₹{(product.price * 83).toFixed(0)}
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
