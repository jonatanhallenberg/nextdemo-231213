type DelayedData = {
    responseTime: number;
    data: string
}

export const getDelay = () => new Promise<number>((resolve, reject) => {
    const milliseconds = Math.floor(Math.random() * 10001);
    setTimeout(() => {
        resolve(milliseconds)
    }, milliseconds)
})

export const getCatFact = async () => {
    console.log('loading catfact');
    const response = await fetch("https://catfact.ninja/fact?i=" + (new Date()).getMilliseconds());
    return (await response.json()).fact as string;
}

export const getDelayedData = async (): Promise<DelayedData> => {
    const [ responseTime, catFact ] = await Promise.all([getDelay(), getCatFact()]);
    return {
        responseTime,
        data: catFact
    }
}