import styled from "styled-components";
import HelloIcon from "../img/hello.png";

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

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  &:visited {
    color: blue;
  }
`;

const AboutMeTab = () => {
  return (
    <Container>
      <Image src={HelloIcon} alt="hello" />
      <h3>자기소개</h3>
      <Paragraph>안녕하세요 UI 개발을 좋아하는 개발자 박하민입니다.</Paragraph>
      <Paragraph>
        대학 졸업 후부터 React를 공부하며 웹 프론트엔드 분야에 흥미를
        가지게되었습니다.
      </Paragraph>
      <Paragraph>
        최근에는 일반 사용자가 주로 이용하는 모바일 웹뷰 개발에 흥미가 많이
        생겼고 해당 분야 업무를 하고 싶다는 생각을 하고있습니다.
      </Paragraph>
      <Paragraph>
        알아보기 쉬운 코드 작성을 위해 네이밍에 항상 심사숙고하고 있습니다.
      </Paragraph>
      <Footer>
        <Link
          href="https://github.com/peppermintc"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>
        <Link
          href="https://velog.io/@peppermint"
          target="_blank"
          rel="noreferrer"
        >
          Velog
        </Link>
      </Footer>
    </Container>
  );
};

export default AboutMeTab;
