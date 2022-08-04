import React, { useContext } from "react";
import { UserContext } from "../store/user";

export default function BlogPage() {
  const [user, dispatch] = useContext(UserContext);
  console.log(UserContext);
  console.log(dispatch);
  return (
    <div>
      <h1>BlogPage</h1>
      <button onClick={() => dispatch({ type: "changeJob", text: "BE-dev" })}>
        Change Job
      </button>
      <h3>{user.name}</h3>
      <h4>{user.job}</h4>
      <p></p>
    </div>
  );
}
