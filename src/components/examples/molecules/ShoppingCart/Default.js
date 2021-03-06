import React from 'react';
import { Container, ShoppingCart } from '@telia/styleguide';

const cart = [
  {
    type: 'HANDSET',
    subtype: '',
    id: '9070585',
    bundleId: 'b96ccc',
    brand: 'Apple',
    brandSlug: 'apple',
    model: 'iPhone XR 64 GB',
    modelSlug: 'iphone-xr',
    color: 'Svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/1ROlmyodBW4Y8mAyqsUWmy/7414af4d07760cdc66e661af41380b42/front-apple-iphone-xr-svart.png',
    },
    name: 'Apple iPhone XR 64 GB Svart',
    quantity: {
      modifiable: false,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 0,
      monthly: 419,
      originalSalesPrice: 8799,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
    subtitle: 'Telia SVITSJ i 24 md.',
    items: [
      {
        type: 'SUBSCRIPTION_DRAFT',
        id: 'SMART_X.REGULAR',
        bundleId: 'b96ccc',
        items: [
          {
            type: 'SIM',
            id: '9054990',
            image: {
              amount: 20,
              unit: 'GB',
            },
            name: 'SIM-kort',
            price: {
              upfront: 0,
            },
            quantity: {
              modifiable: false,
              removable: false,
              value: 1,
            },
          },
          {
            type: 'SERVICE',
            id: 'INSURANCE_SWITCH_2+INSURLS2V',
            image: {
              icon: 'info',
              color: 'purple',
            },
            name: '2 måneder SVITSJ Plussforsikring inkludert',
            price: {
              upfront: 0,
              monthly: 0,
            },
            quantity: {
              modifiable: false,
              removable: true,
              value: 1,
            },
          },
        ],
        name: 'Telia X',
        quantity: {
          modifiable: false,
          removable: false,
          value: 1,
        },
        price: {
          monthly: 579,
        },
        image: {
          icon: 'sim-card',
          color: 'dark-green',
        },
        subtitle: 'ikke tildelt ennå',
      },
    ],
  },
  {
    type: 'ACCESSORY',
    subtype: 'COVER',
    id: '9069780',
    bundleId: null,
    brand: 'dbramante1928',
    brandSlug: 'dbramante1928',
    model: 'Lynge iPhone XR',
    modelSlug: '',
    color: 'Svart',
    image: {
      url:
        '//images.ctfassets.net/iz15t1lxx44v/3WyaCCtf8IoI2Kg8C64ogS/e17cde4649e05754b334322d97042ca3/dbramante1928_lynge_iphone_7_plus_black_svart__3_.png',
    },
    name: 'dbramante1928 Lynge iPhone XR Svart',
    quantity: {
      modifiable: true,
      removable: true,
      value: 1,
    },
    price: {
      upfront: 449,
      originalSalesPrice: 449,
    },
    discount: {
      value: {
        upfront: 0,
      },
      description: '',
    },
    leaseMonths: null,
    isReSwitch: false,
    isWebDeal: false,
  },
  {
    type: 'DELIVERY',
    id: 'PICK_UP_POINT',
    image: {
      icon: 'delivery',
    },
    name: 'Levert til postkontor – 2-4 dagers leveringstid',
    price: {
      upfront: 0,
    },
    quantity: {
      removable: false,
      value: 1,
    },
  },
];

const style = {
  backgroundColor: '#f2f2f2',
  display: 'flex',
  justifyContent: 'center',
};

const Default = () => (
  <Container style={style}>
    <div style={{ width: '30rem' }}>
      <ShoppingCart
        heading="Handlekurv"
        cartItems={cart}
        isAnyCartItemsQuantityModifiable
        totalPriceFirstInvoice={0}
        totalPriceMonthly={500}
        totalPriceUpfront={500}
        onChangeQuantity={() => {}}
        onRemoveItem={() => {}}
        formatPrice={price => `${price},-`}
      />
    </div>
  </Container>
);

export default Default;
