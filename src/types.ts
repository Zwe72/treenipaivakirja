export type Training = {
    id?: string; 
    exercise: string;
    sets: number;
    reps: number;
    weight?: number;
    date: string;
};

export interface Exercise {
    id: number;

    translations: {
        name: string;
        description: string;
        language: number;   
    }[];
}