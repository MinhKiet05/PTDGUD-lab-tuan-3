import { useState } from "react";
import StatusBadge from "./components/statusBadge/StatusBadge";

export default function App() {
  const [status, setStatus] = useState("online");

  function changeStatus() {
    if (status === "online") setStatus("busy");
    else if (status === "busy") setStatus("offline");
    else setStatus("online");
  }

  return (
    <>
      <StatusBadge status={status} />

      <br /><br />

      <button onClick={changeStatus}>
        Change Status
      </button>
    </>
  );
}
