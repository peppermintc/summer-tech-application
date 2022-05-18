import { ScreenHelmet } from "@karrotframe/navigator";
import { Tabs } from "@karrotframe/tabs";
import { useState } from "react";
import styled from "styled-components";
import AboutMeTab from "../tabs/AboutMeTab";
import ExperienceTab from "../tabs/ExperienceTab";
import MotiveTab from "../tabs/MotiveTab";
import ProjectInfoTab from "../tabs/ProjectInfoTab";
import TechStackTab from "../tabs/TechStackTab";

const Container = styled.div`
  height: 100%;
`;

const ResumeScreen = () => {
  const [activeKey, setActiveKey] = useState<string>("44589");

  return (
    <Container>
      <ScreenHelmet noCloseButton={true} />
      <Tabs
        tabs={[
          {
            key: "44589",
            buttonLabel: "프로젝트",
            render() {
              return <ProjectInfoTab />;
            },
          },
          {
            key: "63119",
            buttonLabel: "자기소개",
            render() {
              return <AboutMeTab />;
            },
          },
          {
            key: "46250",
            buttonLabel: "지원동기",
            render() {
              return <MotiveTab />;
            },
          },
          {
            key: "21882",
            buttonLabel: "기술스택",
            render() {
              return <TechStackTab />;
            },
          },
          {
            key: "64048",
            buttonLabel: "경험",
            render() {
              return <ExperienceTab />;
            },
          },
        ]}
        activeTabKey={activeKey}
        onTabChange={(key) => setActiveKey(key)}
      />
    </Container>
  );
};

export default ResumeScreen;
