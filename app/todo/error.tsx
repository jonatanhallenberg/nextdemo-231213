"use client"

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {

    return <><h1>{error.message.toString()}</h1>
        <button onClick={() => reset()}>Reload page</button>
    </>
}

export default ErrorPage;