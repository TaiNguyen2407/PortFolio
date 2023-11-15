import NavLink from "../../components/NavLink/NavLink"
import "./NavigationBar.css"

const NavigationBar = () => {
    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <NavLink urlEndPoint={"/"} children={"Home"} />
                <NavLink urlEndPoint={"/aboutme"} children={"About Me"} />
                <NavLink urlEndPoint={"/projects"} children={"My Projects"} />
                <NavLink urlEndPoint={"/skills"} children={"My Skills"} />
                <NavLink urlEndPoint={"/contact"} children={"Contact Me"} />
            </ul>
        </nav>  
    )
}

export default NavigationBar