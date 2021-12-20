import React, { useEffect } from "react";
import { useParams } from "react-router";

class Post extends React.Component {
    render() {
        return <h1>{this.props.title} POST</h1>
    }
}

export default Post;
