'use client';

import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={5}>
                    {products.map((product: any) => {
                        return (
                            <Grid item xs={3} key={product.id}>
                                <Card sx={{ maxWidth: 345, maxHeight: 300, overflow: 'scroll' }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={product.images[0]}
                                        title="green iguana"
                                    />
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}