
import Link from "next/link";

interface DropdownItemProps {
    href: string;
    icon: any;
    label: string;
}

export default function DropdownItem({ href, icon, label }: DropdownItemProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all group/item"
        >
            <span className="text-gray-400 group-hover/item:text-green-600 transition-colors">
                {icon}
            </span>
            {label}
        </Link>
    );
}