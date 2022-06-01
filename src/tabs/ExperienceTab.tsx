import styled from "styled-components";
import Preview1 from "../img/preview1.png";
import Preview2 from "../img/preview2.png";
import Preview3 from "../img/preview3.png";
import Preview4 from "../img/preview4.png";
import Preview5 from "../img/preview5.png";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Project = styled.div`
  width: 50%;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Paragraph = styled.div`
  width: 100%;
  padding: 15px;
  text-align: left;
  margin-left: 60px;
  line-height: 24px;
`;

const Title = styled.div`
  text-align: center;
  width: 100%;
  font-weight: bold;
  padding: 10px 0;
`;

const Preview = styled.img`
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  &:visited {
    color: blue;
  }
`;

const ExperienceTab = () => {
  return (
    <Container>
      <h3>프로젝트 경험</h3>
      <Project>
        <Title>[모바일 웹뷰] 커뮤니티 페이지</Title>
        <Preview src={Preview1} alt="experience" />
        <Paragraph>
          <li>기업 과제로 수행하였습니다.</li>
          <li>모바일 화면에 맞게 반응형으로 스타일을 구현해야했습니다.</li>{" "}
          <li>3개의 페이지를 구현해야했습니다. (글쓰기, 글 상세, 글 목록)</li>
          <li>
            글쓰기 페이지에서는 여러개의 사진을 첨부하고 삭제 할 수
            있어야합니다.
          </li>
          <li>
            글 목록 페이지의 글 목록은 카테고리 선택에 따라 글을 분류하여야
            합니다.
          </li>
        </Paragraph>
      </Project>

      <Project>
        <Title>[모바일 웹뷰] 뉴스 기사 페이지</Title>
        <Preview src={Preview2} alt="experience" />
        <Paragraph>
          <li>기업 과제로 수행하였습니다.</li>
          <li>뉴욕 타임스 API를 통해 기사를 불러옵니다.</li>
          <li>모바일 화면에 맞게 반응형으로 스타일을 구현해야했습니다.</li>{" "}
          <li>
            2개의 페이지와 모달로 구현되었습니다. (기사 목록, 스크랩 목록, 필터
            모달)
          </li>
          <li>
            새로고침 후에도 스크랩된 기사들이 유지되도록 하였습니다.
            (LocalStorage 사용)
          </li>
          <li>
            기사 목록들을 카테고리 모달에서 설정한 필터 값들에 따라 표시하여야
            합니다.
          </li>
        </Paragraph>
      </Project>

      <Project>
        <Title>가구 커머스 페이지</Title>
        <Preview src={Preview3} alt="experience" />
        <Paragraph>
          <li>기업 과제로 수행하였습니다.</li>
          <li>REST API를 통해 가구 데이터를 불러옵니다.</li>
          <li>
            가구 아이템을 디자인가이드에 따라 UI로 구현하고 카테코리 필터 선택에
            따라 아이템을 분류합니다.
          </li>
        </Paragraph>
      </Project>

      <Project>
        <Title>NBA 하이라이트 라이브러리</Title>
        <Preview src={Preview4} alt="experience" />
        <Paragraph>
          <li>
            <Link
              href="https://nbahighlightlibrary.com/"
              target="_blank"
              rel="noreferrer"
            >
              사이트 방문하기
            </Link>
          </li>
          <li>개인 프로젝트로 수행하였습니다.</li>
          <li>
            모든 NBA 선수들의 하이라이트 영상을 선수들의 이름으로 직접 검색할
            필요없이 쉽게 선택하여 찾아 볼 수 있습니다.
          </li>
          <li>많이 알려지지 않은 선수들까지 영상을 찾아볼 수 있습니다.</li>
          <li>데이터는 로컬에 저장한 json 데이터를 사용하였습니다.</li>
          <li>구글 검색 가능, 누적 방문자 수 약 60명</li>
        </Paragraph>
      </Project>

      <Project>
        <Title>커스텀 비디오 플레이어</Title>
        <Preview src={Preview5} alt="experience" />
        <Paragraph>
          <li>
            <Link
              href="https://peppermintc.github.io/custom-video-player/"
              target="_blank"
              rel="noreferrer"
            >
              사이트 방문하기
            </Link>
          </li>
          <li>
            HTML5 Video API를 이용하여 커스텀 비디오 플레이어를
            구현해보았습니다.
          </li>
          <li>
            기본적인 비디오 플레이어 기능 구현에서 더 나아가 추가로 다양한
            아이디어를 반영시켜보고 싶었습니다.
          </li>
          <li>
            그림 그리기, 화면 이동, 확대/축소, 재생속도 설정, 밝기 조절 등의
            기능이 있습니다.
          </li>
        </Paragraph>
      </Project>
    </Container>
  );
};

export default ExperienceTab;
