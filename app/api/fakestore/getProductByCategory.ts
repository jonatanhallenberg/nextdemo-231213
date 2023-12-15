export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export type CategoryValues = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export const getProductsByCategory = async (category: CategoryValues): Promise<Product[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_BASE_URL}/products/category/${category}`);
    const data = await response.json()
    return data as Product[];
}