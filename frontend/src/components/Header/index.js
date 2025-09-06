import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component } from "react";

import "./index.css";

class Header extends Component {
    state = {
        activeItem: null,
    };

    handleNavClick = (path, label) => {
        const { history } = this.props;
        this.setState({ activeItem: label });
        history.push(path);
        setTimeout(() => {
            const section = document.getElementById(label.toLowerCase().replace(" ", "-"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    render() {
        const { activeItem } = this.state;
        const { headerItems } = this.props;

        return (
            <nav className="navbar-bg">
                <div>
                    <img
                        src="https://res.cloudinary.com/dmxvdaino/image/upload/v1756723414/Screenshot_2025-09-01_161317_ahqivp.png"
                        alt="KAVYA MUMMADI"
                        className="portfolio-logo"
                    />
                </div>
                <ul className="nav-menu-items-container">
                    {headerItems.map((each) => (
                        <li key={each.id} className="nav-menu-item">
                            <Link
                                to={each.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.handleNavClick(each.path, each.label); // pass label here
                                }}
                                className={`link-styles ${activeItem === each.label ? "cursor-label" : ""}`}
                            >
                                {each.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default withRouter(Header);
