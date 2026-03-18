
import FooterFeatures from "./FooterFeatures";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
    return (
        <footer className="w-full">
            <FooterFeatures />
            <FooterLinks />
            <FooterBottom />
        </footer>
    );
}