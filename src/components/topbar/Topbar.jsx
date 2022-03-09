import "./topbar.scss"
import { Person, Mail } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";


export default function Topbar({menuOpen, setMenuOpen}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo" onClick={handleClick} href="#intro">morpheus.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+32 470 01 09 71</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>henrybuisseret@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
