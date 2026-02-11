import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
} from "@mui/material";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type RegistrationInputs = {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  state: string;
  dob: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "user";
};

export default function Registration(): JSX.Element {
  const {
    control,
    watch,
    trigger,
    getValues,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      state: "",
      dob: "",
      role: "user" as "admin" | "user",
    },
    mode: "onBlur", // validate as user types
  });

  const [step, setStep] = useState(1);
  const values = getValues();

  const handleBack = () => setStep((prev) => prev - 1);
  const handleNext = () => setStep((prev) => prev + 1);

  // Check if Step 1 is valid
  const isStep1Valid =   watch("username") &&
  watch("password") &&
  watch("confirmPassword") &&
  !errors.username &&
  !errors.password &&
  !errors.confirmPassword;

  // Check if Step 2 is valid
  const isStep2Valid =   watch("fullName") &&
  watch("email") &&
  watch("phone") &&
  watch("gender") &&
  watch("address") &&
  watch("state") &&
  watch("dob") &&
  !errors.fullName &&
  !errors.email &&
  !errors.phone &&
  !errors.gender &&
  !errors.address &&
  !errors.state &&
  !errors.dob;

  // Snackbar state
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({
    open: false,
    type: "success",
    message: "",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data: RegistrationInputs) => {
    console.log("handleSubmit called");
    const submissionData = { ...data, role: "user" };
    try {
      await axios.post("http://localhost:3000/Users", submissionData);
      setSnackbar({
        open: true,
        type: "success",
        message: "Registration successful!",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        type: "error",
        message: "Failed to register. Please try again.",
      });
    }
  };
   const onErrors = () => {
    console.log("handleSubmit called. Validation errors detected by RHF.");
    
    // 1. Show the simple error message in the Snackbar, prompting user to go back.
    setSnackbar({
        open: true,
        type: "error",
        message: "Validation failed! Please go back to previous steps and correct the errors.",
    });
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f0e9d6" }}
    >
      <Paper elevation={4} sx={{ p: 4, maxWidth: 600, width: "100%", borderRadius: 4, border: "2px solid #ff69b4", background: "linear-gradient(135deg, #ffe4e1 0%, #ffb6c1 100%)", boxShadow: "0 8px 32px rgba(255, 105, 180, 0.3)" }}>
         <form onSubmit={handleSubmit(onSubmit,onErrors)}>
          {/* Step 1: Account Details */}
          <Box sx={{ display: step === 1 ? 'block' : 'none' }}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              fontWeight="bold"
              sx={{ color: "#ff69b4", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
            >
              New Registration: Account Details
            </Typography>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
                minLength: { value: 3, message: "At least 3 characters" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  fullWidth
                  margin="normal"
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  onChange={(e) => {
                    field.onChange(e);
                    trigger("confirmPassword"); // instant validation
                  }}
                />
              )}
            />

            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                disabled={!isStep1Valid}
                onClick={handleNext}
              >
                Next →
              </Button>
            </Box>
          </Box> 

          {/* Step 2: Personal Details */}
          <Box sx={{ display: step === 2 ? 'block' : 'none' }}>

            <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
              New Registration: Perso Details
            </Typography>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Full Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone must be 10 digits",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  type="tel"
                  fullWidth
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <FormControl margin="normal">
              <FormLabel>Gender</FormLabel>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                )}
              />
              {errors.gender && (
                <Typography variant="body2" color="error">
                  {errors.gender.message}
                </Typography>
              )}
            </FormControl>

            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Address"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              )}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="state-label">State</InputLabel>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <Select {...field} labelId="state-label">
                    <MenuItem value="">--Select State--</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                  </Select>
                )}
              />
              {errors.state && (
                <Typography variant="body2" color="error">
                  {errors.state.message}
                </Typography>
              )}
            </FormControl>

            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  margin="normal"
                  slotProps={{
                    inputLabel: { shrink: true }, // ✅ correct replacement
                    input: {
                      inputProps: {
                        max: new Date().toISOString().split("T")[0], // ✅ works with TS
                      },
                    },
                  }}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}

                />
              )}
            />

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={handleBack}>
                ← Back
              </Button>
              <Button
                variant="contained"
                disabled={!isStep2Valid}
                onClick={handleNext}
              >
                Next →
              </Button>
            </Box>

          </Box>
          {/* Step 3: Review */}
          <Box sx={{ display: step === 3 ? 'block' : 'none' }}>

            <Typography variant="h6" gutterBottom>
              Review Your Details
            </Typography>
            <ul>
              <li><strong>Username:</strong> {values.username}</li>
              <li><strong>Full Name:</strong> {values.fullName}</li>
              <li><strong>Email:</strong> {values.email}</li>
              <li><strong>Phone:</strong> {values.phone}</li>
              <li><strong>Gender:</strong> {values.gender}</li>
              <li><strong>Address:</strong> {values.address}</li>
              <li><strong>State:</strong> {values.state}</li>
              <li><strong>Date of Birth:</strong> {values.dob}</li>
              <li><strong>Role:</strong> {values.role}</li>
            </ul>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              If you want to make changes, go back and edit.
            </Typography>

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={handleBack}>
                ← Back
              </Button>
              <Button variant="contained" color="success" type="submit" >
                Submit
              </Button>
              <Button variant="contained" color="success" onClick={()=>navigate("/profile")} >
                Back to Login 
              </Button>
            </Box>

          </Box>
        </form>
      </Paper>
      {/* Snackbar for success/error */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.type}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

    </Box>
  );
}
