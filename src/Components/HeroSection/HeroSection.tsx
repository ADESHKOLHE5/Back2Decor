import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* Styled Components */

const HeroWrapper = styled(Box)(() => ({
  minHeight: "77vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1761660306229-8f99a11ef623?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJha2VyeSUyMG1ha2luZyUyMGluc3RydW1lbnQlMjBoZXJvJTIwc2VjdGlvbnxlbnwwfHwyfHx8MA%3D%3D')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "0 20px",
}));

const Content = styled(Box)(() => ({
  maxWidth: 800,
  color: "#ffffff",
}));

const Badge = styled(Box)(() => ({
  display: "inline-block",
  backgroundColor: "#ff8fab",
  color: "#fff",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 600,
  marginBottom: "16px",
}));

const Title = styled(Typography)(() => ({
  fontWeight: 800,
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  marginBottom: "16px",
}));

const Subtitle = styled(Typography)(() => ({
  fontSize: "1.1rem",
  color: "#f1f1f1",
  marginBottom: "32px",
}));

const ButtonGroup = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  flexWrap: "wrap",
}));

const btn1 = {
              backgroundColor: "#ff8fab",
              padding: "12px 28px",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#ff7096",
              },
            }

       const btn2 = {
              borderColor: "#ffffff",
              color: "#ffffff",
              padding: "12px 28px",
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#ff8fab",
                color: "#ff8fab",
              },
            }     

/* Component */

const HeroSection: React.FC = () => {
   const navigate = useNavigate();
  return (
    <HeroWrapper>
      <Content>
        <Badge>PREMIUM BAKING ESSENTIALS</Badge>

        <Title variant="h1">
          Create Your Sweetest <br /> Masterpiece
        </Title>

        <Subtitle>
          Professional-grade tools, ingredients, and decorations for home
          bakers and professionals alike.
        </Subtitle>

        <ButtonGroup>
          <Button
            variant="contained"
            endIcon={<FaArrowRight />}
            sx={btn1}
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </Button>
{/* 
          <Button
            variant="outlined"
            sx={btn2}
          >
            View Sale
          </Button> */}
        </ButtonGroup>
      </Content>
    </HeroWrapper>
  );
};

export default HeroSection;
