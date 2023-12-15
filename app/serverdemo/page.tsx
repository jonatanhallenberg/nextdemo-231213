import { getProducts } from "../api/fakestore/getProducts";

const ServerDemoPage = async () => {

    const response = await fetch('https://catfact.ninja/fact', { next: { revalidate: 3 } });
    const catFact = await response.json();

    return <div>{catFact.fact}</div>

}

export default ServerDemoPage;