export interface Symptom {
    id: number;
    title: string;
    description: string;
    category: string;
  }
  
  export const symptoms: Symptom[] = [
    {
      id: 1,
      title: "Fever",
      description: "High body temperature and chills",
      category: "Common",
    },
    {
      id: 2,
      title: "Headache",
      description: "Pain or pressure in the head",
      category: "Common",
    },
    {
      id: 3,
      title: "Cough",
      description: "Dry or productive cough",
      category: "Respiratory",
    },
    {
      id: 4,
      title: "Chest Pain",
      description: "Pain or discomfort in the chest",
      category: "Emergency",
    },
    {
      id: 5,
      title: "Nausea",
      description: "Feeling sick or wanting to vomit",
      category: "Digestive",
    },
    {
      id: 6,
      title: "Sore Throat",
      description: "Pain or irritation in the throat",
      category: "Respiratory",
    },
  ];