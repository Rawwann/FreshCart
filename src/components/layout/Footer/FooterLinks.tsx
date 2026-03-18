
import Link from "next/link";
import { footerLinks, SOCIAL_ICONS, CONTACT_INFO } from "@/constants/layout/footer.constants";
import FooterLinkColumn from "./FooterLinkColumn";

const LINK_COLUMNS = [
    { title: "Shop", links: footerLinks.shop },
    { title: "Account", links: footerLinks.account },
    { title: "Support", links: footerLinks.support },
    { title: "Legal", links: footerLinks.legal },
] as const;

export default function FooterLinks() {
    return (
        <div className="bg-[#101828] text-white py-12 px-4 md:px-10 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                {/* Brand & Contact */}
                <div className="lg:col-span-2">
                    <Link href="/" className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-lg mb-6 shrink-0">
                        <img src="/FreshCart.svg" alt="FreshCart Logo" className="h-6 lg:h-8 w-auto" />
                    </Link>

                    <p className="text-[#99a1af] text-sm leading-relaxed mb-6 pe-4">
                        FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
                    </p>

                    <div className="flex flex-col gap-3 text-[#99a1af] text-sm">
                        {CONTACT_INFO.map(({ icon: Icon, text, href, iconClass, hoverClass }) => {
                            const content = (
                                <>
                                    <Icon className={`w-4 h-4 ${iconClass} shrink-0 mt-0.5`} />
                                    <span>{text}</span>
                                </>
                            );
                            return href ? (
                                <a key={text} href={href} className={`flex items-center gap-3 ${hoverClass} transition cursor-pointer`}>
                                    {content}
                                </a>
                            ) : (
                                <div key={text} className={`flex items-start gap-3 ${hoverClass} transition cursor-pointer`}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-6">
                        {SOCIAL_ICONS.map((Icon, idx) => (
                            <button
                                key={idx}
                                className="w-10 h-10 rounded-full bg-[#1e2939] flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                {LINK_COLUMNS.map(({ title, links }) => (
                    <FooterLinkColumn key={title} title={title} links={links} />
                ))}

            </div>
        </div>
    );
}