import { Link } from "react-router-dom";
import "./NavLink.css"

interface NavLinkProps {
    className?: string;
    urlEndPoint: string;
    children: string;
} 

const NavLink = ({className, urlEndPoint, children} : NavLinkProps) => {
    return (
        <li className={className || "nav-link-container"}>
            <Link to={urlEndPoint} className="nav-link">{children}</Link> 
        </li>
    )
}

export default NavLink;