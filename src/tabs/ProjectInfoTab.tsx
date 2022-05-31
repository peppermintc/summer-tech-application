import styled from "styled-components";
import CarrotsImage from "../img/carrots.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const Image = styled.img`
  width: 63px;
  margin-bottom: 30px;
`;

const Paragraph = styled.div`
  padding: 20px;
`;

const ProjectInfoTab = () => {
  return (
    <Container>
      <Image src={CarrotsImage} alt="carrots" />
      <h3>페이지 소개</h3>
      <Paragraph>
        <b>Karrotframe navigator</b>와 <b>Karrotframe tabs</b>를 사용하여
        프로젝트 만들었습니다.
      </Paragraph>
      <Paragraph>
        navigator를 사용하면서 경험한 내용을 Karrotframe Trouble Shooting 노션
        페이지에 간략하게 적었습니다.
      </Paragraph>
      <Paragraph>
        모바일 웹뷰 개발에 karrotframe을 사용한다면 큰 도움이 될 것 같다고
        느꼈습니다.
      </Paragraph>
      <h4>사용 기술 스택</h4>
      <Paragraph>
        CRA TypeScript template, karrotframe/navigator, karrotframe/tabs, github
        pages, styled-components, react-router
      </Paragraph>
    </Container>
  );
};

export default ProjectInfoTab;
