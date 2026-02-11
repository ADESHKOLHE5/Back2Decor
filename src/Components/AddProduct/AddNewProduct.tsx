import React from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Alert,
  Card,
  CardContent,
  Collapse,
  Snackbar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
import type { JSX } from "react";
import type { SelectChangeEvent } from "@mui/material";
import type { Product } from "../../Type/product";

type AddNewProductProps = {
  onAddproduct: (newProduct: Product) => void;
};
 

const categoryOptions = [
  { value: "Toppers", label: "Toppers" },
  { value: "Theme Toppers", label: "Theme Toppers" },
  { value: "Customized Topper", label: "Customized Topper" },
  { value: "Knifes", label: "Knifes" },
  { value: "candles", label: "Candles" },
  { value: "Cake Essentials", label: "Cake Essentials" },
  { value: "Artificial Flower", label: "Artificial Flower" },
  { value: "Baking Tools", label: "Baking Tools" },
  { value: "Colors", label: "Colors" },
];

export default function AddNewProduct({
  onAddproduct,
}: AddNewProductProps): JSX.Element {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    rating: "",
    ratingCount: "",
    image: "",
    discount: "",
  });

  const [expanded, setExpanded] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    type: "success" | "error";
    msg: string;
  }>({
    open: false,
    type: "success",
    msg: "",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const validateInput = (name: string, value: string | number) => {
    const newErrors = { ...errors };
    if (name === "title") {
      if (!value || (typeof value === "string" && value.length < 3)) {
        newErrors.title = "Title must be at least 3 characters.";
      } else delete newErrors.title;
    }
    if (name === "price") {
      if (!value || isNaN(Number(value)) || Number(value) <= 0 || Number(value) > 1000000 )   {
        newErrors.price = "Enter a valid positive price (between 1 and 1,000,000).";
      } else delete newErrors.price;
    }
    if (name === "rating") {
      const num = Number(value);
      if (!value || isNaN(num) || num < 1 || num > 5) {
        newErrors.rating = "Rating must be between 1 and 5.";
      } else delete newErrors.rating;
    }
    if (name === "ratingCount") {
      const num = Number(value);
      if (!value || isNaN(num) || num <= 0) {
        newErrors.ratingCount = "Rating count must be a positive integer.";
      } else delete newErrors.ratingCount;
    }
    if (name === "image") {
      if (!value || (typeof value === "string" && value.trim() === "")) {
        newErrors.image = "Image URL is required.";
      } else delete newErrors.image;
    }
    if (name === "discount") {
      const num = Number(value);
      if (value && (isNaN(num) || num < 5 || num > 95)) {
        newErrors.discount = "Discount must be between 5 and 95.";
      } else delete newErrors.discount;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const clearFormData = () => {
    setFormData({
      title: "",
      price: "",
      category: "",
      rating: "",
      ratingCount: "",
      image: "",
      discount: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // validate before submit
    if (
      !validateInput("title", formData.title) ||
      !validateInput("price", formData.price) ||
      !validateInput("category", formData.category) ||
      !validateInput("rating", formData.rating) ||
      !validateInput("ratingCount", formData.ratingCount) ||
      !validateInput("image", formData.image) ||
      (formData.discount && !validateInput("discount", formData.discount))
    ) {
      return;
    }
    try {
      const newProduct: Product = {
        id: Date.now().toString(),
        title: formData.title,
        price: Number(formData.price),
        category: formData.category,
        rating: Number(formData.rating),
        ratingCount: Number(formData.ratingCount),
        image: formData.image,
        discount: formData.discount ? Number(formData.discount) : undefined,
      };
      onAddproduct(newProduct);
      setSnackbar({
        open: true,
        type: "success",
        msg: "Product added successfully!",
      });
      clearFormData();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        type: "error",
        msg: "Failed to add product. Try again.",
      });
      clearFormData();
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Card sx={{ bgcolor: "whitesmoke", boxShadow: 3 }}>
        <CardContent onClick={handleExpandClick}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Add Product Details
          </Typography>
          <ExpandMoreIcon
            sx={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={() => validateInput("title", formData.title)}
                error={!!errors.title}
                helperText={errors.title}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Price (Rs)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                onBlur={() => validateInput("price", formData.price)}
                error={!!errors.price}
                helperText={errors.price}
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Rating (1-5)"
                name="rating"
                type="number"
                inputProps={{ min: 1, max: 5 }}
                value={formData.rating}
                onChange={handleChange}
                onBlur={() => validateInput("rating", formData.rating)}
                error={!!errors.rating}
                helperText={errors.rating}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Rating Count"
                name="ratingCount"
                type="number"
                inputProps={{ min: 1 }}
                value={formData.ratingCount}
                onChange={handleChange}
                onBlur={() => validateInput("ratingCount", formData.ratingCount)}
                error={!!errors.ratingCount}
                helperText={errors.ratingCount}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                onBlur={() => validateInput("image", formData.image)}
                error={!!errors.image}
                helperText={errors.image}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Discount (%)"
                name="discount"
                type="number"
                inputProps={{ min: 5, max: 95 }}
                value={formData.discount}
                onChange={handleChange}
                onBlur={() => validateInput("discount", formData.discount)}
                error={!!errors.discount}
                helperText={errors.discount}
                fullWidth
                margin="normal"
              />

              {/* Buttons */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
              >
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
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    bgcolor: "#ff8fab",
                    "&:hover": { bgcolor: "#256628" },
                  }}
                >
                  Add Product
                </Button>
              </Box>
            </form>
          </CardContent>
        </Collapse>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.type}
            sx={{ width: "100%"  }}
          >
            {snackbar.msg}
          </Alert>
        </Snackbar>
      </Card>
    </Container>
  );
}
