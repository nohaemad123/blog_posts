import React, { Component } from "react";
import { getPost } from "../../api/Products";
import postImage from '../../Images/photo-1522199755839-a2bacb67c546.jpg'
export default class PostsComponent extends Component {

    constructor(props) {
        super(props);
    }
    // const { post } = props

    activePost(post) {
       console.log('post details: '+post)
        localStorage.setItem('post details' , JSON.parse(post));
    }

    deletePost(id) {
        console.log("post id " + id)
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        // console.log('update post: ' + requestOptions.body)
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + id, requestOptions)
            .then(response => {
                alert('success');
                console.log("update post request:" + JSON.stringify(response))
                // this.props.history.push('/')
            })
            .catch(error => {
                alert(error)
            })
    }


    render() {
        return (
            <div>
                <div className="blog-image">
                    <div className="content-overlay"></div>

                    <img src={postImage} style={{ width: "100%" }} />
                    <div className="content-details fadeIn-top fadeIn-left">
                        <a href={'./edit-post/' + this.props.post.id}
                            onClick={() => this.activePost(this.props.post)}>
                            <button type="button"
                                className="btn btn-primary edit_button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit post">
                                <i className="fas fa-pencil-alt"></i></button></a>
                        <a onClick={() => this.deletePost(this.props.post.id)}> <button type="button" className="btn btn-danger delete_button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Delete post"> <i
                                className="fas fa-times"></i></button></a>


                    </div>
                </div>

                <div className="post-content">
                    <a href="">

                        <h4>{this.props.post.post_name}</h4>
                    </a>
                    <h5><i className="fas fa-user"></i> {this.props.post.post_author}</h5>
                    <p>{this.props.post.post_breif_description}</p>
                    <a href={'./post/' + this.props.post.id} 
                    onClick={() => this.activePost(this.props.post)}>
                        <button type="button" className=" view_button"> Read more</button></a>
                </div>
            </div>
        )
    }
}