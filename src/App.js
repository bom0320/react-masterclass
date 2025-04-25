import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: orange;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 46px;
    // span:hover
    &:hover {
      font-size: 56px;
    }
    &:active {
      opacity: 0.2;
    }
  }
`

function App() {

  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>

  )
}

export default App;
