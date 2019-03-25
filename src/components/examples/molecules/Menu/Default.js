import React from 'react';
import Menu from '../../../../../component-lib/src/molecules/Menu/Menu';

/*Status: In progress*/

const menuLinks = [
    {
        heading: 'Privat',
        links: [
            { text: 'Mobiler og tilbehør', subLinks: [
                { text: 'Mobiltelefoner', url: '/' },
                { text: 'Smartklokker', url: '/' },
                { text: 'Nettbrett', url: '/' },
                { text: 'Tilbehør', url: '/' }
            ] },
            { text: 'Mobilabonnement', url: '/' },
            { text: 'Mobilt bredbånd', url: '/' },
            { text: 'Kontakt', url: '/' }
        ],
    },
    {
        heading: 'Bedrift',
        links: [
            { text: 'Tjenester', url: '/' },
            { text: 'Digitalisering', url: '/' },
            { text: 'Nettbutikk', url: '/' },
            { text: 'Kundeservice', url: '/' }
        ]
    }
];

const Default = () => (
    <Menu
        activeIndex={0}
        menuLinks={menuLinks}
        logoImageDesktopPath={require('../../../../assets/images/logo/logo.svg')}
        onSearchSubmit={(e, searchQuery) => {} } />
);

export default Default;