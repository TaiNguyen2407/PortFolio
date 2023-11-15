import { IconType } from "react-icons";
import "./LogoLink.css"

interface LogoLinkProps {
    href: string;
    className?: string
    Icon: IconType
    iconSize?: number
}

const LogoLink = ({href, className, Icon, iconSize} : LogoLinkProps) => {
    return (
        <a
            href={href}
            rel="noreferrer"
            className={className || "logo-link-container"}
        >
            <div className="logo">
                <Icon size={iconSize} />
            </div>
        </a>
    )
}

export default LogoLink;