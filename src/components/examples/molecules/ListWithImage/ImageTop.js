import React from 'react';
import { ListWithImage } from '@telia/styleguide';

const { Item } = ListWithImage;

const ImageTop = () => (
  <ListWithImage
    src={require('assets/website-images/kids-ipad.jpg')}
    alt="Two kids playing with a tablet"
    imagePosition="top"
  >
    <Item>
      This is the <code>imagePosition=&#34;top&#34;</code> variant.
    </Item>
    <Item>On smaller devices the list will wrap under the image.</Item>
    <Item>On larger screens, it looks the same.</Item>
  </ListWithImage>
);

export default ImageTop;
