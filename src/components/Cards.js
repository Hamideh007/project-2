import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover these Unforgettable Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Experience Unparalleled Luxury at Soneva Fushi Resort in the Maldives!'
              label='Luxury'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Ancient wonders and mysteries of pharaohs come alive in Egypt.'
              label='Mystery'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Paris: Captivating elegance and romance in the City of Love and Lights.'
              label='Luxury'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Iran: A tapestry of architectural and artistic marvels.'
              label='History'
              path='/'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Alberta Northern Lights: Celestial magic in vibrant, dancing colors.'
              label=''
              path='/Mystery'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Rome: Ancient meets modern under Tuscan sun.'
              label=''
              path='/History'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
<div className='cards__container2'>
<div className='cards__wrapper'>
  <ul className='cards__items'>
    <CardItem
      src={'./images/img7.jpeg'}
      text='Machu Picchu: Ancient wonders, breathtaking landscapes.'
      label='Adventure'
      path='/'
    />
     <CardItem
      src={'./images/img-8.jpg'}
      text='Tropical Island Retreat: Relaxation Perfected.'
      label='Relaxation'
      path='/'
    />

    <CardItem
      src={'./images/img-9.jpg'}
      text='Santorini: Surrender to the Charms of the Aegean Beauty.'
      label='History'
      path='/'
    />
  </ul>
  <ul className='cards__items'>
    <CardItem
      src={'./images/img-10.jpg'}
      text='Venice: Navigate the Waterways of Romantic Splendor.'
      label='Luxury'
      path='/'
    />
    <CardItem
      src={'./images/img-11.jpg'}
      text='Banff National Park: Embrace the Wilderness of Canadian Majesty.'
      label='Adventure'
      path='/'
    />
    <CardItem
      src={'./images/img-12.jpg'}
      text=' Experience the Magic of Japan in Full Bloom.'
      label='Luxury'
      path='/'
    />            
  </ul>
</div>
</div>
export default Cards;