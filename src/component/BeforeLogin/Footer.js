import React, { useState,useEffect } from 'react';
import logo from "../../BeforeLogInImages/logo.png";
import "../../App.css";
import {NavLink} from "react-router-dom";

const Footer = () => {

{/*get copyright year using year variable */}
let year = new Date().getFullYear();

{/*email placeholder hide/display when focus and blur happens */}

const [placeholder,setplaceholder] = useState("Your Email Address");
    
const emailHandler = () => {
    setplaceholder("")
}

const onbluremailHandler = () => {
    setplaceholder("Your Email Address")
}

{/********************************************** verification email ****************************************/}     

        return (
            <React.Fragment>
{/********************************************* footer part start ********************************************/}
    <footer className="footer-area">
        <div className="footer section_padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-2 col-md-4 col-sm-6 single-footer-widget">
                        <NavLink to="/" className="footer_logo"> <img src={logo} alt="..."/> </NavLink>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        <div className="social_logo">
                            <NavLink to="#"><i className="ti-facebook"></i></NavLink>
                            <NavLink to="#"> <i className="ti-twitter"></i> </NavLink>
                            <NavLink to="#"><i className="ti-instagram"></i></NavLink>
                            <NavLink to="#"><i className="ti-skype"></i></NavLink>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><NavLink to="#" className="a">Department</NavLink></li>
                            <li><NavLink to="#" className="a"> Online payment</NavLink></li>
                            <li><NavLink to="#" className="a">About us</NavLink></li>
                            <li><NavLink to="#" className="a">Careers</NavLink></li>
                            <li><NavLink to="#" className="a">Department</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-4 single-footer-widget">
                        <h4>Explore</h4>
                        <ul>
                            <li><NavLink to="#" className="a">In the community</NavLink></li>
                            <li><NavLink to="#" className="a">IU health foundation</NavLink></li>
                            <li><NavLink to="#" className="a">Family support </NavLink></li>
                            <li><NavLink to="#" className="a">Business solution</NavLink></li>
                            <li><NavLink to="#" className="a">Community clinic</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li><NavLink to="#" className="a">Lights were season</NavLink></li>
                            <li><NavLink to="#" className="a"> Their is let wherein</NavLink></li>
                            <li><NavLink to="#" className="a">which given over</NavLink></li>
                            <li><NavLink to="#" className="a">Without given She</NavLink></li>
                            <li><NavLink to="#" className="a">Isn two signs think</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-6 single-footer-widget">
                        <h4>Newsletter</h4>
                        <p>Seed good winged wherein which night multiply
                            midst does not fruitful</p>
                        <div className="form-wrap" id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="form-inline">
                                <input className="form-control" name="EMAIL" placeholder={placeholder}
                                   onFocus={emailHandler} onBlur={onbluremailHandler}
                                    required="" type="email"/>
                                <button className="click-btn btn btn-default text-uppercase" style={{position:"absolute",top:'4px'}}> <i className="ti-angle-right"></i>
                                </button>
                                <div style={{ position: "absolute",left:"-5000px"}}>
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""
                                        type="text"/>
                                </div>

                                <div className="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright_part">
            <div className="container">
                <div className="row align-items-center">
                    <p className="footer-text m-0 col-lg-8 col-md-12">
{/**********<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->************/}
Copyright &copy;{year} All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <NavLink to="https://colorlib.com" target="_blank" style={{textDecoration:'none'}}>Colorlib</NavLink>
{/**********<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->************/}
</p>
                    <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                        <NavLink to="#"><i className="ti-facebook"></i></NavLink>
                        <NavLink to="#"> <i className="ti-twitter"></i> </NavLink>
                        <NavLink to="#"><i className="ti-instagram"></i></NavLink>
                        <NavLink to="#"><i className="ti-skype"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>

{/************************************** footer part end *****************************************************/}
            </React.Fragment>
        )
}
export default Footer;