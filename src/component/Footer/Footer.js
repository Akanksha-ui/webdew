import "./Footer.css";
import linkedin from "../../assets/icons/linkedin.png";
import youtube from "../../assets/icons/youtube.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="company_info">
                <div classname="footerlogo">
                  <img
                    src={logo}
                    width="150px"
                    style={{ marginBottom: "15px" }}
                  />
                </div>
                <p>
                  Sales for Life was founded in 2004 with one goal – to become
                  the most trusted sales resource for its customers. During our
                  journey, we’ve had the privilege of serving thousands of sales
                  professionals and Leaders around the world, from start-ups to
                  Fortune 50 corporations.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="info">
                <h4>Product</h4>
                <p>Digital Sales Mastery</p>
                <p>Keynotes & Workshops</p>
                <p>Book: SPEAR Selling</p>
                <p>Book: Social Selling Mastery</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="info">
                <h4>info</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Case Studies</p>
                <p>What is Digital Sales?</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="info">
                <h4>Contact</h4>
                <p>2 Bloor Street West Suite 700 Toronto, M4W 3E2 Canada</p>
                <p>support@salesforlife.com</p>
                <p> Toll-free: (877) 367-9216</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row bottombar">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div>
                <p>
                  © Copyright 2021 Salesforlife. All rights reserved. Various
                  trademarks held by their respective owners.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="social_link">
                <img src={linkedin} />
                <img src={youtube} />
                <img src={twitter} />
                <img src={facebook} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
