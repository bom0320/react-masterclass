import { useState } from "react";
import styled from "styled-components"

interface ContainerProps {
    bgColor: string;
    borderColor: string;
    // 여기 부분은 borderColor 는 string 이어야만 함 -> 즉, required 상태여야 하는것
    // borderColor? : string;은 옳지 않게 됨
    // 또한 undefined가 들어오면 styled-components가 오류를 낼 수도 있어서, 안전하게 ??를 사용해 기본값을 지정해야함!
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string; // Optional Props
    text?: string;
}

function Circle({ bgColor, borderColor, text = "Default Text" }: CircleProps) {
    const [value, setValue] = useState<string | number>(0);
    // 여기서 알아야할 게 TypeScript는 똑똑해서
    // TypeScript 를 쓰지 않았더라도, default 값으로 우리가 어떤 값을 쓸건지 안다.(ex: counter default Value Number)

    return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
        {text}
    </Container>;
}

export default Circle; 