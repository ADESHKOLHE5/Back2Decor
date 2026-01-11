import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import styles1 from "../Header/Header.module.css";

/* =========================
   Shop links (edit paths later)
========================= */
const footerShopLinks = [
  { label: "All Products", path: "/" },
  { label: "Baking Tools", path: "/" },
  { label: "Edible Decorations", path: "/" },
  { label: "Packaging", path: "/tools" },
  { label: "Sale Items", path: "/" },
];

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.container}>

        {/* Brand */}
        <Box className={styles.column}>
             {/* Logo */}
        <Typography className={styles1.logo} sx={{
    fontSize: {
      xs: "20px",  // mobile
      sm: "22px",  // tablet
      md: "26px",  // laptop
      lg: "28px",  // desktop
    }
  }}>
          Bake<span>2</span>Decor
        </Typography>

          <Typography className={styles.text}>
            Your one-stop shop for premium baking supplies, edible decorations,
            and professional tools. Let's make something sweet together.
          </Typography>

          <Box className={styles.socials}>
            <IconButton><a  href="https://www.instagram.com/"><InstagramIcon /></a></IconButton>
            <IconButton><a href="https://www.facebook.com/"><FacebookOutlinedIcon /></a></IconButton>
            <IconButton><a href="https://twitter.com/"><TwitterIcon /></a></IconButton>
          </Box>
        </Box>

        {/* Shop */}
        <Box className={styles.column}>
          <Typography className={styles.heading}>Shop</Typography>

          {footerShopLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={styles.link}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        {/* Contact */}
        <Box className={styles.column}>
          <Typography className={styles.heading}>Contact Us</Typography>

          <Box className={styles.contactItem}>
            <LocationOnOutlinedIcon />
            <Typography>
              123 Baker Street, karver Nagar, CA 6544, Pune 123112
            </Typography>
          </Box>

          <Box className={styles.contactItem}>
            <PhoneOutlinedIcon />
            <Typography>+91 123-4567-890</Typography>
          </Box>

          <Box className={styles.contactItem}>
            <EmailOutlinedIcon />
            <Typography>hello@bake2decor.com</Typography>
          </Box>
        </Box>

        {/* Newsletter */}
        <Box className={styles.column}>
          <Typography className={styles.heading}>Newsletter</Typography>

          <Typography className={styles.text}>
            Subscribe to receive updates, access to exclusive deals, and more.
          </Typography>

          <TextField
            placeholder="Enter your email"
            size="small"
            fullWidth
            className={styles.input}
          />

          <Button fullWidth className={styles.subscribeBtn}>
            Subscribe
          </Button>
        </Box>

      </Box>

      {/* Bottom copyright */}
      <Box className={styles.bottom}>
        © 2026 Bake2Decor. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
