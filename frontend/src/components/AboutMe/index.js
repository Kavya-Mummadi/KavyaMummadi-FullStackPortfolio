import * as FaIcons from "react-icons/fa";

import "./index.css"

const AboutMe = (props) => {

    const { aboutData } = props

    const onClickGetInTouch = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

    }

    const onClickDownloadResume = () => {
        const link = document.createElement("a");
        link.href = `${process.env.PUBLIC_URL}/Kavya_Mummadi.pdf`; // put your resume file in the public folder
        link.download = "Kavya_Mummadi.pdf"; // desired downloaded file name
        link.click();
    }

    return (
        <>
            <div className="about-me-bg">
                <h1 className="about-me-heading"> About <span className="about-me-heading-highlight">Me</span></h1>
                <div className="about-me-self-role-bg">
                    <div className="about-me-myself-content">
                        <h1 className="about-me-role-title"> Tech‑Forward Developer</h1>
                        <p className="about-me-my-description">I’m a passionate Full Stack Developer specializing in the <span className="about-me-description-highlight">MERN stack</span>
                            (MongoDB, Express.js, React, Node.js), with a strong enthusiasm for
                            exploring new technologies—especially hands-on <span className="about-me-description-highlight">AI and Machine Learning</span>.
                            I build responsive, high-performance web applications that are both elegant
                            and maintainable.
                            <br />
                            <br />I enjoy turning ideas into seamless user experiences,
                            solving complex problems, and continuously expanding my technical expertise.
                            My goal is to create impactful solutions while staying at the forefront of emerging
                            tech trends.
                        </p>
                        <div className="about-me-button-container">
                            <button type="button" className="get-int-touch-button" onClick={onClickGetInTouch}>Get In Touch</button>
                            <button type="button" className="download-resume-button" onClick={onClickDownloadResume}>Download Resume</button>
                        </div>
                    </div>
                    <div className="about-me-roles-content">

                        {
                            aboutData.map(each => {

                                const IconComponent = FaIcons[each.roleIcon];
                                return (<div className="about-me-card-role-bg" key={each.id}>
                                    <div className="about-me-role-icon-bg"><IconComponent className="icons" /></div>
                                    <div className="about-me-role-card-text-container">
                                        <h1 className="about-me-role-card-title">{each.roleTitle}</h1>
                                        <p className="about-me-role-card-description">{each.roleDescription}</p>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe