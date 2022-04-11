import React, { Component } from "react";
import { getComment } from "../../api/Comments";
import { getPost } from "../../api/Products";
import EditCommentComponent from "../../components/Comments/EditCommentComponent";
import EditPostComponent from "../../components/Posts/EditPostComponent";
import addPostImage from '../../Images/photo-1519337265831-281ec6cc8514.jpg'

export class EditCommentPage extends Component {

    state = {
        comment: {}
    }

    componentDidMount() {

        const postID = JSON.parse(localStorage.getItem('post id'));
        const commentID = this.props.match.params.id;
        getComment(postID, commentID).then(response => {

            this.setState({
                comment: response.data
            });

            console.log(response)
        })
            .catch(error => {
                alert(error)
            });
    }


    updateComment = (values) => {

        const postID = JSON.parse(localStorage.getItem('post id'));


        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        console.log('update post: ' + requestOptions.body)
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + postID + '/comments/' + this.props.match.params.id, requestOptions)
            .then(response => {
                alert('success');
                console.log("update comment request:" + JSON.stringify(response))
                this.props.history.push('/post/' + postID)
            })
            .catch(error => {
                alert(error)
            })
    }


    render() {
        return (
            <div>
                <nav aria-label="breadcrumb" class="breadcrumb_nav">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                        {/* <li class="breadcrumb-item"><a routerLink="/view-post/{{post_id}}">{{post_name}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">Edit {{comment.commentBody}}</li> */}
                    </ol>
                </nav>
                <div class="content">
                    <div class="container">

                        <h4 class="add_post_title">Edit comment:</h4>

                        <div class="row">
                            <div class="col-md-5">
                                <div class="add_post_image">
                                    <img src={addPostImage} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <EditCommentComponent values={this.state.comment} onSubmit={this.updateComment} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}