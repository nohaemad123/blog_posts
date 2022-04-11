import React, { Component } from "react";
import AddPostComponent from "../../components/Posts/AddPostComponent";
import addPostImage from '../../Images/photo-1519337265831-281ec6cc8514.jpg'
import { addPost } from "../../api/Products";
import { date } from "yup/lib/locale";

export class AddPostPage extends Component {


   
    addPost = (values) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts', requestOptions)
            .then(() => {
                alert('success');
                console.log("add post request:" + JSON.stringify(values))
                this.props.history.push('/')
            })
    }


    render() {
        return (
            <div>
                <nav aria-label="breadcrumb" class="breadcrumb_nav">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Add post</li>
                    </ol>
                </nav>

                <div class="content">
                    <div class="container">

                        <h4 class="add_post_title">Add post:</h4>
                        <div class="row">
                            <div class="col-md-5">
                                <div class="add_post_image">
                                    <img src={addPostImage} />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <AddPostComponent values={{
                                    post_name: '',
                                    post_author: '',
                                    post_breif_description: '',
                                    post_description: ''
                                }} onSubmit={this.addPost} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}