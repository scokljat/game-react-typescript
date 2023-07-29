type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  isLoser?: boolean;
};

export function HangmanWord({
  wordToGuess,
  guessedLetters,
  isLoser = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.24rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: "10px solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || isLoser
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) || isLoser ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
