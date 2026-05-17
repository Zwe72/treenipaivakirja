import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTrainingById, updateTrainingInFirestore } from "../services/trainingService";
import type { Training } from "../types";

export default function EditTraining() {

    const { id } = useParams();
    const [training, setTraining] = useState<Training | null>(null);

    useEffect(() => {

        const fetchTraining = async () => {

            if (!id) return;

            const data = await getTrainingById(id);
            
            if (data) {
                setTraining(data);
            }
        };
        
        fetchTraining();
    }, [id]);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (!id || !training) return;

        await updateTrainingInFirestore(id, training);

        window.location.href = "/trainings";
    };

    if (!training) {
        return <p>Ladataan...</p>
    }

    return (
        <div>
            <h2>Muokkaa treeniä</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Liike</label>

                    <input
                        type="text"
                        value={training.exercise}
                        onChange={(e) =>
                            setTraining({
                                ...training,
                                exercise: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label>Sarjat</label>

                    <input
                        type="number"
                        value={training.sets}
                        onChange={(e) =>
                            setTraining({
                                ...training,
                                sets: Number(e.target.value),
                            })
                        }
                    />
                </div>

                <div>
                    <label>Toistot</label>

                    <input
                        type="number"
                        value={training.reps}
                        onChange={(e) =>
                            setTraining({
                                ...training,
                                reps: Number(e.target.value),
                            })
                        }
                    />
                </div>

                <div>
                    <label>Paino (kg)</label>

                    <input
                        type="number"
                        value={training.weight || ""}
                        onChange={(e) =>
                            setTraining({
                                ...training,
                                weight: Number(e.target.value),
                            })
                        }
                    />
                </div>

                <button type="submit">
                    Tallenna muutokset
                </button>
            </form>
        </div>
    );
}