import { IconLocationCheck } from "@tabler/icons-react";
import { ElementType } from "react";

export interface MenuItemProps {
    icon: ElementType;
    text: string;
    url: string;
}

export default function MenuItem(props: MenuItemProps) {
    const { icon: Icon, text, url } = props;

    return (
        <a href={url} className="flex gap-2 px-4 py-2 hover:bg-black">
            <Icon className="text-zinc-200" size={24} stroke={1} />
            <span className="text-zinc-200">{text}</span>
        </a>
    );
}
