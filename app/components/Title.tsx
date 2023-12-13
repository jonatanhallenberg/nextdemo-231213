"use client"

type TitleType = {
    text?: string,
    children: string
}

export const Title = ({children, text}: TitleType) => {

    return (
        <h1>{children}</h1>
    )
}