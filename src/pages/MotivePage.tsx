import styled from "styled-components";
import GrowthIcon from "../img/growth.png";

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

const MotivePage = () => {
  return (
    <Container>
      <Image src={GrowthIcon} alt="growth" />
      <h3>지원동기</h3>
      <Paragraph>
        이번 당근마켓 썸머테크 인턴 지원의 가장 큰 이유는 <b>성장</b>과{" "}
        <b>경험</b>입니다.
      </Paragraph>
      <Paragraph>
        최근 취업 준비를 수개월째 해오며 최우선 순위로 두고 지내고 있었습니다.
      </Paragraph>
      <Paragraph>
        하지만 당근마켓 테크인턴 경험은 취업을 우선순위에서 미룰 수 있을 만큼
        <b> 좋은 성장 기회</b>라고 생각합니다.
      </Paragraph>
      <Paragraph>
        특히 최근 모바일 웹뷰 개발에 관심이 많은데 향후 모바일 웹뷰 컴포넌트
        개발에 도움이 될 수 있을 것 같고, 어떠한 공용 라이브러리에 기여를 한는
        경험은 굉장히 욕심나는 경험인 것 같습니다.
      </Paragraph>
      <Paragraph>
        이번 기회에 <b>Karrotframe</b>을 개선하는데 기여해보고 싶습니다!
      </Paragraph>
    </Container>
  );
};

export default MotivePage;
