import React from 'react';

import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const RecommendedProducts = ({ mainHeading, products, image, heading, text, buttonText }) =>
    <div className="recommended-products">
        <Heading level="2" text={mainHeading} className="recommended-products__heading"/>
        <div className="recommended-products__products">
            {products.map((product, i) =>
                <div key={i} className="recommended-products__item-container">
                    <a className="recommended-products__item recommended-products__product" href={product.url}>
                        <div className="recommended-products__product-image-container">
                            <img className="recommended-products__product-image" src={product.image} />
                        </div>
                        <Heading level="3" text={product.name} className="recommended-products__product-name" />
                        <p className="recommended-products__product-price">{product.price},-</p>
                    </a>
                </div>
            )}
            <div className="recommended-products__item-container recommended-products__teaser-container">
                <div className="recommended-products__item recommended-products__teaser">
                    <div className="recommended-products__teaser-image-container">
                        <img className="recommended-products__teaser-image" src={image} />
                    </div>
                    <Heading level="3" text={heading} />
                    <p className="paragraph">{text}</p>
                    <Button text={buttonText} size="small" />
                </div>
            </div>
        </div>
    </div>;

export default RecommendedProducts;