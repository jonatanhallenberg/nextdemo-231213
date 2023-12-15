import { useEffect, useState } from "react";
import { Product, getProducts } from "../api/fakestore/getProducts";
import { CategoryValues, getProductsByCategory } from "../api/fakestore/getProductByCategory";

export const Fakestore = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryValues>("electronics");

    useEffect(() => {

        const loadProducts = async () => {
            const products = await getProductsByCategory(selectedCategory);
            setProducts(products);
        }

        loadProducts();

    }, [selectedCategory])

    return <div>
        <div>
            <button onClick={() => setSelectedCategory("electronics")}>Electronics</button>
            <button onClick={() => setSelectedCategory("jewelery")}>Jewelery</button>
            <button onClick={() => setSelectedCategory("men's clothing")}>Men´s clothing</button>
        </div>

        Produkter i kategorin: <ul>{products.map(product => <li key={product.id}>{product.title}</li>)}</ul>
    </div >
}