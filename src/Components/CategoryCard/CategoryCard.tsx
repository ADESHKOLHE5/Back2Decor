import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  image: string;
  navigateTo?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  navigateTo = "/categories",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => navigate(navigateTo)}
    >
      <div className={styles.overlay}>
        <h3>{title}</h3>
        <p>
          Shop Collection <span>→</span>
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
