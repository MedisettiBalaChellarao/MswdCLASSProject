import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import products from './ProductFile.json';

/*const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
); */

export default function ProductsCard() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {products.map((product, index) => (
        <Card key={product.id} sx={{ maxWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {product.last_name}
            </Typography>
            <Typography variant="h5" component="div">
              {product.product_name}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{product.category}</Typography>
            <Typography variant="body2">
              {product.email}
              <br />
              {`"${product.purchase_date}"`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}