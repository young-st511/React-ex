import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h2><Link to="/">Home</Link></h2>
      {/* <h1>MainPage</h1> */}
      <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link>
      <Outlet />
    </div>
  );
}
