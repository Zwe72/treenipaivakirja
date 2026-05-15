import { useEffect, useState } from "react";
import type { Exercise } from "../types";
import { getExercises } from "../services/exerciseService";

export default function Exercises() {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getExercises()
            .then((data) => {
                console.log(data.results);
                setExercises(data.results);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    {exercises.map((exercise) => {
        const englishTranslation =
        exercise.translations.find(
            (translation) => translation.language === 2
        );
    })}

    return (
        <div>
            <h1>Exercises</h1>

            {exercises.map((exercise) => {
                const englishTranslation =
                    exercise.translations.find(
                        (translation) =>
                            translation.language === 2
                    );

                return (
                    <div
                        key={exercise.id}
                        style={{
                            border: "1px solid gray",
                            padding: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <h2>
                            {englishTranslation?.name ||
                                "No name"}
                        </h2>

                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    englishTranslation?.description ||
                                    "No description",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}