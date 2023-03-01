import React from 'react';
import '../App.css';
import pizza from '../images/pexels-victor.png'

function Order() {
  return (
    <div className='banner1'>
      <div className='order-banner'>
        <h2>Make Your First Order And Get <span>50% Off</span></h2>
        <p id='p-1'>Get It Delivered Right To Your Door</p>
        <p id='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, temporibus? Pariatur, vel. Soluta, consequuntur dolore, iure tempore autem sed rerum amet fuga nemo distinctio ducimus accusantium laudantium aut tempora illum.</p>
        <button>Order Product</button>
      </div>
      <div className='banner-img'>
        <img src={pizza} alt='pizza'/>
      </div>
    </div>
  )
}

export default Order
