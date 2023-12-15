import { useEffect, useState } from "react";
import { Product, getProducts } from "../api/fakestore/getProducts";
import { CategoryValues, getProductsByCategory } from "../api/fakestore/getProductByCategory";
import { useFetch } from "../hooks/useFetch";

export const Fakestore = () => {

    const [selectedCategory, setSelectedCategory] = useState<CategoryValues>("electronics");

    const { data, loading, error } = useFetch<Product[]>(() => getProductsByCategory(selectedCategory), [selectedCategory]);

    return <div>
        <div>
            <button onClick={() => setSelectedCategory("electronics")}>Electronics</button>
            <button onClick={() => setSelectedCategory("jewelery")}>Jewelery</button>
            <button onClick={() => setSelectedCategory("men's clothing")}>Men´s clothing</button>
        </div>

        {error && <span className="text-red-600">Något gick fel</span>}
        {!error && (loading ? <span>Loading...</span> : <>Produkter i kategorin: <ul>{data && data.map(product => <li key={product.id}>{product.title}</li>)}</ul></>)}
    </div >
}