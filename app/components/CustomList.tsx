type CustomListType = {
    children: React.ReactNode
}

export const CustomList = ({children}: CustomListType) => {

    return <ul>
        {children}
    </ul>

}