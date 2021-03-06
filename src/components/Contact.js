import React, { Component } from "react";
import contactImage from '../Images/photo-1516387938699-a93567ec168e.jpg'

export class ContactPage extends Component {

    render(){
    return(
      

    <div>
    <nav aria-label="breadcrumb" class="breadcrumb_nav">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contact us</li>
    </ol>
</nav>


<div class="content about">
    <div class="container">

        <div class="row">
            <div class="col-md-5">
                <img src={contactImage}/>
            </div>
            <div class="col-md-7">
                <div class="about_content">
                    <h3>Contact us</h3>
                    <form>
                        <div class="form-group">
                            <label>Your name</label>
                            <input type="text" class="form-control" placeholder="Your name"/>
                        </div>
                        <div class="form-group">
                            <label>Your email</label>
                            <input type="email" class="form-control" placeholder="Your email"/>
                        </div>
                        <div class="form-group">
                            <label>Subject</label>
                            <input type="text" class="form-control" placeholder="subject"/>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea type="text" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" value="Save" class="save btn btn-primary"/>

                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
    </div>
 
    )
    }
}