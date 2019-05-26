class App extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <About />
                <Skills />
                <Projects />
            </div>
        );
    }
}

class Intro extends React.Component {
    render() {
        return (
            <div id="intro">
                <div className="title-container">
                    <h1 id="name">Hi, I'm Daniel Xu</h1>
                    <h2>Web Developer. Web Designer. CS Major.</h2>
                </div>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h2>About me</h2>
                    <div className="row profile">
                        <div className="col-md-3">
                            <img className="img-responsive img-fluid rounded-circle" src={"assets/img/headshot.jpg"} alt="profile picture" />
                        </div>
                        <div className="col-md-9 vertical-center">
                            <div className="profile-description">
                                <p>
                                    I am a second-year student studying Computer Science at the&nbsp;
                                <a aria-label="University of Waterloo" href="https://cs.uwaterloo.ca/" target="_blank">University of Waterloo</a>.
                            </p>
                                <p>
                                    I'm interested in the future of development and technology. I love learning tools and
                                    plugins that increase efficiency and help accentuate your brand. My experience as both a
                                    developer and a designer is a powerful combination which allows me to have a strong
                                    understanding of UI/UX.
                            </p>
                                <p>
                                    My previous positions include .NET Developer at&nbsp;
                                    <a aria-label="Phoenix Software Inc." href="https://www.phoenixsoftware.ca/" target="_blank" rel="noopener">Phoenix Software Inc.</a>
                                    &nbsp;and Web Designer at&nbsp;
                                    <a aria-label="GryphTech Inc." href="http://www.gryphtech.com/" target="_blank" rel="noopener">GryphTech Inc.</a>
                                </p>
                                <a target="_blank" href="https://www.linkedin.com/in/danielxu7/" className="fab fa-linkedin-in link"></a>
                                <a target="_blank" href="https://www.github.com/danielxu7/" className="fab fa-github link"></a>
                                <a target="_blank" href="mailto:d68xu@edu.uwaterloo.ca" className="fas fa-envelope link"></a>
                                <a target="_blank" href="resume.pdf" className="far fa-file-alt link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Skills extends React.Component {
    render() {
        return (
            <section id="skills">
                <div className="container">
                    <h2>My skills</h2>
                    <div className="row row-spacing">
                        <div className="offset-md-1 col-md-3">
                            <span className="skills-type">Languages:</span>
                        </div>
                        <div className="col-md-8">
                            <ul className="skills-list languages">
                                <li>
                                    <span>JavaScript</span>
                                </li>
                                <li>
                                    <span>C#</span>
                                </li>
                                <li>
                                    <span>HTML5</span>
                                </li>
                                <li>
                                    <span>CSS3</span>
                                </li>
                                <li>
                                    <span>SQL</span>
                                </li>
                                <li>
                                    <span>C++</span>
                                </li>
                                <li>
                                    <span>C</span>
                                </li>
                                <li>
                                    <span>Java</span>
                                </li>
                                <li>
                                    <span>Bash</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-1 col-md-3">
                            <span className="skills-type">Frameworks and Technologies:</span>
                        </div>
                        <div className="col-md-8">
                            <ul className="skills-list frameworks">
                                <li>
                                    <span>ASP.NET</span>
                                </li>
                                <li>
                                    <span>.NET</span>
                                </li>
                                <li>
                                    <span>jQuery</span>
                                </li>
                                <li>
                                    <span>Bootstrap</span>
                                </li>
                                <li>
                                    <span>React.js</span>
                                </li>
                                <li>
                                    <span>Node.js</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row row-spacing">
                        <div className="offset-md-1 col-md-11">
                            <p>In the past two years, I've accumulated a strong set of skills through various projects and work experiences.
                                I'm constantly learning languages, frameworks and technologies to keep up with the latest stack.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Projects extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="card-deck">
                        <div className="card col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Ratings Project</h5>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel"
                                    data-interval="3000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={"assets/img/rating.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={"assets/img/rating-popup.jpg"} alt="Second slide" />
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">Visual indicators describing property listing completion ratings.</p>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Website</h5>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={"assets/img/website-home.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={"assets/img/website-about.jpg"} alt="Second slide" />
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">My personal website showcasing my skills and projects.</p>
                            </div>
                            <div className="card-footer">
                                <a target="_blank" href="https://github.com/danielxu7/danielxu7.github.io" className="fab fa-github link"></a>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">GryphTech Website</h5>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={"assets/img/gryphtech-home.jpg"} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={"assets/img/gryphtech-contact.jpg"} alt="Second slide" />
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">A responsive and mobile friendly website with a focus on UI/UX for GryphTech Inc.</p>
                            </div>
                            <div className="card-footer">
                                <a target="_blank" href="http://gryphtech.com/" className="fas fa-globe-americas link"></a>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Crypto Collective</h5>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={"assets/img/crypto-about.jpg"} alt="First slide" />
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">Web application predicting cryptocurrency trends based on live tweets on Twitter.</p>
                            </div>
                            <div className="card-footer">
                                <a target="_blank" href="https://github.com/danielxu7/CryptoCollective" className="fab fa-github link"></a>
                            </div>
                        </div>
                        <div className="card col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Hearts</h5>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={"assets/img/hearts.jpg"} alt="First slide" />
                                        </div>
                                    </div>
                                </div>
                                <p className="card-text">An object oriented implementation of the classic trick-taking card game
                                Hearts, featuring strong NPCs and relaxing visuals.</p>
                            </div>
                            <div className="card-footer">
                                <a target="_blank" href="https://github.com/danielxu7/CryptoCollective" className="fab fa-github link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
