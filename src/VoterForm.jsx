import { useState } from "react";

function VoterForm() {
  const [name, setName] = useState("");
  const [voterId, setVoterId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/voters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, voterId })
    });

    const data = await res.json();
    alert("Voter registered: " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={voterId} onChange={(e) => setVoterId(e.target.value)} placeholder="Voter ID" required />
      <button type="submit">Register Voter</button>
    </form>
  );
}

export default VoterForm;
