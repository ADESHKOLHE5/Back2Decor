import { Box, Typography } from "@mui/material";
import type{ ReactNode } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import styles from "./Features.module.css";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Box className={styles.card}>
      <Box className={styles.icon}>
        {icon}
      </Box>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Typography className={styles.text}>
        {description}
      </Typography>
    </Box>
  );
}

const featuresData: FeatureCardProps[] = [
  {
    icon: <LocalShippingIcon />,
    title: "Fast Delivery",
    description: "Free shipping on all orders over $50 within the continental US.",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Quality Guarantee",
    description: "We source only the finest professional-grade supplies.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "24/7 Support",
    description: "Expert bakers available to help you anytime.",
  },
];

export default function Features() {
  return (
    <Box className={styles.features}>
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </Box>
  );
}
