export async function getExercises() {
  const response = await fetch(
    "https://wger.de/api/v2/exerciseinfo/?limit=10"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return response.json();
}