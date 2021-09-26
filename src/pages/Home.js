import "./Home.css";
import mail from "../assets/icons/mail.png";
import winrate from "../assets/icons/winrate.png";
import quote from "../assets/icons/quote.png";
import vector from "../assets/icons/Vector.png";
import customer from "../assets/icons/customer.png";
import star from "../assets/icons/star.png";
import path from "../assets/icons/path.png";
import eBook from "../assets/images/eBook.png";
import girl from "../assets/images/girl.png";
import customer1 from "../assets/images/customer1.png";
import customer2 from "../assets/images/customer2.png";
import customer3 from "../assets/images/customer3.png";
import customer4 from "../assets/images/customer4.png";
import customer5 from "../assets/images/customer5.png";
import customer6 from "../assets/images/customer6.png";
import girl2 from "../assets/images/girl2.png";
import sliderimg from "../assets/images/sliderimg.png";
import pipeline from "../assets/images/pipeline.png";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row hero_img_r">
            <div className="col-lg-6 col-xs-12 ">
              <div className="hero_section">
                <h1>Modern Sales Training for the Modern Seller</h1>
                <p>
                  The science of pipeline creation & account growth is finally
                  here! We help B2B revenue organization increase pipeline, grow
                  accounts and boost customer lifetime value.
                </p>
                <div className="input_wrapper">
                  <div className="img">
                    <img src={mail} />
                  </div>
                  <input type="email" placeholder="salesforlife@gmail.com" />
                  <button>Let’s Talk</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <div className="heading">
                <h2>Trusted by the best</h2>
              </div>
            </div>
            <div className="col-12 mb-5 customer_background">
              <div className="customer">
                <div className="customer_img">
                  <img src={customer1} />
                </div>
                <div className="customer_img">
                  <img src={customer2} />
                </div>
                <div className="customer_img">
                  <img src={customer3} />
                </div>
                <div className="customer_img">
                  <img src={customer4} />
                </div>
                <div className="customer_img">
                  <img src={customer5} />
                </div>
                <div className="customer_img">
                  <img src={customer6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-12 ">
              <div className="pipeline_card">
                <h3>
                  Pipeline Creation: <br />
                  Attempted by Many, Achieved by Few
                </h3>
                <p>
                  Generating pipeline and accounts at scale is finally based on
                  facts, not opnions. Follow our proven path to enter accounts
                  faster, find opportunities and stay there longer
                </p>
              </div>
              <div className="pipeline_section">
                <div className="pipeline_content">
                  <div className="pipeline_content_card">
                    <div className="pipeline_content_img">
                      <img src={vector} />
                    </div>
                    <h4>Grow Pipelines By</h4>
                    <p>25%</p>
                  </div>
                  <div className="pipeline_content_card">
                    <div className="pipeline_content_img">
                      <img src={winrate} />
                    </div>
                    <h4>improve win Rates By</h4>
                    <p>20%</p>
                  </div>
                  <div className="pipeline_content_card">
                    <div className="pipeline_content_img">
                      <img src={quote} />
                    </div>
                    <h4>SURPASS QUOTA BY</h4>
                    <p>15%</p>
                  </div>
                </div>
                <p>
                  *based on actual results from customers, on average, within 1
                  year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-12">
              <div className="heading">
                <h2>This is How it Works</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6">
              <div className="second_card">
                <div className="second_card_heading">
                  <h2>1</h2>
                </div>
                <h5>Learn the Way</h5>
                <p>
                  Unlimited learning with a robust library, live training &
                  coaching.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6">
              <div className="second_card">
                <div className="second_card_heading">
                  <h2>2</h2>
                </div>
                <h5>Get Certified</h5>
                <p>
                  Practice the process to generate real sales outcomes on actual
                  territories & accounts every year (because tools & methods are
                  constantly evolving).
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-6">
              <div className="second_card">
                <div className="second_card_heading">
                  <h2>3</h2>
                </div>
                <h5>Scale Results/Pipeline</h5>
                <p>
                  Scale your efforts faster with actionable insights from
                  Signals, our managed data intelligence service.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="avaliable_section">
                <h4>Always on. Always available.</h4>
                <p>
                  The ScalePipeline System: Powering your revenue organization
                  with training,
                  <br /> data, and insights`
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ebook_section">
              <div className="ebook_container">
                <div className="ebook_img">
                  <img src={eBook} />
                </div>{" "}
                <div className="ebook_content">
                  <h4>Sed ut persp iciatis unde omnis iste na vero et</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <button>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-6 col-xs-12 mt-5">
              <div className="achievment_img">
                <img src={girl} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 mt-5">
              <div className="third_card_container">
                <div className="third_card">
                  <div className="achievment_card_img">
                    <img src={customer} />
                  </div>
                  <h4>Customers Globally</h4>
                  <p>500+</p>
                </div>
                <div className="third_card">
                  <div className="achievment_card_img">
                    <img src={path} />
                  </div>
                  <h4>Students Trained</h4>
                  <p>325K+</p>
                </div>
                <div className="third_card">
                  <div className="achievment_card_img">
                    <img src={star} />
                  </div>
                  <h4>5 Star Reviews</h4>
                  <p>100K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid mt-5 mb-5">
          <Slider {...settings}>
            <div className="slider_container">
              <div className="slider_content">
                <p>
                  At vero eos et accusamus et iusto odio digni ssimos ducimus
                  qui blanditiis prae sentium volup tatum deleniti atque.
                </p>
                <div className="profile">
                  <div className="profile_img">
                    <img src={girl2} />
                  </div>
                  <div>
                    <h5>Jon Sam, Co Founder</h5>
                    <p>Pixastory</p>
                  </div>
                </div>
              </div>
              <div className="slider_img">
                <img src={sliderimg} />
              </div>
            </div>
            <div className="slider_container">
              <div className="slider_content">
                <p>
                  At vero eos et accusamus et iusto odio digni ssimos ducimus
                  qui blanditiis prae sentium volup tatum deleniti atque.
                </p>
                <div>
                  <div>
                    <img src={girl2} />
                  </div>
                  <div>
                    <h5>Jon Sam, Co Founder</h5>
                    <p>Pixastory</p>
                  </div>
                </div>
              </div>
              <div className="slider_img">
                <img src={sliderimg} />
              </div>
            </div>
            <div className="slider_container">
              <div className="slider_content">
                <p>
                  At vero eos et accusamus et iusto odio digni ssimos ducimus
                  qui blanditiis prae sentium volup tatum deleniti atque.
                </p>
                <div>
                  <div>
                    <img src={girl2} />
                  </div>
                  <div>
                    <h5>Jon Sam, Co Founder</h5>
                    <p>Pixastory</p>
                  </div>
                </div>
              </div>
              <div className="slider_img">
                <img src={sliderimg} />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-sm-6 col-xs-12 mt-5">
              <div className="contact_img">
                <img src={pipeline} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 mt-5">
              <div className="contact_section">
                <h4>Grow your sales pipeline by 15% in just 90 days.*</h4>
                <div className="input_wrapper">
                  <div className="img">
                    <img src={mail} />
                  </div>
                  <input type="email" placeholder="salesforlife@gmail.com" />
                  <button>Let’s Talk</button>
                </div>
                <p>*Based on average results from actual customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
