import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import styles from "./Features.module.css";

export default function Features() {
  return (
    <Box className={styles.features}>
      <Box className={styles.card}>
        <Box className={styles.icon}>
          <LocalShippingIcon />
        </Box>
        <Typography variant="h6" className={styles.title}>
          Fast Delivery
        </Typography>
        <Typography className={styles.text}>
          Free shipping on all orders over $50 within the continental US.
        </Typography>
      </Box>

      <Box className={styles.card}>
        <Box className={styles.icon}>
          <VerifiedUserIcon />
        </Box>
        <Typography variant="h6" className={styles.title}>
          Quality Guarantee
        </Typography>
        <Typography className={styles.text}>
          We source only the finest professional-grade supplies.
        </Typography>
      </Box>

      <Box className={styles.card}>
        <Box className={styles.icon}>
          <AccessTimeIcon />
        </Box>
        <Typography variant="h6" className={styles.title}>
          24/7 Support
        </Typography>
        <Typography className={styles.text}>
          Expert bakers available to help you anytime.
        </Typography>
      </Box>
    </Box>
  );
}
