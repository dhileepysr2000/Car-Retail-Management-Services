import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/Navbar.css';
import { FaTruckPickup } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import { RiPriceTagFill } from "react-icons/ri";

export function Service() {
    return (<>
        <div className="servicescroll">&nbsp;</div>
        <div className="container p-5 text-white ">
            <h1>Service</h1>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <video id="myVideo" height="50%" width="100%" autoPlay>
                        <source
                            src="https://player.vimeo.com/external/581147860.sd.mp4?s=e042704c211f23f363fdbdd185f4566d35b4b4f0&profile_id=164&oauth2_token_id=57447761"
                            type="video/mp4" alt="Service video"/>
                    </video>
                </div>
                <div className="col-lg-6">
                    <div class="card servicevideo">
                        <div class="card-header">
                            Our Service
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">We provide good service</h5>
                            <p class="card-text">At our company, providing exceptional service is a top priority. Our dedicated team of professionals is committed to delivering the best experience possible to each and every one of our customers. From the moment you first contact us, you can expect a friendly and responsive approach that puts your needs first. We go above and beyond to ensure that you receive the right solutions, delivered in a timely and efficient manner. We believe that the key to building long-lasting relationships with our clients is through providing good service, and we take that responsibility seriously.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide mt-5" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="serviceImage" src="https://images.pexels.com/photos/6870298/pexels-photo-6870298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                                <div className="col-lg-6 serviceContent">
                                    <div className="row">
                                        <div className="col-lg-5 serviceContent1">
                                            <FaTruckPickup className="icons"></FaTruckPickup>
                                            <p>Free Pickup Drop</p>
                                        </div>
                                        <div className="col-lg-1">&nbsp;</div>
                                        <div className="col-lg-5 serviceContent1">
                                            <AiFillSetting className="icons"></AiFillSetting>
                                            <p>Genuine Parts</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 serviceContent1">
                                            <SiAdguard className="icons"></SiAdguard>
                                            <p>30 Days Warranty</p>
                                        </div>
                                        <div className="col-lg-1">&nbsp;</div>
                                        <div className="col-lg-5 serviceContent1">
                                            <RiPriceTagFill className="icons"></RiPriceTagFill>
                                            <p>Affordable price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="serviceImage" src="https://performanceautospecialists.com/wp-content/uploads/2019/05/46212975_m.jpg" />
                                </div>
                                <div className="col-lg-6">

                                    <div class="card service2card1">
                                        <div class="card-header">
                                            Our machanic
                                        </div>
                                        <div class="card-body bg-dark">
                                            <h5 class="card-title">We have a reliable mechanic</h5>
                                            <p class="card-text">Being a great mechanic involves more than identifying problems, repairing or replacing worn parts and knowing the difference between the camshaft and crankshaft. You’ve got to be able to deliver exceptional customer service. After all, people invest a lot of money in their automobiles, and they want to work with a mechanic who can put them at ease; they want to work with someone they can trust.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="carousel1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="serviceImage" src="https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=600" />
                                </div>
                                <div className="col-lg-6">
                                    <div class="card service2card2">
                                        <div class="card-header">
                                            Our Spares
                                        </div>
                                        <div class="card-body bg-dark">
                                            <h5 class="card-title">Genuine spare parts</h5>
                                            <p class="card-text">Our company takes great pride in providing the best spare parts in the industry. We understand the importance of quality components for the proper functioning and longevity of your equipment. That's why we only source parts from reputable manufacturers with a proven track record of excellence. Our expert team of technicians carefully inspects each item to ensure it meets our high standards before being shipped to our customers. You can trust us to provide the reliable, high-quality spare parts you need to keep your operations running smoothly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </>);
}