import { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  state = {
    headerItemsList: [],
    aboutMeRolesList: [],
    projectsList: [],
    experienceList: [],
    skillCategoryList: [],
    contactInfoList: [],
    socialMediaList: []
  }

  componentDidMount() {
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    };
    this.getPortfolioData()
  }

  getPortfolioData = async () => {
    const response = await fetch("https://kavya-mummadi-portfolio.onrender.com/")
    const data = await response.json()

    const headerItems = data.headerItems.map(eachItem => ({
      id: eachItem.id,
      label: eachItem.label,
      path: eachItem.path
    }))

    const updatedAboutMeRolesData = data.aboutmeRoles.map(eachRole => ({
      id: eachRole.id,
      roleTitle: eachRole.role_title,
      roleDescription: eachRole.role_description,
      roleIcon: eachRole.role_icon
    }))

    const updatedProjectsData = data.projects.map(eachProject => ({
      id: eachProject.id,
      title: eachProject.title,
      description: eachProject.description,
      technologiesUsed: eachProject.technologies_used,
      projectLiveUrl: eachProject.project_live_url,
      githubUrl: eachProject.github_url,
      projectImageUrl: eachProject.project_image_url
    }))

    const updatedExperienceData = data.experience.map(eachExperience => ({
      id: eachExperience.id,
      companyName: eachExperience.company_name,
      role: eachExperience.role,
      duration: eachExperience.duration,
      roleDescription: eachExperience.role_description,
      certificateUrl: eachExperience.certificate_url
    }))

    const updatedSkillCategoryList = data.skillCategories.map(eachCategory => ({
      id: eachCategory.id,
      categoryName: eachCategory.category_name
    }))

    const updatedSkillsList = data.skills.map(eachSkill => ({
      id: eachSkill.id,
      skillName: eachSkill.skill_name,
      skillImage: eachSkill.skill_image,
      categoryId: eachSkill.category_id
    }))

    const updatedContactInfoList = data.getInTouch.contactInfo.map(each => ({
      id: each.id,
      iconName: each.icon_name,
      label: each.label,
      labelValue: each.label_value
    }));

    const updatedSocialMediaIconsList = data.getInTouch.socialMedia.map(each => ({
      id: each.id,
      iconName: each.icon_name,
      iconPath: each.icon_path
    }));

    //updating state
    this.setState({
      headerItemsList: headerItems,
      aboutMeRolesList: updatedAboutMeRolesData,
      projectsList: updatedProjectsData,
      experienceList: updatedExperienceData,
      skillCategoryList: updatedSkillCategoryList,
      skillsList: updatedSkillsList,
      contactInfoList: updatedContactInfoList,
      socialMediaList: updatedSocialMediaIconsList
    })

  }

  render() {
    const { headerItemsList, aboutMeRolesList, projectsList, experienceList, skillCategoryList, skillsList, contactInfoList, socialMediaList } = this.state

    return (
      <div>
        <Header headerItems={headerItemsList} />
        <div>
          <section id="home"><Home /></section>
          <section id="about-me"><AboutMe aboutData={aboutMeRolesList} /></section>
          <section id="skills"><Skills skillCategoriesList={skillCategoryList} skillsList={skillsList} /></section>
          <section id="projects"><Projects projectsData={projectsList} /></section>
          <section id="experience"><Experience experienceData={experienceList} /></section>
          <section id="contact"><Contact contactDetails={contactInfoList} socialMediaDetails={socialMediaList} /></section>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
