
import Link from "next/link";

interface FooterLinkColumnProps {
    title: string;
    links: ReadonlyArray<{ label: string; href: string }>;
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
    return (
        <div>
            <h4 className="text-lg font-semibold mb-6">{title}</h4>
            <ul className="flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-[#99a1af] text-sm hover:text-green-500 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}