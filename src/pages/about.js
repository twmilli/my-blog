import React from 'react';
import './about.scss';
import Header from '../components/header.js';
import Link from 'gatsby-link';

const About = () => (
    <div className="about-page-container">
        <div className="about-page-banner">
            <Header />
        </div>
        <div className="about-cover">
            <h2>About me</h2>
            <p>Hi, I'm Taylor.  I like pesto, podcasts, and programming (and alliteration).</p>
            <section>
                <h3>Career</h3>
                <p>
                    When I left for college, I had know idea what I wanted to do with my life.
                    I ended up falling in love with the tech industry, learned to code, and landed an internship at <a href="https://www.braintreepayments.com"> Braintree</a>. 
                    Next year I'll be joining <a href="https://www.thumbtack.com/">Thumbtack</a> to work as a software engineer in the heart of San Francisco.  We're building a next-generation marketplace for home services.
                </p>
            </section>
            <section>
                <h3>Writing</h3>
                <p>In 2016, I published my first piece on <a href="https://medium.com/@twm013">medium</a> documenting my journey of learning to code. The <a href="https://medium.freecodecamp.org/how-doing-something-i-love-landed-me-a-top-tier-tech-internship-fe78d8b74e48">article</a> received over 2.6k claps on medium and was republished by the <a href="http://observer.com/2016/12/how-i-landed-a-top-tier-tech-internship-by-doing-something-i-love/">Observer</a>.
                    Since then I've fallen in love with writing as a way to think more clearly, connect with others, and learn from mistakes.  In the process, I've picked up over 120k views on medium.
                    Recently I've started freelance writing for <a href="https://blog.logrocket.com/">Log Rocket</a>.  More on that to come soon :).
                </p>
            </section>
            <section>
                <h3>School</h3>
                <p>
                    I'm currrently a senior at Bucknell University where I study computer science and chemical engineering.
                    Outside of class, I've worked several semesters as a TA in the Computer Science department for classes taught primarily in Python.  
                </p>
            </section>
            <section>
                <h3>Life</h3>
                <p>
                    When I'm not in class, I'm focused on being present, cooking delicious food, and writing more regularly. Confession: I love to indulge in an episode of Chef's Table in my free time.
                    I am also an avid reader. Here's a list of <Link to='/reading'>books</Link> that I've read or am currently reading. If you have any suggestions of books to add to my reading list, feel free to send them my way.
                </p>
                <p>
                    I have no idea what the next few years will bring, but I hope to stay passionate about whatever I'm working on, and hopefully make the world just a little bit better in the process.
                    If you want to contact me, feel free to email me at twm013@bucknell.edu.
                </p>
            </section>
        </div>
    </div>
);

export default About;