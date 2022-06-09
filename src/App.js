import React, { useRef, useState } from "react";
// import Hello from "./Hello";
// import Wrapper from "./Wrapper";
// import Counter from "./Counter";
// import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    usernmae: "",
    email: ""
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );

  // <다른 컴포넌트 불러와서 사용하기>
  // return (
  //   <div>
  //     <Wrapper>
  //       <Hello name="react" color="red" isSpecial={true} />
  //       {/* isSpecial만 있어도 isSpecial={true}와 동일한 의미 */}
  //       <Hello color="indigo" />
  //     </Wrapper>
  //     <Hello />

  //     <Counter />

  //     <InputSample />

  //     <UserList />
  //   </div>
  // );
  // 배열 추가해야함
}

export default App;
