import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.backgroundColor};
`;

const Text = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 10px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 10px;
  }
`
const Emoji = styled.span`
  font-size: 46px;

`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: orange;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
      font-size: 56px;
    }
`

function App() {

  return (
    <Wrapper>
      <Box>
        <Text>Hi</Text>
      </Box>
    </Wrapper>

  )
}

export default App;

// Box 컴포넌트 안의 Emoji 는 hover 가 작동함
// 왜? 모든 Emoji 이름을 가진 BOX 안의 것들은 hover 됐을 때 98px의 크기를 가진다.
