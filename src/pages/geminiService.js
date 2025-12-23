// src/services/geminiService.js
export async function generateWorkoutPlan(goal, experience, equipment) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    title: `Custom Plan for ${goal}`,
    exercises: [
      { name: 'Push Ups', sets: 3, reps: 12, description: 'Bodyweight exercise for chest & arms.' },
      { name: 'Squats', sets: 3, reps: 15, description: 'Lower body strength exercise.' },
    ],
    nutritionTips: ['Protein Shake', 'High Fiber Diet', 'Hydration'],
  };
}
