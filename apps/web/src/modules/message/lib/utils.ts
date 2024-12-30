const anonymousNames = [
  "Murciélago",
  "Kiwi",
  "Panda",
  "Koala",
  "Pingüino",
  "Canguro",
  "Delfín",
  "Tucán",
  "Jirafa",
  "Leopardo",
  "Tigre",
  "Elefante",
];

export function getRandomAnonymousName(): string {
  return (
    anonymousNames[Math.floor(Math.random() * anonymousNames.length)] || ""
  );
}
export function getRandomColor(): string {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "teal",
    "indigo",
    "cyan",
  ];
  return colors[Math.floor(Math.random() * colors.length)] || "purple";
}
