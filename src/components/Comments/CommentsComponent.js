import { Component } from 'react';
import authorImage from '../../Images/1.jpeg';


export default class CommentsComponent extends Component {

    constructor(props) {
        super(props);
    }

    deleteComment(id) {

        const postID = JSON.parse(localStorage.getItem('post id'));


        console.log("post id " + id)
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        // console.log('update post: ' + requestOptions.body)
        fetch('https://61958b8274c1bd00176c6da8.mockapi.io/posts/' + postID + '/comments/' + this.props.comment.id, requestOptions)
            .then(response => {
                alert('success');
                console.log("update comment request:" + JSON.stringify(response))
                // this.props.history.push('/')
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="image text-center">
                        <img src={authorImage} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                    </div>
                </div>
                <div className="col-md-7">
                    <h4>{this.props.comment.body}</h4>
                    <h5><i className="fas fa-user"></i> {this.props.comment.author}</h5>
                </div>

                <div className="col-md-3">
                    <a
                        style={{ marginRight: '10px' }} href={'../../edit-comment/' + this.props.comment.id}><button type="button" className="btn btn-primary"><i
                            className="fas fa-pencil-alt"></i> Edit</button></a>
                    <a onClick={() => this.deleteComment(this.props.comment.id)}><button type="button" className="btn btn-danger"
                        style={{ marginRight: '10px' }}><i className="fas fa-times"></i> Delete</button></a>
                </div>

            </div>
        )
    }
}