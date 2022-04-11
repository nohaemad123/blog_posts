import React, { Component } from "react";
import { getAllPosts } from "../../api/Products";
import PostsComponent from "../../components/Posts/PostsComponent";

export class PostsPage extends Component {

    state = {
        posts: []
    }

    componentDidMount = () => {

        getAllPosts()
            .then(res => {
                console.log(res)
                const posts = res.data;
                this.setState({ posts });
            })
    }



    render() {
        return (
            <div className="content">
                <div className="container">

                    <div className="content_header">
                        <h4 style={{ display: 'inline-block' }}>Posts</h4>

                        <div className="button" style={{ float: "right" }}>
                            <a href={'/add-post'}><button type="button" className="btn btn-success" 
                            style={{ float: 'right' }}>
                                <i className="fas fa-plus"></i> Add post</button></a>
                        </div>
                    </div>

                    <div className="row">

                        {this.state.posts.map(post =>
                            <div className="col-md-4" key={post.id}>
                                <PostsComponent post={post} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}