import { HouseIcon } from "./icons/HouseIcon";

type MenuProps = {
    children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
    return <div className="w-80 p-5 flex flex-col gap-5">
        {children}
    </div>
}

type MenuSectionProps = {
    children: React.ReactNode;
    title: string;
}

const MenuSection = ({ children, title }: MenuSectionProps) => {
    return <div className="flex flex-col gap-3">
        <div>{title}</div>
        <div>{children}</div>
    </div>
}

type MenuItemProps = {
    title: string;
    subTitle?: string;
    icon: string
}

const MenuItem = ({ title, subTitle, icon }: MenuItemProps) => {
    return <div className="bg-teal-300 rounded-full flex flex-row gap-3">
        <div><HouseIcon /></div>
        <div className="flex flex-col">
            <div>{title}</div>
            <div>{subTitle}</div>
        </div>
    </div>
}

Menu.Item = MenuItem;
Menu.Section = MenuSection;
export default Menu;