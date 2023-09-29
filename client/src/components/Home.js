//import React from 'react'
import * as React from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import '../assets/Home.style.css'
import SingleBook from './SingleBook'


export default function Home() {
  return (
        <>
<br /><br />
            <div className="container div1">
              <div className="image">
                  <img className='mainImg' src={process.env.PUBLIC_URL + '/images/post-item4.jpg'}alt="Image" />
              </div>
              <div className="text">
              <h2 className='homeH2'>ONCE UPON A TIME <p>Scroll down</p></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime, animi hic molestiae voluptates deserunt reiciendis placeat adipisci tenetur suscipit optio pariatur reprehenderit? Quam, quo a. Omnis assumenda velit porro?</p>
              </div>
            </div>

<br /><br /><br />

      <section id="company-services" class="padding-xlarge">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <span class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <i className="fab fa-facebook"></i>
              </span>
              <div class="icon-box-content">
                <h4 class="card-title">Free delivery</h4>
                <p>Consectetur adipi elit lorem ipsumcon sectetur dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <i className="fab fa-facebook"></i>
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">Quality guarantee</h4>
                <p>Dolor sit amet elit lorem orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <i className="fab fa-facebook"></i>
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">Daily offers</h4>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 pb-3">
            <div class="icon-box text-center">
              <div class="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
              <i className="fab fa-facebook"></i>
              </div>
              <div class="icon-box-content">
                <h4 class="card-title">100% secure payment</h4>
                <p>Rem adipi elit lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<br /><br /><br />


<section id="about">
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-8">
            <div class="image-holder">
              <img src="images/single-image3.jpg" alt="single" class="single-image img-fluid" style={{height:'30rem', width:'38rem',}} />
            </div>
          </div>
          <div class="about-content bg-gray col-lg-4 m-auto top-0 end-0 bottom-0">
            <h3 class="py-3">Who are we</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ducimus doloribus provident quidem molestias! Dolorum animi distinctio illo error possimus, ex consequatur, obcaecati nisi suscipit impedit aliquid fugit ipsa aut.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita esse culpa consequuntur porro labore
            </p>
            <a href="about.html" class="btn">About us →</a>
          </div>
        </div>
      </div>
    </section>

      <div class="container display-header d-flex flex-wrap justify-content-between pb-4">
        <h3 >Best selling Items</h3>
        <div class="btn-right d-flex flex-wrap align-items-center">
          <a href="shop.html" class="btn me-5" style={{fontSize:'1.5rem'}}>View all items →</a>
        </div>
      </div>
      <div className='book-container'>
              <SingleBook />
              <SingleBook />
              <SingleBook />
              <SingleBook />
            </div>
            <br /><br />
        </>
           
  )
}
