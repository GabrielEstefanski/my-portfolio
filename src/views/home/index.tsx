import React from "react";
import Header from "../../components/Header";
import PreviewField from "./components/PreviewField";
import ApresentationField from "./components/ApresentationField";
import SkillsField from "./components/SkillsField";
import ProjectsField from "./components/ProjectsField";
import WorkExperienceField from "./components/WorkExperienceField";
import ContactField from "./components/ContactField";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <PreviewField/>
      <ApresentationField/>
      <SkillsField/>
      <ProjectsField/>
      <WorkExperienceField/>
      <ContactField/>
      <Footer />
    </>
  )
}