// src/pages/VoterRegistration.jsx
import { useState } from "react";

function VoterRegistration() {
  const [name, setName] = useState("");
  const [voterId, setVoterId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/voters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, voterId })
      });

      const data = await res.json();
      alert("Voter registered: " + JSON.stringify(data));
      setName("");
      setVoterId("");
    } catch (error) {
      alert("Error registering voter");
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register a Voter</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          className="border p-2 w-full"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          placeholder="Voter ID"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register Voter
        </button>
      </form>
    </div>
  );
}

export default VoterRegistration;
