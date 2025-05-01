import styled, { keyframes } from "styled-components";
import { useState } from "react";


function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value)

    const {
      currentTarget: { value },
    } = event;
    // const value = event.currentTarget.value;
    // setValue(value);
    setValue(value);

  }
  return <div>
    <form>
      <input type="text" placeholder="userName" value={value} onChange={onChange} />

      <button >Log in</button>
    </form>
  </div>
}

export default App;

// 이 코드는 굉장히 보호를 받고 있음
// 왜? 타입스크립트가 현재 setValue 는 string 을 받아야 한다는 걸 검사하고 있고, 
// 이 onChange 이벤트가 type="text" 인 input에 의해 만들어졌으며
// 이 currentTarget의 value 가 string 이라는 걸 타입 스크립트가 알고 있기 때문이다.