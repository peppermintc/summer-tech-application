import { ScreenHelmet, useNavigator } from "@karrotframe/navigator";
import styled from "styled-components";
import ResumeImage from "../img/resume.png";
import NotionImage from "../img/notion.png";

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
  return (
    <Container>
      <ScreenHelmet title="Summer Tech " noCloseButton={true} />
      <Button
        onClick={() =>
          window.open(
            "https://www.notion.so/KarrotFrame-Trouble-shooting-33df14af66e04af380f4a6bd1ed0904a",
            "_blank"
          )
        }
      >
        <Icon src={NotionImage} alt="notion" />
        <Text>Karrotframe Trouble Shooting</Text>
      </Button>
      <Button onClick={() => push("/resume")}>
        <Icon src={ResumeImage} alt="resume" />
        <Text>Resume</Text>
      </Button>
    </Container>
  );
};

export default HomeScreen;
