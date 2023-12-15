import { useEffect, useState } from "react";
import { Product, getProducts } from "../api/fakestore/getProducts";

export const Fakestore = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const loadProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        }

        loadProducts();

    }, [])

    return <>Alla produkter: <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul></>
}