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

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_BASE_URL}/products`, { cache: 'force-cache' });
    const data = await response.json()
    return data as Product[];
}