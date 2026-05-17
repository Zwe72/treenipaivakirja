import { Link } from "react-router-dom";
import { deleteTrainingFromFirestore } from "../services/trainingService";
import type { Training } from "../types";
import { useState } from "react";

type Props = {
  trainings: Training[];
};

export default function Trainings({ trainings }: Props) {

  const [sortOrder, setSortOrder] = useState("newest");

  const handleDelete = async (id: string) => {

    const confirmDelete = window.confirm(
      "Haluatko varmasti poistaa treenin?"
    );
    if (!confirmDelete) return;

    await deleteTrainingFromFirestore(id);

    window.location.reload();
  };

  const sortedTrainings = [...trainings]
    .sort((a, b) => {
      if  (sortOrder === "newest") {

        return (
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
        );
      }

      return (
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
      );
    });
  
  return (
    <div>
      <h2>Treenit</h2>
      
        <div style={{ marginBottom: "15px" }}>

        <label>Järjestys: </label>

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
        >
          <option value="newest">
            Uusin ensin
          </option>

          <option value="oldest">
            Vanhin ensin
          </option>
        </select>

      </div>

      {sortedTrainings.length === 0 ? (

        <div>
          <p>Ei treenejä vielä. Lisää ensimmäinen treeni!</p>
          
          <Link to="/add">
            <button style={{ marginTop: "10px" }}>
              Lisää treeni
            </button>
          </Link>
        </div>

      ) : (

        <div>
          {sortedTrainings.map((t, index) => (
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
                Päivä: {new Date(t.date).toLocaleString()}
              </p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Link to={`/edit/${t.id}`}>
                  <button>
                    Muokkaa
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(t.id!)}
                  >
                    Poista
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}