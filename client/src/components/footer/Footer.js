import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";
import {
  FACEBOOK_LINK,
  GOOGLE_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  PINTEREST_LINK,
  QUORA_LINK,
  REDDIT_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from "../../constants";

function Footer() {
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">
                  Navachar Udyamita Vikash Council<span></span>
                </h5>
                <p className="ftp">
                  नव उद्यम अभियान स्वरोजगार, उद्यमशीलता एवम रोजगार को बढ़ावा
                  देने वाली विभिन्न विभाग के विभिन्न सरकारी योजनाओं को समन्वित
                  करके ग्रामीण भारत को आत्मनिर्भर बनाने के लिए नवाचार उद्यमिता
                  विकास काउंसिल द्वारा कार्यान्वित किया गया है।
                </p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content">
                      <Link to="/privacy">&nbsp;Privacy Policy</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/terms">&nbsp;Terms and Conditions</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/refund">&nbsp;Refund Policy</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/disclaimers">&nbsp;Disclaimers</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/about">&nbsp;About</Link>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <Link to="/faq">&nbsp;FAQ</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3">
              <h5 class="widget-title">
                Follow up<span></span>
              </h5>
              <div
                class="widget no-box"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  padding: "10px",
                  gridGap: "15px",
                }}
              >
                <a href={FACEBOOK_LINK} target="_blank">
                  <i
                    class="fab fa-facebook"
                    style={{ color: "white", fontSize: "25px" }}
                  ></i>
                </a>
                <a href={LINKEDIN_LINK} target="_blank">
                  <i
                    class="fab fa-linkedin"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>
                <a href={INSTAGRAM_LINK} target="_blank">
                  <i
                    class="fab fa-instagram"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={TWITTER_LINK} target="_blank">
                  <i
                    class="fab fa-twitter"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={YOUTUBE_LINK} target="_blank">
                  <i
                    class="fa-brands fa-youtube"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={GOOGLE_LINK} target="_blank">
                  <i
                    class="fa-brands fa-google"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={REDDIT_LINK} target="_blank">
                  <i
                    class="fa-brands fa-reddit"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={PINTEREST_LINK} target="_blank">
                  <i
                    class="fa-brands fa-pinterest"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>

                <a href={QUORA_LINK} target="_blank">
                  <i
                    class="fa-brands fa-quora"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <br />
            <br />

            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">
                  Contact Us<span></span>
                </h5>
                <address>
                  Address: B15 Shankar Garden, Janakpuri west metro station, New
                  Delhi-110018
                </address>
                <div class="emailfield">
                  <p>
                    <b>Phone:</b> <a href="tel:01146579553">+91 9599581858</a>
                  </p>
                  <p>
                    <b>Email:</b>
                    <a href="mailto:admin@nuvc.org"> admin@nuvc.org</a>
                  </p>
                  {/* <input type="text" name="email" value="Email" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input
                    class="submitbutton ripplelink"
                    type="submit"
                    value="Subscribe"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <p style={{ textAlign: "center" }}>
                कॉर्पोरेट कार्य मंत्रालय, कंपनी अधिनियम 2013 के अधीन सेक्शन 8
                निकाय, निति आयोग में सूचीबद्ध, कौशल विकास एवं उद्यमशीलता
                मंत्रालय से सम्बद्ध प्रशिक्षण प्रदाता संस्था, सामाजिक न्याय एवं
                अधिकारिता विभाग
              </p>

              <div class="col-md-12 text-center">
                <p>Copyright Udyamit © {new Date().getFullYear()}. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
