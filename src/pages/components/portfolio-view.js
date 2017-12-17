import React from 'react';
import Img from 'gatsby-image';
import smitten from '../../img/portfolio/smitten.png';
import zombie from '../../img/portfolio/zombie.png';
import simon from '../../img/portfolio/simon.png';
import invest from '../../img/portfolio/invest.png';
import voting from '../../img/portfolio/voting.png';
import openbar from '../../img/portfolio/openbar.png';
import meteorite from '../../img/portfolio/meteorite.png';
import heat from '../../img/portfolio/heatmap.png';
import './portfolio-view.scss';


const projects = [
    {name: 'Smitten Kitchen', img: smitten, link: 'https://github.com/twmilli/smitten-kitchen'},
    {name: 'Zombie Shooter', img: zombie, link: "https://github.com/twmilli/Zombie-Game"},
    {name: 'Simon', img: simon, link: "http://twmilli.github.io/simon/"},
    {name: 'Invest Tracker', img: invest, link: "https://investracker.herokuapp.com/"},
    {name: 'Project Vote', img: voting, link: "http://project-vote.surge.sh/"},
    {name: 'Open Bar', img: openbar, link: "https://open-bar.herokuapp.com/"},
    {name: 'Meteorite Mapping', img: meteorite, link: "https://twmilli.github.io/Meteorite_Mapping/"},
    {name: 'Heat Visualization', img: heat, link: "https://twmilli.github.io/Heat_Map_Vis/"},
]

export default class PortfolioView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0};
    }

    selectProject(i){
        this.setState({ selectedIndex: i });
    }

    render() {
        const projectLinks = projects.map((project, i) => (
            <div className="portfolio-project-link"
            onClick = {() => this.selectProject(i)}
            style = {{color: this.state.selectedIndex === i ? '#415469' : '#92A1B1' }}
            key={i}>
                {project.name}
                <span></span>
            </div>
        ));
        return(
            <div className="portfolio-component-view-wrapper">
                <div className="portfolio-project-link-container">
                    <div className="portfolio-projects">
                        {projectLinks}
                    </div>
                </div>
                <div className="portfolio-component-image">
                    <a href={projects[this.state.selectedIndex].link} target="_blank">
                        <img src={projects[this.state.selectedIndex].img} alt="project"/>
                    </a>
                </div>
            </div>
        )
    }
}