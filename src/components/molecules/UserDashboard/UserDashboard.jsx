import React from 'react';

import ProgressBar from '../../atoms/ProgressBar/ProgressBar';

/**
 * Status: *in progress*.
 *
 * A small dashboard to be placed on top of the start page for the logged in user
 * to view a summary of data usage and to be able to navigate quickly to the Invoice page
 * and "Min side".
 *
 **/
const UserDashboard  = ({name, dataAmountLeft, dataAmountLeftText, totalDataAmount, totalDataAmountText, refillInDays, invoiceLink, unreadInvoiceCount, minsideLink}) =>
    <section className="user-dashboard container container--large container--no-padding container--no-margin">
        <div className="user-dashboard__container">
            <h2 className="user-dashboard__name heading heading--level-2">{name}</h2>
            <span className="user-dashboard__data-amount-left">{dataAmountLeftText} </span>
            <span className="user-dashboard__data-amount-info">igjen av {totalDataAmountText}. Påfylles om {refillInDays} dager</span>
            <ProgressBar value={dataAmountLeft} min={0} max={totalDataAmount}/>
        </div>
        <ul className="user-dashboard__links list list--links">
            <li className="user-dashboard__link list__item">
                <a className="list__link" href={invoiceLink} target="_self">Faktura</a>
                <span className="user-dashboard__unread-invoice-count">{unreadInvoiceCount}</span>
            </li>
            <li className="user-dashboard__link list__item">
                <a className="list__link" href={minsideLink} target="_self">Mer fra min side</a>
            </li>
        </ul>
    </section>;

export default UserDashboard;