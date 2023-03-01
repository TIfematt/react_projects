import React from 'react';
import '../App.css';
import Order from '../components/Order';
import { FaRegMap, FaCodiepie, FaBox, FaRegCalendar, FaRegClock } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiRestaurant, BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'


function Home() {
    

  return (
    <div className='home'>
        <div className='hero-1'>
            <h2>We Deliver The</h2>
            <h2>Taste Of Life</h2>
            <p>Get It Delivered Right To Your Door</p>
            <form>
                <input type='text' placeholder='Enter your location'></input>
                <button type='submit'>Search Food</button>
            </form>
        </div>
        <div className='order-card'>
            <div className='card-design'>
                <section>
                    <FaRegMap className='icon'/>
                    <h4>STEP 1</h4>
                </section>
                <h3>Choose Location</h3>
                <p>Enter your address or choose your current location using app</p>
            </div>
            <div className='card-design'>
                <section>
                    <FaCodiepie className='icon'/>
                    <h4>STEP 2</h4>
                </section>
                <h3>Order Favorite Food</h3>
                <p>Choose your favorite food and payment method</p>
            </div>
            <div className='card-design'>
                <section>
                    <FaBox className='icon'/>
                    <h4>STEP 3</h4>
                </section>
                <h3>Fast Delivery</h3>
                <p>Get it delivered right to your door in 1 hour or less</p>
            </div>
        </div>
        <div className='below-card'>
            <p>Featured</p>
            <h3>Restaurants & Cafes</h3>
            <p>The best Restaurants and cafes that has been <span>working with us for a long time</span></p>
        </div>
        <div className='restaurant-card'>
            <div className='card card1'>
                <div className='card-icon'>
                    <div className='icon1'><FaRegCalendar/></div>
                    <div className='icon1'><FaRegClock/></div>
                </div>
                <h3>Restaurant</h3>
                <h2>Bulgarian Restaurant</h2>
            </div>
            <div className='card card2'>
                <div className='card-icon'>
                    <div className='icon1'><FaRegCalendar/></div>
                    <div className='icon1'><FaRegClock/></div>
                </div>
                <h3>Asian Food</h3>
                <h2>Sushi Taste</h2>
            </div>
        </div>
        <div className='restaurant-card2'>
            <div className='card card3'>
                <div className='card-icon'>
                    <div className='icon1'><FaRegCalendar/></div>
                    <div className='icon1'><FaRegClock/></div>
                </div>
                <h3>Cafe</h3>
                <h2>Hot Pastry Cafe</h2>
            </div>
            <div className='card card4'>
                <div className='card-icon'>
                    <div className='icon1'><FaRegCalendar/></div>
                    <div className='icon1'><FaRegClock/></div>
                </div>
                <h3>Pub</h3>
                <h2>Beer Power</h2>
            </div>
        </div>
        <div className='view'>
        <button className='view-all-btn'>View All List</button>
        </div>
        <section className='why-people'>
            <h4>The reason why</h4>
            <h2>Why people Choose Us</h2>
            <p>We have many advantages but we will highlight only <span>some of them, look below</span></p>
            <div className='div-choose-us'>
                <article className='choose-us'>
                    <GiPriceTag className='choose-us-icon'/>
                    <h3>Discount System</h3>
                    <p>We have an affordable system</p>
                </article>
                <article className='choose-us'>
                    <TbTruckDelivery className='choose-us-icon'/>
                    <h3>Express Delivery</h3>
                    <p>Record time food delivery</p>
                </article>
                <article className='choose-us'>
                    <BiRestaurant className='choose-us-icon'/>
                    <h3>50+ Restaurant</h3>
                    <p>Large Selection of restaurant</p>
                </article>
            </div>

        </section>
        <div className='home-banner1'>
                <Order/>
        </div>
        <div className='customer-feedback'>
            <div className='arrow left-arrow'>
                <BiLeftArrowCircle />
            </div>
            <div className='testimony '>
                <p>Testimony</p>
                <h3 className='tes-header'>Here From Our Clients</h3>
                <p className='tes-word'>Very fast delivery, i recommend to everyone. The food is very hoot and fresh and also tasty as in a restaurant. The application is very convenient and understanable</p>
                <div className='img-holder'>
                    <img src='' />
                </div>
                <h3>Tife Matt</h3>
                <p>May 16, 2022</p>
            </div>
            <div className='arrow right-arrow'>
                <BiRightArrowCircle />
            </div>
        </div>
        <div className='after-testimony'>
            <p>Amazing taste</p>
            <h2>Popular Dishes</h2>
            <div className='selec-dish'>
                <button>Rice</button>
                <button>Ewa</button>
                <button>Cassava</button>
                <button>Garri</button>
                <button>Beans</button>
            </div>
        </div>
        <div className='food-display' >
            <div className='display-1'>
                <div className='display-image'>
                    <img src='' />
                </div>
                <h4>Rib-Eye Steaks</h4>
                <p>Few things are better than a properly grilled steak</p>
                <h3>$15.69</h3>
                <button>Add To Cart</button>
            </div>
            <div className='display-1'>
                <div className='display-image'>
                    <img src='' />
                </div>
                <h4>Top Silon Steaks</h4>
                <p>Few things are better than a properly grilled steak</p>
                <h3>$25.39</h3>
                <button>Add To Cart</button>
            </div>
            <div className='display-1'>
                <div className='display-image'>
                    <img src='' />
                </div>
                <h4>T-bone Steaks</h4>
                <p>Few things are better than a properly grilled steak</p>
                <h3>$18.99</h3>
                <button>Add To Cart</button>
            </div>
            <div className='display-1'>
                <div className='display-image'>
                    <img src='' />
                </div>
                <h4>Strip Steaks</h4>
                <p>Few things are better than a properly grilled steak</p>
                <h3>$16.89</h3>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home