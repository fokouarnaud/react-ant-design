import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="p-4">
        uid du todo est <divspan className="text-primary">{id}</divspan>
      </div>
    </div>
  );
}

export default Detail;
