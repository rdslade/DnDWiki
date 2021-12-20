import { render } from "@testing-library/react";
import React from "react";
import { Outlet } from "react-router-dom";

class Blog extends React.Component{
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

export default Blog;
