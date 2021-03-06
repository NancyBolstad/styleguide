import React, { useState } from 'react';
import { Subscription } from '@telia/styleguide';

const SubscriptionGroupForm = ({ postToUrl, id }) => (
  <div className="subscription__button-container">
    <form method="post" action={postToUrl}>
      <input type="hidden" name="offeringCode" value={id} />
      <button className="button button--primary">Bestill for en</button>
    </form>
    <a
      className="button button--secondary subscription__group-subs-button"
      href="#/components/subscription#subscription-info"
    >
      Flere sammen?
    </a>
  </div>
);

const features = {
  highlightedFeature: {
    iconName: 'ico_data_freedom',
    name: 'Surf og stream uten å gå tom for data.',
    secondIconName: 'ico_group',
    secondName: 'Flere sammen gir lavere pris',
    secondSize: 'large',
  },
  button: <SubscriptionGroupForm postToUrl="#" id="x" />,
};

const ShowingTwoFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="Telia"
      id="x"
      dataAmount="X"
      dataUnit="GB"
      price={579}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      allPricesLink={{
        url: '#',
        text: 'Se alle priser',
      }}
      color="black"
      size="medium"
      features={features}
      isShowingFeatures
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
      scrollToOnOpen
    >
      <div className="rich-text">
        <h2 className="heading heading--level-2">Om abonnement</h2>
        <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
        <p>
          Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world
          has never seen. Does everybody know that pig named Lorem Ipsum? She&apos;s a disgusting pig, right?
        </p>
        <h3 className="heading heading--level-3">Data</h3>
        <p>
          I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, &quot;I
          can&apos;t do it. I just can&apos;t do it. It&apos;s inappropriate. It&apos;s not nice.&quot; When other
          websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have
          lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
          misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem
          card.
        </p>
        <h3 className="heading heading--level-3">Utland</h3>
        <p>
          We have so many things that we have to do better... and certainly ipsum is one of them. Despite the constant
          negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with
          other websites.
        </p>
        <ul className="list list--links">
          <li className="list__item">
            <a className="list__link" href="#" target="_self">
              Last ned abonnementsvilkår
            </a>
          </li>
        </ul>
      </div>
    </Subscription>
  );
};

export default ShowingTwoFeatures;
