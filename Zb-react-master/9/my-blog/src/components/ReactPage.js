import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setDocs(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
