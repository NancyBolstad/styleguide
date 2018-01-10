import React from 'react';
import { connect } from 'react-redux';

import Color from '../components/Color';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';

const HomePage = ({ colors }) =>
    <div>
        <Header
            iconUrl="/public/ico_code-2.svg"
            runningTitle="Greetings, Earthlings!"
            pageTitle="Telia Norge Styleguide"
            withMask={true}>
            <p>
                This is a not-yet-ready-for-production, work-in-progress, pre-alpha version of the new Styleguide. You can look, but don't touch (yet).
            </p>
            <p>
                When we roll this out to production, you will be the first to know. Until then, take a look around, and if you have any questions or
                suggestions we are available on the #styleguide channel on Slack. Peace.
            </p>
        </Header>

        <div className="container container--small container--extra-padding-top">
            <Heading level={2} text="Color Palette" />
            <p className="paragraph">The color palette below was taken from the Telia Company design document (TODO: source) and shows the recommended font color to give the correct contrast.</p>
        </div>
        <div className="sg-colors-wrapper container container--medium">
            {_.map(colors, (color, name) => <Color key={name} name={name} {...color} />)}
        </div>

        <div className="container container--small">
            <Heading level={2} text="Typography" />
            <ul>
                <li><strong>Heading level one</strong> should be used once per page. And is the main heading of the page. Due to accessibility and readability this is the only heading that use the pebble font.</li>
                <li>The content of a page is usually divided into sections, and <strong>heading level two</strong> should be used as the heading of these.</li>
                <li><strong>Heading level three</strong> and <strong>heading level four</strong> is used when you need to divide content in even smaller sections.</li>
            </ul>

            <p className="paragraph">These are the heading levels defined in this styleguide: </p>
            {_.map([1, 2, 3, 4], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>

        <div className="container container--small container--extra-margin-bottom">
            <Heading level={2} text="Sizes and units (px, em, rem)" />
            <p className="paragraph">When writing CSS, the styleguide uses these rules:</p>
            <ul>
                <li>Sizes and spacing should be in REM's.</li>
                <li>Media queries should be in EM's.</li>
                <li>Pixels should be avoided, where possible.</li>
            </ul>
            <p className="paragraph">Source: <a className="link" href="http://engageinteractive.co.uk/blog/em-vs-rem-vs-px">EM vs REM vs PX – Why you shouldn't “just use pixels”</a></p>
        </div>
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors
});

export default connect(mapStateToProps)(HomePage);