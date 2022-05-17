import { ScreenHelmet } from "@karrotframe/navigator";
import styled from "styled-components";

const Container = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`;

const HomeScreen = () => {
  return (
    <Container>
      <ScreenHelmet
        title="My App"
        appendLeft={<div>Append to Left</div>}
        appendRight={<div>Append to Right</div>}
        customBackButton={<div>Back</div>}
        customCloseButton={<div>Close</div>}
        visible={false}
        preventSwipeBack={true}
        noBackButton={true}
        noCloseButton={true}
      />
      홈스크린
    </Container>
  );
};

export default HomeScreen;
