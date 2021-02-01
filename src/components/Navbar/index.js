import { Component } from "react";
import M from "materialize-css";
import logo from "../../assets/favicon.ico";

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <header>
                <nav className="transparent">
                    <div className="nav-wrapper">
                        <a href="/" class="brand-logo">
                            <img src={logo} alt="C. Garcia's Logo"/>
                        </a>
                        <ul className="right hide-on-small-only">
                            <li><a 
                                href="#contact" 
                                className="btn waves-effect waves-light deep-orange lighten-2" 
                                style={{ borderRadius: `20px`, textTransform: `none` }}>
                                    Let's Talk
                            </a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;