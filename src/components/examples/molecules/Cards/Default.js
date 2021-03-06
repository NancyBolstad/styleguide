import React from 'react';
import { Card, Cards } from '@telia/styleguide';

const imgSrc = require('assets/website-images/screenshot1.png');

const DefaultCards = () => (
  <Cards isGrey={true}>
    <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 1" />
    <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 2" />
    <Card
      img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }}
      link="#"
      title="Dette er cardsblokkasd asdasdasdasd 3"
    />
  </Cards>
);

export default DefaultCards;
