import React from 'react';
import PortfolioView from './components/portfolio-view.js';
import { Github } from 'react-feather';
import './portfolio.scss';
import resume from './taylor-milliman-resume.pdf';
const Portfolio = () => {
    return(
        <div className="portfolio-container">
            <h1>Projects</h1>
            <PortfolioView/>
            <div className="portfolio-link-wrapper">
                <a
                href="https://github.com/twmilli"
                className='portfolio-button-link github'
                target="_blank">
                <Github />
                Visit my Github
                </a>
            </div>
            <div className="portfolio-link-wrapper">
                <a
                className='portfolio-button-link'
                href={resume}
                download="taylor-milliman-resume.pdf">
                Download my Resume
                </a>
            </div>
            <div id="portfolio-end-text">
                Let's build something cool together :)
            </div>
        </div>
    );
}

export default Portfolio;