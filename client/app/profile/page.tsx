"use client";

import { socket } from "@/features/lib/socket";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  const params = useParams();

  const [name, setName] = useState("");
  const [rustdeskId, setRustdeskId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("student");

    if (saved) {
      const data = JSON.parse(saved);
      setName(data.name);
      setRustdeskId(data.rustdeskId);
      setPassword(data.password);
    }
  }, []);

  const save = () => {
    const data = { name, rustdeskId, password };

    localStorage.setItem("student", JSON.stringify(data));

    router.push(`/${params.locale}/`);
  };

  useEffect(() => {
    const groupCode = localStorage.getItem("groupCode");
    const student = JSON.parse(localStorage.getItem("student") || "{}");

    socket.emit("join_group", {
      groupCode,
      student,
    });
  }, []);

  const askHelp = () => {
    socket.emit("help_requested", {
      groupCode: localStorage.getItem("groupCode"),
      student: JSON.parse(localStorage.getItem("student") || "{}"),
    });
  };

  return (
    <div>
      <h1>Profile</h1>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="RustDesk ID"
        value={rustdeskId}
        onChange={(e) => setRustdeskId(e.target.value)}
      />

      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={save}>Save</button>

      <button onClick={askHelp}>Ask for Help</button>
    </div>
  );
}
