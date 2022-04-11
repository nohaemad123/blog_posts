import React, { Component } from "react";
import { getPost } from "../../api/Products";
import EditPostComponent from "../../components/Posts/EditPostComponent";
import addPostImage from '../../Images/photo-1519337265831-281ec6cc8514.jpg'

export class EditPostPage extends Component {

    state = {
        post: {}
    }

    componentDidMount = () => {
        const postID = this.props.match.params.id;

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

    updatePost = (values) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        console.log('update post: ' + requestOptions.body)
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + this.props.match.params.id, requestOptions)
            .then(response => {
                alert('success');
                console.log("update post request:" + JSON.stringify(response))
                this.props.history.push('/')
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
                        <li class="breadcrumb-item active" aria-current="page">Edit {this.state.post.post_name}</li>
                    </ol>
                </nav>

                <div class="content">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-5">
                                <div class="add_post_image">
                                    <img src={addPostImage} />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <EditPostComponent values={this.state.post} onSubmit={this.updatePost} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}