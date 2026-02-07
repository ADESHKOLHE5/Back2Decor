import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";



const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop All", path: "/shop" },
  { label: "Tools", path: "/tools" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "About", path: "/about" },
];

const Header = () => {
   const navigate = useNavigate();
  
  return (
    <AppBar position="static" elevation={0} className={styles.appBar}>
      <Toolbar className={styles.toolbar}>

        {/* Logo */}
        <Typography className={styles.logo} sx={{
    fontSize: {
      xs: "20px",  // mobile
      sm: "22px",  // tablet
      md: "26px",  // laptop
      lg: "28px",  // desktop
    }
  }}>
          Bake<span>2</span>Decor
        </Typography>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive ? styles.activeNav : styles.navItem
              }
            >
              {item.label}
            </NavLink>
          ))}
        </Box>

        {/* Icons */}
        <Box className={styles.icons}>
          <IconButton onClick={() => navigate("/shop")}  ><SearchIcon  /></IconButton>
          <IconButton><FavoriteBorderIcon /></IconButton>
          <IconButton><ShoppingBagOutlinedIcon /></IconButton>
          <IconButton><AccountCircleIcon/></IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
