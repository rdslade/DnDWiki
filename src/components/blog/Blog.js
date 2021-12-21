import React from "react";
import { Outlet, Route, Link } from "react-router-dom";
import { Navigation } from "..";
  

class Blog extends React.Component {
    render() {
        let links = this.props.links;
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Navigation links={links} />
                {/* <nav>
                    {(links == undefined || links.length == 0) ? <h1>No links</h1> : links.map(link => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/${this.props.base}/${link.to}`}
                        key={link.to}
                    >
                        {link.title}
                    </Link>
                    ))}
                </nav> */}
                <Outlet />
            </div>
        );
    }
}

export default Blog;
