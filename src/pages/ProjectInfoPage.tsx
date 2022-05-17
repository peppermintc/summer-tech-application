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
  @media (max-width: 768px) {
    margin-top: 130px;
  }
`;

const Paragraph = styled.div`
  padding: 20px;
`;

const ProjectInfoPage = () => {
  return (
    <Container>
      <Image src={CarrotsImage} alt="carrots" />
      <h3>프로젝트 소개</h3>
      <Paragraph>
        <b>Karrotframe tabs</b>를 이용하여 프로젝트를 만들어 보았습니다.
      </Paragraph>
      <Paragraph>
        <b>Karrotframe navigator</b>도 사용해보려 시도하였으나 잘 사용이 되지
        않아서 tabs를 이용하게 되었습니다.
      </Paragraph>
      <Paragraph>
        navigator를 사용해보면서 경험한 과정을 README에 간략하게 적었습니다.
        시간이 부족해서 깊게 파고들지는 않았지만 더 깊게 파고든다면 재미있고
        유익한 경험이 될 것 같습니다!
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

export default ProjectInfoPage;
