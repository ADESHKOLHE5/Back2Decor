// UserProfileForm.tsx
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

export default function UserProfileForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [validation, setValidation] = useState({
    username: true,
    email: true,
    phone: true,
  });

  const isFormValid =
    validation.username && validation.email && validation.phone;

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  // Validation logic
  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "username":
        setValidation({
          ...validation,
          username: value.trim() !== "" && value.length > 2,
        });
        break;
      case "email":
        setValidation({
          ...validation,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        });
        break;
      case "phone":
        setValidation({
          ...validation,
          phone: /^[0-9]{10}$/.test(value),
        });
        break;
      default:
        break;
    }
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert(`${formData.username}'s profile updated successfully!`);
      console.log(formData);
      clearFormData();
    }
  };

  // Reset form
  const clearFormData = () => {
    setFormData({ username: "", email: "", phone: "" });
    setValidation({ username: true, email: true, phone: true });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "linear-gradient(135deg, #f0f4ff 0%, #e6f7f1 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 3, fontWeight: "bold" }}
          >
            Fill in the details
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={!validation.username}
              helperText={
                !validation.username &&
                "Username is required and should be at least 3 characters"
              }
            />

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!validation.email}
              helperText={
                !validation.email && "Please enter a valid email address"
              }
            />

            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={!validation.phone}
              helperText={
                !validation.phone && "Phone number must be 10 digits"
              }
            />

            {/* Submit + Reset buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Button
                type="button"
                variant="outlined"
                onClick={clearFormData}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  color: "#2F4F4F",
                  borderColor: "#2F4F4F",
                  "&:hover": { borderColor: "#1e3535", color: "#1e3535" },
                }}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={!isFormValid}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  bgcolor: "#2E7D32",
                  "&:hover": { bgcolor: "#256628" },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
