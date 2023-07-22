import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className="nav-con1">
            <div className="nav-name">
                <h1>Dinesh</h1>
            </div>
            <div className="nav-links">
                <div className="list-right list-contact">
                    <a href="https://drive.google.com/file/d/1Q1ThHnN6T3weS-MZyxIG0BDgjLAfYW1o/view?usp=sharing" target="_blank">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;