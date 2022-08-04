import React, { createContext, useState, useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };
    case "changeName":
      return { ...state, name: action.text };
    default:
      break;
  }
};

const initialUser = {
  name: "young",
  job: "FE-developer",
};

export default function UserStore(props) {
  // const [job, setJob] = useState("FE-developer");
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log("user", user);

  // const user = {
  //   name: "young",
  //   job,
  //   changeJob: (updatedJob) => setJob(updatedJob),
  // };
  return (
    <UserContext.Provider value={[user, dispatch]}>{props.children}</UserContext.Provider>
  );
}
