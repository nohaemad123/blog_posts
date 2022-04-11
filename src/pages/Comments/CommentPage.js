import React, { Component } from "react";
import { getAllComments } from "../../api/Comments";
import CommentsComponent from "../../components/Comments/CommentsComponent";
// import PostsComponent from "../../components/Posts/PostsComponent";

export class CommentsPage extends Component {

    // constructor(props) {
    //     super(props)
    // }
    state = {
        comments: []
    }



    componentDidMount = () => {

        // console.log(this.props.post)
        const postID = JSON.parse(localStorage.getItem('post id'));

        console.log('post id :' + postID)

        getAllComments(postID)
            .then(res => {
                console.log(res)
                const comments = res.data;
                this.setState({ comments });
            })

    }
    render() {
        return (
            <div>
                <div className="comments">
                    <div className="container">
                        <div className="comment_header">
                            <h4 className="title" style={{ display: 'inline-block' }}>Comments</h4>
                            <div className="button" style={{ float: 'right' }}>
                                <a href={'/add-comment'}><button type="button" className="btn btn-success" style={{ float: 'right' }}><i
                                    className="fas fa-plus"></i> Add Comment</button></a>
                            </div>
                        </div>

                        <div className="comment">
                            {this.state.comments.map(comment =>
                                <div key={comment.id}>
                                    <CommentsComponent comment={comment} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}