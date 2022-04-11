import React, { Component } from "react";
import aboutImage from '../Images/photo-1501504905252-473c47e087f8.jpg'

export class AboutPage extends Component {

    render() {
        return (


            <div>
                <nav aria-label="breadcrumb" class="breadcrumb_nav">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About us</li>
                    </ol>
                </nav>


                <div class="content about">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-5">
                                <img src={aboutImage} />
                            </div>
                            <div class="col-md-7">
                                <div class="about_content">
                                    <h3>About us</h3>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}