'use client';

import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

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
        <h1>Hello, Product list Next.js!</h1>
        <div>
            {products.map((product: any) => {
                return <li>{product.id}</li>
            })}
        </div>
        </>
    )
}