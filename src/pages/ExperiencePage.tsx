import styled from "styled-components";
import Preview1 from "../img/preview1.png";
import Preview2 from "../img/preview2.png";
import Preview3 from "../img/preview3.png";
import Preview4 from "../img/preview4.png";
import Preview5 from "../img/preview5.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Paragraph = styled.div`
  padding: 20px;
`;

const Preview = styled.img`
  width: 50%;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  &:visited {
    color: blue;
  }
`;

const ExperiencePage = () => {
  return (
    <Container>
      <h3>경험</h3>
      <Preview src={Preview1} alt="experience" />
      <Paragraph>모바일 웹뷰용 커뮤니티 구현</Paragraph>
      <Preview src={Preview2} alt="experience" />
      <Paragraph>모바일 웹뷰용 뉴스 필터링 구현</Paragraph>
      <Preview src={Preview3} alt="experience" />
      <Paragraph>가구 커머스 과제</Paragraph>
      <Preview src={Preview4} alt="experience" />
      <Link
        href="https://nbahighlightlibrary.com/"
        target="_blank"
        rel="noreferrer"
      >
        NBA 하이라이트 라이브러리
      </Link>
      <Preview src={Preview5} alt="experience" />
      <Link
        href="https://peppermintc.github.io/custom-video-player/"
        target="_blank"
        rel="noreferrer"
      >
        커스텀 비디오 플레이어
      </Link>
    </Container>
  );
};

export default ExperiencePage;
