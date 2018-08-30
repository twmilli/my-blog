import React from 'react';
import './portfolio-view.scss';


const projects = [
  { name: 'Noschool.io', img: 'https://s3.amazonaws.com/noschool.io/noschool.jpeg', link: 'https://github.com/twmilli/noschool-nextjs' },
  { name: 'Smitten Kitchen', img: 'https://s3.amazonaws.com/noschool.io/smitten.png', link: 'https://github.com/twmilli/smitten-kitchen' },
  { name: 'Zombie Shooter', img: 'https://s3.amazonaws.com/noschool.io/zombie.png', link: 'https://github.com/twmilli/Zombie-Game' },
  { name: 'Simon', img: 'https://s3.amazonaws.com/noschool.io/simon.png', link: 'http://twmilli.github.io/simon/' },
  { name: 'Invest Tracker', img: 'https://s3.amazonaws.com/noschool.io/invest.png', link: 'https://investracker.herokuapp.com/' },
  { name: 'Open Bar', img: 'https://s3.amazonaws.com/noschool.io/openbar.png', link: 'https://open-bar.herokuapp.com/' },
  { name: 'Meteorite Mapping', img: 'https://s3.amazonaws.com/noschool.io/meteorite.png', link: 'https://twmilli.github.io/Meteorite_Mapping/' },
  { name: 'Heat Visualization', img: 'https://s3.amazonaws.com/noschool.io/heatmap.png', link: 'https://twmilli.github.io/Heat_Map_Vis/' },
];

export default class PortfolioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  selectProject(i) {
    this.setState({ selectedIndex: i });
  }

  render() {
    const projectLinks = projects.map((project, i) => (
      <div
        className="portfolio-project-link"
        onClick={() => this.selectProject(i)}
        style={{ color: this.state.selectedIndex === i ? '#415469' : '#92A1B1' }}
        key={i}
      >
        {project.name}
        <span />
      </div>
    ));
    return (
      <div className="portfolio-component-view-wrapper">
        <div className="portfolio-project-link-container">
          <div className="portfolio-projects">
            {projectLinks}
          </div>
        </div>
        <div className="portfolio-component-image">
          <a href={projects[this.state.selectedIndex].link} target="_blank">
            <img src={projects[this.state.selectedIndex].img} alt="project" />
          </a>
        </div>
      </div>
    );
  }
}
