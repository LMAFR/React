import { WINNER_COMBOS } from "../constant";

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;

        if (
            boardToCheck[a] &&
            boardToCheck[b] === boardToCheck[a] &&
            boardToCheck[c] === boardToCheck[a]
        ) {
            return boardToCheck[a]
        }
    }
    // If there is no winner after check, continue playing
    return null
}

export const checkEndGame = (newBoard) => {
    // Check if there is a draw
    return newBoard.every((square) => square !== null)
}