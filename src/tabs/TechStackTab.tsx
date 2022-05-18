import styled from "styled-components";
import TechIcon from "../img/tech.png";

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
  max-width: 700px;
  text-align: left;
  padding: 20px;
  line-height: 32px;
`;

const TechStackTab = () => {
  return (
    <Container>
      <Image src={TechIcon} alt="growth" />
      <h3>기술스택</h3>
      <Paragraph>
        - <b>HTML, CSS</b>: 디자인 가이드를 정확하게 구현할 수 있습니다.
        <br />- <b>SCSS, CSS in JS</b>: SCSS와 styled-components 사용 경험이
        있습니다.
        <br />- <b>JavaScript</b>: ES6+ 문법을 사용할 수 있습니다.
        <br />- <b>TypeScript</b>: type, interface로 react 컴포넌트 prop
        state등을 명세할 수 있습니다.
        <br />- <b>React</b>: 다양한 UI 컴포넌트를 제작하고 적당한 단위로 구현할
        수 있습니다.
        <br />- <b>Redux</b>: redux-thunk와 함께 사용 경험이 수차례 있습니다.
        <br />- <b>Next.js</b>: 간단한 페이지 2~3개를 구현해 본 경험이 있습니다.
        <br />- <b>Storybook</b>: UI 테스팅 용도로 개인 프로젝트에 사용해본
        경험이 한번 있고 능숙하지는 않습니다.
      </Paragraph>
    </Container>
  );
};

export default TechStackTab;
