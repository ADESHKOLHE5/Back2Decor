import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';



const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: '40px 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <Typography variant="h3">
            Admin Dashboard
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>

        

        {/* Admin Features Section */}
        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" gutterBottom>
            Admin Features
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <Typography variant="h6">Manage Products</Typography>
              <Typography variant="body2">Add, edit, and delete products</Typography>
            </Box>
            <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <Typography variant="h6">View Orders</Typography>
              <Typography variant="body2">Monitor and manage all customer orders</Typography>
            </Box>
            <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <Typography variant="h6">User Management</Typography>
              <Typography variant="body2">Manage user accounts and roles</Typography>
            </Box>
            <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <Typography variant="h6">Analytics</Typography>
              <Typography variant="body2">View sales and performance reports</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;