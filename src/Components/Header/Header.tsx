import { AppBar, Toolbar, Box, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../Contexts/AuthContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop All", path: "/shop" },
  { label: "Tools", path: "/tools" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "About", path: "/about" },
];

const Header = () => {
   const navigate = useNavigate();
   const { isAuthenticated, role, logout } = useAuth();
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
     setAnchorEl(null);
   };

   const handleLogout = () => {
     logout();
     handleMenuClose();
     navigate('/login');
   };

   const handleAdminDashboard = () => {
     navigate('/admin');
     handleMenuClose();
   };
  
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
          Back<span>2</span>Decor
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
          {isAuthenticated && role === 'admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? styles.activeNav : styles.navItem
              }
            >
              Admin
            </NavLink>
          )}
        </Box>

        {/* Icons */}
        <Box className={styles.icons}>
          <IconButton onClick={() => navigate("/shop")}  ><SearchIcon  /></IconButton>
          <IconButton><FavoriteBorderIcon /></IconButton>
          <IconButton><ShoppingBagOutlinedIcon /></IconButton>
          
          {isAuthenticated ? (
            <>
              <IconButton onClick={handleMenuOpen}>
                <AccountCircleIcon/>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem disabled>{role?.toUpperCase()}</MenuItem>
                {role === 'admin' && (
                  <MenuItem onClick={handleAdminDashboard}>Admin Dashboard</MenuItem>
                )}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button 
              color="inherit" 
              onClick={() => navigate('/login')}
              sx={{ ml: 1 }}
            >
              Login
            </Button>
          )}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
