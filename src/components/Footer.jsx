const Footer = () => (
    <footer className="small bg-light">
    <div className="container py-3 py-sm-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <h6>Quick links</h6>
          <ul className="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/">What's new</a></li>
            <li><a href="/">Featured Product</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <h6>Information</h6>
          <ul class="list-unstyled">
            <li><a href="/">About us</a></li>
            <li><a href="/">Membership</a></li>
            <li><a href="/">Shipping &amp; returns</a></li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <h6>Follow us</h6>
          <ul className="list-unstyled">
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
  
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <address>
            <strong>Tecsup Lima</strong><br />
            Central<br />
            Santa Anita<br />
            <abbr title="Telephone">T:</abbr
            ><a href="tel:+919876543210">(987) 979377644</a><br />
            <abbr title="Mail">M:</abbr
            ><a href="mailto:info@domain.com">info@tecsup.com</a>
          </address>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-9">
          <ul class="list-inline">
            <li class="list-inline-item">© 2022 Tecsup - Alumnos inc</li>
            <li class="list-inline-item">All rights reserved.</li>
            <li class="list-inline-item">
              <a href="#">Terms of use and privacy policy</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <div class="dropdown dropup p-0">
            <button
              type="button"
              class="btn btn-secondary btn-sm dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Visit other sites:
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a href="#" class="dropdown-item">www.otherwebsite.com</a>
              <a href="#" class="dropdown-item">www.newwebsite.com</a>
              <a href="#" class="dropdown-item">www.oldwebsite.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;