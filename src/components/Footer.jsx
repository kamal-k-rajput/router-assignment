import "./Footer.css";

export const Footer = () => {
  return (
    <div id="ft_container">
      <div id="footer">
        <div id="icons" className="ft_white">
          <img
            src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
            alt="suger cosmetics logo"
          />
          <div id="ft_logo">
            <img
              src="https://in.sugarcosmetics.com/desc-images/facebook.svg"
              alt="fblogo"
            />
            <img
              src="
              https://in.sugarcosmetics.com/desc-images/Instagram.svg"
              alt="instagram logo"
            />
            <img
              src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg"
              alt="Pinterest"
            />
            <img
              src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg"
              alt="Tumblr"
            />
            <img
              src="https://in.sugarcosmetics.com/desc-images/Youtube.svg"
              alt="Youtube"
            />
          </div>
        </div>
        <div id="footer-info">
          <footer className="ft_row">
            <footer className="ft_white">SUBSCRIBE TO OUR NEWSLETTER</footer>
            <footer className="ft_white">
              GET THE NEW TANNER GOODS APP TODAY.
            </footer>
          </footer>
          <footer className="ft_row ft_white">
            <div className="ft_row">
              <input
                type="email"
                placeholder="Your email address"
                id="ft_email"
              />
              <button id="ft_signup">SIGN UP</button>
            </div>
            <div id="ft_store" className="ft_row">
              <p>Tap into a better shopping experience.</p>
              <div className="ft_row">
                <img
                  src="https://in.sugarcosmetics.com/playstore.png"
                  alt="google play store"
                />
                <img
                  src="https://in.sugarcosmetics.com/apple-store.png"
                  alt="apple play store"
                />
              </div>
            </div>
          </footer>
          <footer className="ft_white">INFORMATION</footer>
          <footer className="ft_row">
            <div>
              <a href="mailto:hello@sugarcosmetics.com"> Contact Us </a>
            </div>
            <div>
              <a href="https://in.sugarcosmetics.com/pages/terms-conditions">
                Terms & Conditions
              </a>
            </div>
            <div>
              <a href="https://in.sugarcosmetics.com/pages/returns-refunds">
                Returns
              </a>
            </div>
            <div>
              <a href="https://in.sugarcosmetics.com/pages/faqs">FAQs</a>
            </div>
            <div>
              <a href="https://in.sugarcosmetics.com/pages/about-us">
                About Us
              </a>
            </div>
          </footer>
          <footer className="ft_white">GET IN TOUCH</footer>
          <footer>
            <div className="ft_row">
              <div>
                <div>Call us at</div>
                <div>
                  <a href="tel:022-2847-5555">022-2847-5555</a>
                </div>
                <div>
                  <a href="tel:022-6805-6009">022-6805-6009</a>
                </div>
                <div id="ft_time">Monday to Friday : 9 AM to 7 PM</div>
              </div>
              <div>
                <div>Support</div>
                <div>
                  <a href="mailto:hello@sugarcosmetics.com">
                    hello@tannergoods.com
                  </a>
                </div>
              </div>
              <div>
                <div>Careers</div>
                <div>
                  <a href="careers@sugarcosmetics.com">
                    careers@tannergoods.com
                  </a>
                </div>
              </div>
              <div>
                <div>PR & Media</div>
                <div>
                  <a href="pr@sugarcosmetics.com">pr@tannergoods.com</a>
                </div>
              </div>
            </div>
          </footer>
          <hr />
          <footer className="ft_white">
            <p id="ft_copyright">
              Copyright © 2022 TANNER GOODS. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
