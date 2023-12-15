import { getDelayedData } from "../api/catfact/getDelayedCatFact"
import { Card } from "./Card";

export const DataCard = async () => {
    const response = await getDelayedData();
    return <Card title={`Response time: ${response.responseTime / 1000}`}>{response.data}</Card>
}