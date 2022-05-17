import "@karrotframe/tabs/index.css";

import { Tabs } from "@karrotframe/tabs";
import { useState } from "react";
import ProjectInfoPage from "./pages/ProjectInfoPage";
import styled from "styled-components";
import AboutMePage from "./pages/AboutMePage";
import MotivePage from "./pages/MotivePage";
import TechStackPage from "./pages/TechStackPage";
import ExperiencePage from "./pages/ExperiencePage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const [activeKey, setActiveKey] = useState<string>("44589");

  return (
    <Container>
      <Tabs
        tabs={[
          {
            key: "44589",
            buttonLabel: "프로젝트",
            render() {
              return <ProjectInfoPage />;
            },
          },
          {
            key: "63119",
            buttonLabel: "자기소개",
            render() {
              return <AboutMePage />;
            },
          },
          {
            key: "46250",
            buttonLabel: "지원동기",
            render() {
              return <MotivePage />;
            },
          },
          {
            key: "21882",
            buttonLabel: "기술스택",
            render() {
              return <TechStackPage />;
            },
          },
          {
            key: "64048",
            buttonLabel: "경험",
            render() {
              return <ExperiencePage />;
            },
          },
        ]}
        activeTabKey={activeKey}
        onTabChange={(key) => setActiveKey(key)}
      />
    </Container>
  );
};

export default App;
