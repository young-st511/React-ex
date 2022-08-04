import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReactDocPage() {
  // docID: 1, 2, 3....
  const [doc, setDoc] = useState(0);
  const params = useParams();

  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const json = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.docId}`
        )
      ).json();
      setDoc(json);
    }
    fetchData();
  }, [params.docId]);

  return (
    <>
      <h1>{doc.title}</h1>
      <p>{doc.body}</p>
    </>
  );
}
