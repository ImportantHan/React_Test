import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        {/* isSpecial만 있어도 isSpecial={true}와 동일한 의미 */}
        <Hello color="indigo" />
      </Wrapper>
      <Hello />

      <Counter />

      <InputSample />
    </div>
  );
}

export default App;
