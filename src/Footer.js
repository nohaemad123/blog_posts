import React from "react";
export default function Footer(){
return(
    <div>
    <footer>

    <div className="container">
        <div className="row">

            <div className="col-md-4">
                <div className="sec">
                    <h3>About us:</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter</p>
                    <div className="social">
                        <ul className="list-unstyled">
                            <a href="">
                                <li><i className="fab fa-facebook-f"></i></li>
                            </a>
                            <a href="">
                                <li><i className="fab fa-twitter"></i></li>
                            </a>
                            <a href="">
                                <li><i className="fab fa-instagram"></i></li>
                            </a>
                            <a href="">
                                <li><i className="fab fa-google-plus-g"></i></li>
                            </a>


                        </ul>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="sec">
                    <h3>Useful links:</h3>
                    <div className="links">
                        <ul className="list-unstyled">
                            <a>
                                <li><i className="fas fa-chevron-right"></i> Home</li>
                            </a>
                            <a>
                                <li><i className="fas fa-chevron-right"></i> About us</li>
                            </a>
                            <a>
                                <li><i className="fas fa-chevron-right"></i> Contact us</li>
                            </a>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="sec">
                    <h3>Contact info:</h3>
                    <div className="contact">
                        <p><i className="fas fa-phone"></i> (404)236.7700</p>
                        <p><i className="fas fa-map-marker-alt"></i> 6445 Powers Ferry Rd, Suite #360, Atlanta, Georgia
                            30339</p>
                        <p><i className="fas fa-envelope"></i> info@360imaging.com</p>

                    </div>
                </div>
            </div>

        </div>

    </div>
</footer>


<div className="copyright">
    <p>all &copy; copyright is reserved</p>
</div>
</div>
)
}