import "./index.css"

const Home = () => {

    const onViewWork = () => {
        const section = document.getElementById("projects");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // 🔥 smooth scroll to projects
        }
    };

    return (
        <>
            <div className="home">
                <div className="home-bg">
                    <div className="Portfolio-picture">
                        <img src="https://res.cloudinary.com/dmxvdaino/image/upload/v1756734104/kavya_porfolio_tit3om.jpg" alt="kavya-portfolio" className="portfolio-image" />
                    </div>
                    <div className="porfolio-intro-text-container">
                        <h1 className="portfolio-welcome-text">Hi, I’m <span className="porfolio-name-highlight">Kavya Mummadi</span></h1>
                        <p className="portfolio-intro-para">Passionate about <span className="portfolio-intro-para-highlight">AI </span>and driven by a love for learning,
                            I have expertise in the <span className="portfolio-intro-para-highlight">MERN stack</span> (MongoDB, Express.js, React, Node.js).
                            I build scalable, responsive, and high-performance web applications by integrating
                            front-end and back-end technologies seamlessly.
                        </p>
                        <button type="button" className="home-view-work-button" onClick={onViewWork}>View My Work</button>
                    </div>
                </div>
                <div className="scroll-indicator-container">
                    <p>Scroll Down</p>
                    <span className="arrow">&#8595;</span>
                </div>
            </div>
        </>
    )
}

export default Home