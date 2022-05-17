import "@karrotframe/tabs/index.css";

import { Tabs } from "@karrotframe/tabs";
import { useState } from "react";
import ProjectInfo from "./pages/ProjectInfo";
import styled from "styled-components";

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
              return <ProjectInfo />;
            },
          },
          {
            key: "63119",
            buttonLabel: "자기소개",
            render() {
              return <div>자기소개</div>;
            },
          },
          {
            key: "46250",
            buttonLabel: "지원동기",
            render() {
              return <div>지원동기</div>;
            },
          },
          {
            key: "21882",
            buttonLabel: "기술스택",
            render() {
              return <div>기술스택</div>;
            },
          },
          {
            key: "64048",
            buttonLabel: "경험",
            render() {
              return <div>경험</div>;
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
