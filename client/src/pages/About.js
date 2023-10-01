//About us

import React, { useState } from 'react';
import '../assets/About.style.css'
function About(){
    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
      setRating(starValue);
    };
    return (
        <>
        <section id="about" class="padding-medium">
        <h3 class=" heading" >Who are we</h3>
            <div class="container">
                 
                 <div class="row">
                    <div class="image-holder col-md-6 mb-3">
                        <img src="images/post-item8.jpg" alt="single" class="img-fluid" />
                    </div>
                    <div class="image-holder col-md-6 mb-3">
                        <img src="images/post-item3.jpg" alt="single" class="img-fluid" />
                    </div>          
                </div>
            <div>
                </div>
                </div>
 
          <p style={{paddingLeft:'2rem'}}>At BookTopia, we're passionate about books and the magic they bring to our lives. As avid readers and lovers of literature, we've created a curated collection of books that cater to all tastes and ages. <br /> Our mission is simple: to connect people with the joy of reading. Whether you're seeking knowledge, entertainment, or inspiration, our shelves are stocked with carefully selected titles to transport you to new worlds and spark your imagination. <br /> We're more than just a bookstore, we're a community of book enthusiasts. Join us for book clubs, author events, and discussions to share your love of reading.We are committed to promoting the joy of reading and the power of knowledge. We believe that books have the incredible ability to transport us to different worlds, expand our horizons, and ignite our imagination. Our carefully curated collection reflects our dedication to bringing you the finest literature and educational resources. <br /> Thank you for being a part of our literary journey. Explore our shelves, discover new stories, and let's celebrate the world of books together.</p>
    </section> <br /><br />

    <section id="newsletter" class="news-outer">
      <div class="container">
        <div class="newsletter">
          <div class="row">
            <div class="col-lg-6 col-md-12 title">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get latest news, updates and deals directly mailed to your inbox.</p> 				
            </div>
            <form class="col-lg-6 col-md-12 d-flex align-items-center">
              <div class="d-flex w-75 border-bottom border-dark py-2">
                <button class="btn border-2 p-2" type="button" fdprocessedid="rjwr4l">Subscribe</button>
              </div>
            </form>
          </div> 			
        </div>
      </div>
    </section><br /><br />




            <div class="add-review margin-small">
                  <div className='rev-start'>
                        <h3 >Add a review</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <h4 class="my-2">Your rating *</h4>
                        <div>
                            {[1, 2, 3, 4, 5].map((starValue) => (
                            <span
                                key={starValue}
                                className={starValue <= rating ? 'star filled' : 'star'}
                                onClick={() => handleStarClick(starValue)}
                            >
                                &#9733;
                            </span>
                            ))}
                        </div>
                  </div>

                  <div className='rev-form'>
                  <form id="form">
                    <div class="py-3">
                      <label>Your Name *</label>
                      <input type="text" name="name" placeholder="Write your name here" class="w-100" />
                    </div>
                    <div class="py-3">
                      <label>Your Email *</label>
                      <input type="text" name="email" placeholder="Write your email here" class="w-100" />
                    </div>
                    <div class="py-3">
                      <label>Your Review *</label>
                      <textarea rows={5} placeholder="Write your review here" class="w-100"></textarea>
                    </div>
                    <button type="submit" name="submit" class="btn sub w-100 my-3">Submit</button>
                  </form>
                  </div>
                </div>
        </>

    );
}

export default About;



