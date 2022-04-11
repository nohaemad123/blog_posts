import React, { Component } from "react";
import postImage from '../../Images/photo-1522199755839-a2bacb67c546.jpg'
import { getPost } from "../../api/Products";
import PostDetailsComponent from "../../components/Posts/PostDetailsComponent";
import { CommentsPage } from "../Comments/CommentPage";

export class PostDetailsPage extends Component {

    state = {
        post: {}
    }

    componentDidMount = () => {
        const postID = this.props.match.params.id;

        localStorage.setItem('post id', postID)
        getPost(postID).then(response => {

            this.setState({
                post: response.data
            });

            console.log(response)
        })
            .catch(error => {
                alert(error)
            });
    }


    render() {
        return (
            <div>
                <nav aria-label="breadcrumb" className="breadcrumb_nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.post.post_name}</li>
                    </ol>
                </nav>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={postImage} style={{ width: "100%" }} />
                            </div>
                            <div className="col-md-6">
                                <PostDetailsComponent post={this.state.post} />
                            </div>
                        </div>
                    </div>
                </div>
                <CommentsPage />
            </div>
        )
    }
}