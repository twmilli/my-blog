import React from 'react';
import PortfolioView from './components/portfolio-view.js';
import { Github } from 'react-feather';
import './portfolio.scss';
const Portfolio = () => {
    return(
        <div className="portfolio-container">
            <h1>Projects</h1>
            <PortfolioView/>
            <div className="portfolio-link-wrapper">
                <a
                href="https://github.com/twmilli"
                className='portfolio-button-link'
                target="_blank">
                <Github />
                Visit my Github
                </a>
            </div>
            <div className="portfolio-link-wrapper">
                <a
                className='portfolio-button-link'
                href="/files/resume.pdf"
                download="resume.pdf">
                Download my Resume
                </a>
            </div>
        </div>
    );
}

export default Portfolio;