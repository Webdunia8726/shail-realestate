document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".Header-containerr");
    if (headerContainer) {
      headerContainer.innerHTML = `
        <div class="container-fluid nav-bar bg-transparent">
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4 sticky-top">
        <a href="index.html" class="navbar-brand d-flex align-items-center text-center">
            <div class="icon p-2 me-2">
                <img class="img-fluid" src="img/icon-deal.png" alt="Icon" style="width: 30px; height: 30px;">
            </div>
            <h1 class="m-0 text-primary">A.J PROPERTIES</h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="property-list.html" class="dropdown-item">Property List</a>
                        <a href="property-type.html" class="dropdown-item">Property Type</a>
                        <!-- <a href="dashboard.html" class="dropdown-item">Add property</a> -->
                    </div>
                </div>
                
                <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
</div>
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var FooterContainer = document.querySelector(".Footer-containerr");
    if (FooterContainer) {
      FooterContainer.innerHTML = `
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>4/42, Vibhav Khand, Gomti Nagar, Lucknow - 226010</p>
                        <p class="mb-2"><i class="fa fa-phone-alt "></i>+91 9559625148 , 9839088709</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>a.jproperties786@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/ajproperties33/"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61565496056256"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.youtube.com/@AJProperties_01"><i class="fab fa-youtube"></i></a>
                             <a class="btn btn-outline-light btn-social" href="https://x.com/AJProperties01"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/pro-shekh-ashra-ali-46931a327/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Quick Links</h5>
                        <a class="btn btn-link text-white-50" href="about.html">About Us</a>
                        <a class="btn btn-link text-white-50" href="moreproperties.html">Property</a>
                        <a class="btn btn-link text-white-50" href="contact.html">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="">Term & Conditions</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Photo Gallery</h5>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/gomtinagar.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/Malhaur1350.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/vidyacityfaizabadroad.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/Vidyacityfaizabadroad (1).jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-4">Subscribe</h5>
                        <p></p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email">
                            <button type="button"
                         class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Contact Us</button>

                        </div>
                    </div>
                </div>
            </div>
            
  
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".Call-button");
    if (CallContainer) {
      CallContainer.innerHTML = `
      <!-- Call Button -->
<a href="tel:+91 9559625148" class="call-button">
  <i class="fas fa-phone-alt"></i>
</a>

<!-- WhatsApp Button -->
<a href="https://wa.me/9559625148" class="whatsapp-button" target="_blank">
  <i class="fab fa-whatsapp"></i>
</a>


      `;
    }
  });
  