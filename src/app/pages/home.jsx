import { CONTACT_INFO } from "../../config/constants";
import aboutImg from "/src/assets/images/resources/about-img.jpg";
import aboutThump from "/src/assets/images/resources/abt-thumb.png";
import img1 from "/src/assets/images/resources/img1.jpg";
import img2 from "/src/assets/images/resources/img2.jpg";
import img3 from "/src/assets/images/resources/img3.jpg";
import banner from "../../assets/images/resources/banner.jpg";
import banner2 from "../../assets/images/resources/banner2.jpg";
import banner3 from "/src/assets/images/resources/banner3.jpg";

const Home = () => {
    return (
        <>
            <section className="banner-section white-box">
                <div className="banner-slider style1">
                    <div className="banner-slide slick-slide overlay-dark"
                    style={{ backgroundImage: `url(${banner})` }}>
                        <div className="container">
                            <div className="banner-content">
                                <h1>Empowering You with Clean Energy & Unmatched Security.</h1>
                                <p>2000+ people have put their trust in CCTV, How about You?</p>
                                <a href="/store" title="" className="lnk-default">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="banner-slide slick-slide overlay-dark"
                        style={{ backgroundImage: `url(${banner2})` }}
                    >
                        <div className="container">
                            <div className="banner-content">
                                <h1>Reliable Energy. Advanced Security. Future Ready.</h1>
                                <p>2000+ people have put their trust in CCTV, How about You?</p>
                                <a href="#" title="" className="lnk-default">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="banner-slide slick-slide overlay-dark"
                        style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="container">
                            <div className="banner-content">
                                <h1>We Secure Your Home Excet Your Thought</h1>
                                <p>2000+ people have put their trust in CCTV, How about You?</p>
                                <a href="#" title="" className="lnk-default">Start Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="abt-block">
                <div className="container">
                    <div className="about-section">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={aboutImg} alt="About" />
                                    <a href="https://www.youtube.com/watch?v=Gp-WUXakD_Y" title=""
                                        className="play-btn html5lightbox"><i className="fa fa-play"></i></a>
                                    <div className="abt-thumb">
                                        <img src={aboutThump} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <span>About Us</span>
                                    <h2>We Provide Service <br /> with 5 Years Experience</h2>
                                    <p>Apex Solar & CCTV is committed to providing innovative renewable energy and CCTV solutions that drive sustainability and security. Our mission is to deliver high-quality, cost-effective systems with exceptional customer service, empowering individuals, businesses, and communities to achieve energy independence and enhanced security. With a vision to lead the industry in innovation, we are dedicated to creating a future where reliable energy and safety solutions are accessible to all.</p>
                                    <ul className="abt-list">
                                        <li>
                                            <span><b>01.</b> Schedule Your Tasks</span>
                                        </li>
                                        <li>
                                            <span><b>02.</b> Manage By Control Panel</span>
                                        </li>
                                        <li>
                                            <span><b>03.</b> Smarter Wireless Applications</span>
                                        </li>
                                    </ul>
                                    <div className="sig-text">
                                        <div className="txt">
                                            <span>For Emergency Fixing or Appointment</span>
                                            <h2><a href=""></a>{CONTACT_INFO.phone}</h2>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <a href="#" title="" className="lnk-default">Contact us Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-system">
                <div className="container">
                    <div className="sec-title">
                        <span>What WE Offer</span>
                        <h2>Video Surveillance Systems</h2>
                    </div>
                    <div className="video-posts-sec">
                        <div className="row vid-carousel">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img1} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Fingerprint Door Access</a></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img2} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Home Automation System</a></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img3} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Antenna Tagging System</a></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img1} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Fingerprint Door Access</a></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img2} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Home Automation System</a></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="video-post">
                                    <div className="video-post-thumbnail">
                                        <img src={img3} alt="" />
                                        <div className="vid-post-info">
                                            <h2>Home Automation System</h2>
                                            <p>What if all the devices in your life could connect to the internet. clocks,
                                                speakers, lights, doorbells, cameras, windows, window blinds, hot water
                                                heaters.........</p>
                                        </div>
                                        <a href="services.html" title="" className="ext-link"></a>
                                    </div>
                                    <div className="video-post-info">
                                        <a href="#" title="" className="rd-btn"><i className="fa fa-angle-double-right"></i></a>
                                        <h2><a href="#" title="">Antenna Tagging System</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="case-study-sec half-overlay">
                <div className="container">
                    <div className="sec-title-style2">
                        <div className="sec-title">
                            <span>Our Recent Work</span>
                            <h2>Our Case’s Study</h2>
                        </div>
                        <a href="#" title="" className="lnk-default">View All Project</a>
                        <div className="clearfix"></div>
                    </div>
                    <div className="case-study-section">
                        <div className="case_slider">
                            <div className="case_slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="case-study-carouz">
                                            <div className="case-study-slide">
                                                <h4>Commerical</h4>
                                                <h2>Bussiness Building Secour Cam</h2>
                                                <span>Cayler Offices</span>
                                                <p>A simple and proven methodology that companies use to measure customer
                                                    happiness as it relates to company brand, product or service.</p>
                                                <a href="#" title="" className="lnk-default">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="gallery-row">
                                            <div className="gallery-thumb">
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="gallery-images-slide" id="custom-gallery">
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="case_slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="case-study-carouz">
                                            <div className="case-study-slide">
                                                <h4>Commerical</h4>
                                                <h2>We Secure Your Home Excet Your Thought</h2>
                                                <span>Cayler Offices</span>
                                                <p>A simple and proven methodology that companies use to measure customer
                                                    happiness as it relates to company brand, product or service.</p>
                                                <a href="#" title="" className="lnk-default">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="gallery-row">
                                            <div className="gallery-thumb">
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="gallery-images-slide">
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="case_slide">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="case-study-carouz">
                                            <div className="case-study-slide">
                                                <h4>Commerical</h4>
                                                <h2>Safty and Security at your Fingertips</h2>
                                                <span>Cayler Offices</span>
                                                <p>A simple and proven methodology that companies use to measure customer
                                                    happiness as it relates to company brand, product or service.</p>
                                                <a href="#" title="" className="lnk-default">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="gallery-row">
                                            <div className="gallery-thumb">
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb1.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb2.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb3.jpg" alt="" />
                                                </div>
                                                <div className="gallery-th">
                                                    <img src="/src/assets/images/resources/thumb4.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="gallery-images-slide">
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal2.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal2.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/ga4.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/ga4.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                                <div className="gallery-image">
                                                    <img src="/src/assets/images/resources/gal3.jpg" alt="" />
                                                    <a href="/src/assets/images/resources/gal3.jpg" title=""
                                                        className="lightbox full-img">
                                                        <i className="fa fa-expand"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="sbs-section">
                <div className="container">
                    <div className="sbs-content">
                        <div className="sbs-max">
                            <span>Have any ideas in your mind?</span>
                            <h2>We Provide Leading Security Systems</h2>
                            <a href="#" title="" className="lnk-default">Request A Quote</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sys-system-section">
                <div className="container">
                    <div className="sys-row">
                        <div className="sec-title white">
                            <span>Get a Free Risk</span>
                            <h2>Inquiry For Security System</h2>
                        </div>
                        <form className="js-ajax-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-push-6">
                                    <div className="features-list">
                                        <h3>Features :</h3>
                                        <ul className="radi-values">
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Video Monitoring" /> <span>Video
                                                        Monitoring</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Cloud Access" /> <span>Cloud
                                                        Access</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Retail Video Analytics" />
                                                    <span>Retail Video Analytics</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="GSM Battery Alarm" /> <span>GSM
                                                        Battery Alarm</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="GSM Battery Alarm" /> <span>GSM
                                                        Battery Alarm</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="IP Video" /> <span>IP
                                                        Video</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Fingerprint Door Sensor" />
                                                    <span>Fingerprint Door Sensor</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Fingerprint Door Sensor" />
                                                    <span>Fingerprint Door Sensor</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Smart Phone Sceurity" />
                                                    <span>Smart Phone Sceurity</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input name="val" type="checkbox" value="Recard Movements" /> <span>Recard
                                                        Movements</span>
                                                    <small className="checkcircle"></small>
                                                </label>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-form">
                                        <div className="form-group no-pt">
                                            <div className="missing-message">
                                                Populate Missing Fields
                                            </div>
                                            <div className="success-message">
                                                <i className="fa fa-check text-primary"></i> Thank you!. Your message is
                                                successfully sent...
                                            </div>
                                            <div className="error-message">Populate Missing Fields</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="text" name="name" placeholder="Name" id="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="email" name="email" placeholder="Email" id="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="text" name="phone" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="text" name="address" placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="text" name="cameras" placeholder="No. of Camera" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-field">
                                                    <input type="text" name="size" placeholder="House and Land size" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-field">
                                                    <textarea name="message" placeholder="Your Text Massage"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row sbmt">
                                <div className="form-submission">
                                    <div className="form-submit">
                                        <button type="submit" name="submit" className="lnk-default submit">Send Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* <section className="testimonial-sec">
                <div className="container">
                    <div className="sec-title">
                        <span>What people say about us</span>
                        <h2>People Review For Us</h2>
                    </div>
                    <div className="testimonial-section">
                        <div className="row testi-carousel">
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <div className="auth-img">
                                        <img src={auth1} alt="" />
                                    </div>
                                    <h3>Raisa Moni</h3>
                                    <span>UX & Product Designer</span>
                                    <ul className="rating">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <p>We’re on a mission to start a conversation with your customers in this fast connected
                                        world. Let’s discover, build and grow your digital business. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <div className="auth-img">
                                        <img src={auth2} alt="" />
                                    </div>
                                    <h3>Charles Sarah</h3>
                                    <span>UX & Product Develper</span>
                                    <ul className="rating">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <p>We’re on a mission to start a conversation with your customers in this fast connected
                                        world. Let’s discover, build and grow your digital business. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <div className="auth-img">
                                        <img src={auth1} alt="" />
                                    </div>
                                    <h3>Raisa Moni</h3>
                                    <span>UX & Product Designer</span>
                                    <ul className="rating">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <p>We’re on a mission to start a conversation with your customers in this fast connected
                                        world. Let’s discover, build and grow your digital business. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-slide">
                                    <div className="auth-img">
                                        <img src={auth2} alt="" />
                                    </div>
                                    <h3>Charles Sarah</h3>
                                    <span>UX & Product Develper</span>
                                    <ul className="rating">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <p>We’re on a mission to start a conversation with your customers in this fast connected
                                        world. Let’s discover, build and grow your digital business. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Home;
