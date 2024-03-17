<!DOCTYPE html>

<!--- header -->
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selby Wainman</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</head>
<body>

    
    <div class="container">
        <!--- navigator and logo -->
        <nav>
            <img src="images/logocopy.png" class="logo">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Portfolio</a></li>
            </ul>
            <img src="" class="cart-icon">
        </nav>

        <!--- profile image -->
        <div  data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center" class="profile">
            <img src="images/profile6.png">
        </div>



        <!--- animated hero text -->
        
        <div data-aos="fade-in" class="text-box">
            <p>I'm</p>
            <h1>SELBY <br>WAINMAN.</h1>
            <h3>EXPERT BRAND & WEBSITE DESIGNER</h3>
            <div class="row">
                <a href="">Lets work together <span>&#x27F6</span></a>
            </div>
        </div>

        <div class="scroller" data-speed="fast">
            <ul class="tag-list scroller__inner">
                Selby took our vague ideas and turned them into a<br> stunning visual identity that perfectly
                 represents our brand. Communication <br> was seamless,  and the final product exceeded all expectations.<br>
                - Hang Thanh Vo &#9733; &#9733; &#9733; &#9733; &#9733;</li>
                <li>Selby is a fantastic designer, he is very helpful and guided<br> us through the process from idea, design and complete product.<br>
                    - John Williams &#9733; &#9733; &#9733; &#9733; &#9733;</li>
                    <li>Selby is a fantastic designer, he is very helpful and guided<br> us through the process from idea, design and complete product.<br>
                        - John Williams &#9733; &#9733; &#9733; &#9733; &#9733;</li>
                        <li>Selby is a fantastic designer, he is very helpful and guided<br> us through the process from idea, design and complete product.<br>
                            - John Williams &#9733; &#9733; &#9733; &#9733; &#9733;</li>
            </ul>
        </div>


         <!--- grid container and items -->
        <div class="grid-container">
            <div class="item item-1 item-hidden" onclick="openModal(1)" >
            <button class="custom-button"> website</button>
            <button class="custom-button"> logo</button></div>
            <div class="item item-2 item-hidden" onclick="openModal(2)">
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> packaging </button></div> 
            <div class="item item-3 item-hidden" onclick="openModal(1)">3
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> packaging </button></div>
            <div class="item item-4 item-hidden" onclick="openModal(3)">4
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> packaging </button></div>
            <div class="item item-5 item-hidden" onclick="openModal(4)">5
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> packaging </button></div>
            <div class="item item-7 item-hidden" onclick="openModal(7)">7
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> print </button></div>
            <div class="item item-8 item-hidden">8
                <button class="custom-button"> logo </button>
                <button class="custom-button"> brand identity </button>
            </div>
            <div class="item item-10 item-hidden"onclick="openModal(10)">10
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> print </button></div>
            <div class="item item-13 item-hidden" onclick="openModal(13)">13
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> print </button></div>
            <div class="item item-15 item-hidden" onclick="openModal(15)">15
                <button class="custom-button"> website</button>
                <button class="custom-button"> logo </button>
                <button class="custom-button"> print </button></div>
        </div>
    </div>


    <!--- Modal items -->  
    <div class="modal" id="modal-1">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>

            <img src="images/lunarc/lunarlogo.png"></img>
            <img src="images/lunarc/lunarlogogrid.png"></img>
            <img src="images/lunarc/lunarcwebgrid.png"></img>
            <img src="images/lunarc/lunarlogogrid2.png"></img>
            <img src="images/lunarc/lunarlogogrid3.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(1)">&times;</span>
    </div>

    <div class="modal" id="modal-2">
        <div class="modal-content">
            <div class="modal-text">
                <h1>BIKE BOX Project</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>

            <img src="images/Comp-2.gif"></img>
            <img src="images/bikeboxlogogrid.png"></img>
            <img src="images/bikeboxlogogrid3.png"></img>
            <img src="images/bikeboxweb.png"></img>
            <img src="images/bikeboxlogogrid2.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(2)">&times;</span>
    </div>

    <div class="modal" id="modal-3">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/LEA/lealogo.png"></img>
            <img src="images/LEA/lealogogrid.png"></img>
            <img src="images/LEA/LEAbusinesscard.png"></img>
            <img src="images/LEA/LEAweb.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(3)">&times;</span>
    </div>


    <div class="modal" id="modal-4">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/tokyo-taste/tokyotaste logo.png"></img>
            <img src="images/tokyo-taste/tokyotaste logo2.png"></img>
            <img src="images/tokyo-taste/tokyotasteweb2.png"></img>
            <img src="images/tokyo-taste/tokyobag.png"></img>
 
        </div>
        <span class="close-button" onclick="closeModal(4)">&times;</span>
    </div>
    
    <div class="modal" id="modal-15">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/morgansre/morganslogo.png"></img>
            <img src="images/morgansre/morganweb.png"></img>
            <img src="images/morgansre/morganbcards.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(15)">&times;</span>
    </div>
    
    <div class="modal" id="modal-7">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/l2english/l2logo.png"></img>
            <img src="images/l2english/l2website.png"></img>
            <img src="images/l2english/l2businesscard.png"></img>
            <img src="images/l2english/l2flyer.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(7)">&times;</span>
    </div>

    <div class="modal" id="modal-10">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/pulse/pulselogo.png"></img>
            <img src="images/pulse/pulseweb.png"></img>
            <img src="images/pulse/pulsebillboard.png"></img>
            <img src="images/pulse/pulseticket.jpg"></img>
        </div>
        <span class="close-button" onclick="closeModal(10)">&times;</span>
    </div>
    
    <div class="modal" id="modal-13">
        <div class="modal-content">
            <div class="modal-text">
                <h1>Lunar Child, Bohemian jewellery</h1>
                <h2>Branding and e-commerce website design</h2>
                <p> The BikeBox graphic design project aimed to establish a unique brand identity by crafting a standout logo and a captivating website design for an online e-commerce store specializing in motorbike gear and apparel. Close collaboration with the client allowed for a deep understanding of their vision and brand ethos, resulting in design elements that mirror the dynamic and adventurous spirit of the motorcycling community. Overcoming challenges involved accommodating diverse client opinions. By incorporating an iterative feedback process and presenting multiple design options, we successfully navigated through varied preferences, ensuring the final logo and website design resonated with the intended audience. The positive feedback received from users attests to the success of the project in creating a visually appealing and user-friendly online platform for motorcycle enthusiasts.</p>
            </div>
            <img src="images/terrafuel/terrafuel.png"></img>
            <img src="images/terrafuel/terramockup.png"></img>
            <img src="images/terrafuel/terrawebpng.png"></img>
            <img src="images/terrafuel/terrabottle.png"></img>
        </div>
        <span class="close-button" onclick="closeModal(13)">&times;</span>
    </div>
    

    <!--- social media icons on the side -->  
    <div class="social-icons">
        <a href=""> <img src="images/dribble.png"></a>
        <a href=""> <img src="images/telegram.png"></a>
        <a href=""> <img src="images/instagram.png"></a>
    </div>



 <!--- footer contact, direct message -->  
<div class ="Contact">
    <div class="contact-section">
        <h2>Thanks for looking, let's work together</h2>
        <form>
            <div class="input-container">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name">
            </div>
            <div class="input-container">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email">
            </div>
            <div class="input-container">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>
</div>




 <!--- JS animated profile and text -->  
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
<script src="https://cdn.jsdelivr.net/npm/custom-cursor.js@2.0.2"></script>


<script src="main.js"></script> 

</body>
</html>
