import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { preventDefault } from '../../utils';
import MenuOverlay from './MenuOverlay';
import MenuTopPanel from './MenuTopPanel';
import MenuBar from './MenuBar';
import Tabs from '../../molecules/Tabs/Tabs';

/**
 * Status: *Deprecated*
 * Category: PageElements
 *
 * This component will be replaces with the Menu-component
 */
const PageMenu = ({
  menuLinks = [],
  menuId,
  isExpanded,
  onClickClose,
  searchUrl,
  fixedPosition,
  isLoggedIn,
  menuSelectedTabIndex,
  onTabSelect,
  logoutLink = '#',
  onLogoutClick,
}) => (
  <div>
    <div
      className={classNames('page-menu', { 'page-menu--fixed': fixedPosition }, { 'page-menu--expanded': isExpanded })}
      id={menuId || 'page-header-menu'}
    >
      <MenuTopPanel isExpanded={isExpanded} menuId={menuId} onClickClose={onClickClose} searchUrl={searchUrl} />
      <nav aria-label="Main menu">
        <div className="page-menu__selection">
          <Tabs
            uniqueId="menu-tabs"
            onSelect={onTabSelect}
            selectedIndex={menuSelectedTabIndex}
            skipPanelRendering={true}
            noMargin={true}
            compact={true}
          >
            {menuLinks.map(menuLink => (
              <Tabs.Tab key={menuLink.heading} heading={menuLink.heading} />
            ))}
          </Tabs>
        </div>

        {menuLinks.map((menuLink, i) => (
          <Tabs.TabPanel
            key={menuLink.heading}
            index={i}
            uniqueId="separated-tabs"
            isSelected={menuSelectedTabIndex === i}
          >
            <div
              className={classNames('page-menu__content', { 'page-menu__content--empty': !menuLink.contentAboveItems })}
              dangerouslySetInnerHTML={{ __html: menuLink.contentAboveItems }}
            />
            <MenuBar ariaLabel="innlogget brukermeny" items={menuLink.loggedInLinks} isEmphasised />
            <MenuBar items={menuLink.loggedOutLinks} />
          </Tabs.TabPanel>
        ))}

        {isLoggedIn && (
          <ul className="page-menu__item-list">
            <li className="page-menu__item">
              <div className="page-menu__item-link">
                <a className="page-menu__log-out-button link" href={logoutLink} onClick={preventDefault(onLogoutClick)}>
                  Logg ut
                </a>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </div>
    {fixedPosition && <MenuOverlay onClick={onClickClose} active={isExpanded} />}
  </div>
);
PageMenu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      loggedInLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
      loggedOutLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
          icon: PropTypes.string,
        })
      ),
    })
  ),
  menuId: PropTypes.string,
  isExpanded: PropTypes.bool,
  onClickClose: PropTypes.func,
  searchUrl: PropTypes.string,
  logoutLink: PropTypes.string,
  fixedPosition: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  menuSelectedTabIndex: PropTypes.number,
  onTabSelect: PropTypes.func,
};

export default PageMenu;
