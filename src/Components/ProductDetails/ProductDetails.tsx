
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import { ErrorApiFetch } from '../ErrorMessage/ErrorApiFetch';
import useFetch from '../../Hooks/useFetch';
import type { Product } from '../../Type/Product';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  
  const {
    BakeProductData: product,
    loading,
    error,
  } = useFetch<Product>(id ? `http://localhost:3000/BakePackProducts/${id}` : "");

  if (loading) return <LoadingMessage />;
  if (error) return <ErrorApiFetch msg={error} />;
  if (!product) return <div>Product not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Button variant="outlined" onClick={() => navigate('/shop')} style={{ marginBottom: '20px' }}>
        Back to Shop
      </Button>
      <Card>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="h1">
            {product.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails