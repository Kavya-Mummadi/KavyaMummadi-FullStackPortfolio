import { Component } from "react"

import "./index.css"

class Skills extends Component {
    state = {
        activeSkillTab: 0,
        skillsList: []
    }

    onChangeSkillType = (id) => {
        this.setState({ activeSkillTab: id })
    }

    render() {
        const { skillCategoriesList, skillsList } = this.props
        const { activeSkillTab } = this.state
        const categoriesList = [{ id: 0, categoryName: "All" }, ...skillCategoriesList];
        const displayedSkills =
            activeSkillTab === 0
                ? skillsList
                : skillsList.filter((skill) => skill.categoryId === activeSkillTab);
        const skillsToRender = displayedSkills || []; // fallback

        return (
            <div className="skills-bg">
                <h1 className="skills-heading">
                    My <span className="skills-heading-highlight">Skills</span>
                </h1>
                <ul className="skills-title-container">
                    {categoriesList.map(each => (
                        <li key={each.id}>
                            <button
                                type="button"
                                className={`skills-button ${activeSkillTab === each.id ? "activetab-highlight" : ""}`}
                                onClick={() => this.onChangeSkillType(each.id)}
                            >
                                {each.categoryName}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className="skills-display-container">
                    {skillsToRender.map((skill) => (
                        <li key={skill.id} className="skill-card">
                            <img src={skill.skillImage} alt={skill.skillName} className="skill-image" />
                            <h1 className="skills-name-text">{skill.skillName}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Skills