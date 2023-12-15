import { DependencyList, useEffect, useState } from "react";

export const useFetch = <T>(dataLoadingFn: () => Promise<T>, dependencyArray: DependencyList) => {

    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [ error, setError ] = useState();

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await dataLoadingFn();
                setData(data);
            } catch (e) {
                console.log('catch', e.toString());
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        loadData();

    }, dependencyArray)

    return {
        data,
        loading,
        error
    }
}