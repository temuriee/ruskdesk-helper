"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [groupCode, setGroupCode] = useState("");
  const router = useRouter();
  const params = useParams();

  const joinGroup = () => {
    if (!groupCode) return;

    localStorage.setItem("groupCode", groupCode);

    router.push(`/${params.locale}/group`);
  };

  return (
    <div>
      <h1>Enter Group Code</h1>

      <input
        placeholder="JS-101"
        value={groupCode}
        onChange={(e) => setGroupCode(e.target.value)}
      />

      <button onClick={joinGroup}>Join</button>
    </div>
  );
}
