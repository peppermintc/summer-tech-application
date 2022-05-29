import { ScreenHelmet, useNavigator } from "@karrotframe/navigator";
import styled from "styled-components";
import ResumeImage from "../img/resume.png";
import NotionImage from "../img/notion.png";
import { useEffect, useState } from "react";

const NOTION_URL =
  "https://fascinated-whippet-646.notion.site/KarrotFrame-Trouble-shooting-0d67a9d394254dbd9d57425b20e4d3c8";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 100px;
`;

const Text = styled.span`
  width: 160px;
  font-weight: 700;
  font-size: 18px;
`;

const HomeScreen = () => {
  const { push } = useNavigator();
  const [test, setTest] = useState("0");

  useEffect(() => console.log(test), [test]);

  return (
    <Container>
      <ScreenHelmet title="Summer Tech " noCloseButton={true} />
      <Button onClick={() => window.open(NOTION_URL, "_blank")}>
        <Icon src={NotionImage} alt="notion" />
        <Text>Karrotframe Trouble Shooting</Text>
      </Button>
      <Button onClick={() => push("/resume")}>
        <Icon src={ResumeImage} alt="resume" />
        <Text>Resume</Text>
      </Button>
      <Button
        onClick={() => {
          console.log("1");
          setTest("2");
          setTimeout(() => console.log("3"), 0);
        }}
      >
        <Text>test</Text>
      </Button>
    </Container>
  );
};

export default HomeScreen;
