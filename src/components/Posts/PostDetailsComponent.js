import React, { Component } from "react";

export default function PostDetailsComponent(props) {
return(
<div>
<div className="post-content" id="post_details">
                    <h4>{props.post.post_name}</h4>
                    {/* <h5 class="date"><i class="far fa-calendar-alt"></i> {{postDetails.post_date | date}}</h5> */}
                    <h5><i className="fas fa-user"></i> {props.post.post_author}</h5>
                    <p>{props.post.post_description}</p>

                </div>
                </div>
)
}