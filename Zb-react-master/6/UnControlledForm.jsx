import React, { useRef } from "react";

const UnControlledForm = () => {
  const inputRef = useRef();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  console.log(inputRef);
  console.log(inputRef.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>닉네임 :</label>
        <input
          type={"text"}
          name="nickname"
          // 이벤트 대신 직접 받을 수 있다! - 비권장
          // onChange={handleChange}
          ref={inputRef}
        />
        <input type={"submit"} value="제출" />
      </form>
    </div>
  );
};

export default UnControlledForm;
