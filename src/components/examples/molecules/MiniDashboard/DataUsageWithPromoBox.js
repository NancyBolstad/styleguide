import React from 'react';
import { SvgIcon, MiniDashboard } from '@telia/styleguide';

const MiniDashboardDataUsageWithPromoBox = () => (
  <MiniDashboard
    headingText="Joe Bloggs"
    links={[
      { text: 'Faktura', href: '#', notifications: 1 },
      { text: 'Mer fra Min Side', href: '#' },
      { text: 'Kjøp mer data', href: '#' },
    ]}
  >
    <MiniDashboard.StatWithLabelWidget
      statisticText="7 GB"
      statisticLabel=" igjen av 10 GB. Påfylles om 5 dager"
      statisticHref="/min-side"
      progressBarRemaining={7}
      progressBarTotal={10}
    />
    <MiniDashboard.ExtraPromoLine>
      <SvgIcon iconName="ico_databoost" color="black" />
      <p className="paragraph">
        There is also some{' '}
        <a href="#" className="link">
          awesome thing
        </a>{' '}
        here!
      </p>
    </MiniDashboard.ExtraPromoLine>
  </MiniDashboard>
);

export default MiniDashboardDataUsageWithPromoBox;
