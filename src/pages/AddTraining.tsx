import { useState } from "react";
import type { Training } from "../types";

type Props = {
    addTraining: (training: Training) => void;
}

export default function AddTraining({ addTraining }: Props) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTraining: Training = {
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: weight ? Number(weight) : undefined,
      date: new Date().toISOString(),
    };

    addTraining(newTraining);
    
    console.log("Uusi treeni:", newTraining);

    // tyhjennetään kentät
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div>
      <h2>Lisää treeni</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Liike:</label>
          <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Sarjat:</label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Toistot:</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Paino (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button type="submit">Tallenna</button>
      </form>
    </div>
  );
}