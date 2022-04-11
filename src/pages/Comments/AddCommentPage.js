import React, { Component } from "react";
import { getAllComments } from "../../api/Comments";
import AddCommentComponent from "../../components/Comments/AddCommentCompnent";
import CommentsComponent from "../../components/Comments/CommentsComponent";
import addPostImage from '../../Images/photo-1519337265831-281ec6cc8514.jpg'

export class AddCommentPage extends Component {

    // state={
    //     postName:''
    // }


    componentDidMount(){

        // console.log(JSON.stringify(localStorage.getItem('post_details')))
        // this.state.postName = JSON.stringify(localStorage.getItem('post details')).post_name
    }

    addComment = (values) => {

        const postID = JSON.parse(localStorage.getItem('post id'));


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + postID + '/comments', requestOptions)
            .then(() => {
                alert('success');
                console.log("add comment request:" + JSON.stringify(values))
                this.props.history.push('/post/' + postID)
            })
    }


    render() {
        return (
            <div>
                <nav aria-label="breadcrumb" className="breadcrumb_nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add comment</li>
                    </ol>
                </nav>

                <div className="content">
                    <div className="container">
                        <h4 className="add_post_title">Add comment:</h4>

                        <div className="row">

                            <div className="col-md-5">
                                <div className="add_post_image">
                                    <img src={addPostImage} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <AddCommentComponent values={{
                                    author: '',
                                    body: ''

                                }} onSubmit={this.addComment} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}