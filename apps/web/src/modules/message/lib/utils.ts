const anonymousNames = [
  "Murciélago",
  "Kiwi",
  "Panda",
  "Koala",
  "Pingüino",
  "Canguro",
  "Delfín",
  "Tucán",
  "Jirafa Anónima",
  "Leopardo",
  "Tigre",
  "Elefante",
];

export function getRandomAnonymousName(): string {
  return (
    anonymousNames[Math.floor(Math.random() * anonymousNames.length)] || ""
  );
}
