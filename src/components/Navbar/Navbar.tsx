import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './style.scss'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Estudo CSS Grid</Link>
            <ul>
                <CustomLink to="/example1">Example 1</CustomLink>
                <CustomLink to="/example2">Example 2</CustomLink>
            </ul>
        </nav>
    );
}

interface CustumLinkProps {
    to: string,
    children: ReactNode
}

function CustomLink({ to, children, ...props }:CustumLinkProps) {
    // The CustomLink do the same thing of Link (react-router-dom) component, but also add the style classe "active", if the URL match the router link.   
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return(
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>

    );
}