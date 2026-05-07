import type { Training } from "../types";

type Props = {
  trainings: Training[];
};

export default function Trainings({ trainings }: Props) {
  return (
    <div>
      <h2>Treenit</h2>

      {trainings.length === 0 ? (
        <p>Ei treenejä vielä. Lisää ensimmäinen treeni!</p>
      ) : (
        <div>
          {trainings.map((t, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{t.exercise}</h3>
              <p>
                {t.sets} x {t.reps} toistoa
              </p>
              {t.weight && <p>Paino: {t.weight} kg</p>}
              <p>
                Päivä: {new Date(t.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}