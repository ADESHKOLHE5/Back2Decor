import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Alert,
 
} from "@mui/material";
import type { JSX } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import type { User } from "../Type/User";

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (role: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [url, setUrl] = useState<string>(""); // start with empty, only set on submit
  const { BakeProductData: users } = useFetch<User[]>(url);

  useEffect(() => {
    if (users && users.length > 0) {
      const user = users[0];
      sessionStorage.setItem("userRole", user.role);
      console.log("Login success:", user);
      navigate("/home");
    } else if (users && users.length === 0) {
      setErrorMsg("Invalid email or password.");
    }
  }, [users, navigate]);

  const onSubmit = async (data: LoginFormInputs) => {
    setErrorMsg(""); // reset old error
    setUrl(
      `http://localhost:3000/Users?email=${data.email}&password=${data.password}`
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        border: "2px solid #ff69b4",
        borderRadius: 4,
        boxShadow: "0 8px 32px rgba(255, 105, 180, 0.3)",
        background: "linear-gradient(135deg, #ffe4e1 0%, #ffb6c1 100%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography variant="h6" gutterBottom align="center">
        Login to Fruit Fantasy
      </Typography>

      {errorMsg && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMsg}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Login
        </Button>
      </form>

      <Typography variant="body2" align="center">
        New user?{" "}
        <Link component={RouterLink} to="/register" underline="hover">
          Sign up here
        </Link>
      </Typography>
        </Box>
  );
}
