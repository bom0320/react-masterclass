import styled, { keyframes } from "styled-components";
import { useState } from "react";


const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;


interface DummyType {
  text: string,
  active?: boolean,
}
function Dummy({ text, active = false }: DummyType) {
  return <div>{text}</div>
}


const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
}

function App() {


  return <Container>
    <H1>Protected</H1>
    <Dummy text="hello" active></Dummy>
    <button onClick={onClick}>Click me</button>
  </Container>
}

export default App;

// 컴포넌트의 props 들의 타입 지정법
// 어떻게 하면 props 들을 선택적으로 만들 수 있는지, 또는 필수적으로 만드는 방법
// (매우매우 중요한)props에 기본값을 주는 법