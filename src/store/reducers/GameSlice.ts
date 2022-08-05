import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import getRandomInt from "../../scripts/getRandomInt";

const WayVariants = ["Вверх", "Вниз", "Влево", "Вправо"] as const;
const GameVariant = ["waiting", "in game", "win", "lose"] as const;

interface GameState {
    countOfGameCells: number | null,
    countOfMoveCells: number | null,
    cellStart: number | null,
    cellEnd: number | null,
    way: (typeof WayVariants[number])[] | null,
    status: typeof GameVariant[number],
    score: {
        correct: number,
        false: number
    };
}

const initialState: GameState = {
    countOfGameCells: null,
    countOfMoveCells: null,
    cellStart: null,
    cellEnd: null,
    way: null,
    status: "waiting",
    score: {
        correct: 0,
        false: 0
    }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame(state, action: PayloadAction<{ countOfGameCells: number, countOfMoveCells: number }>) {
            state.countOfGameCells = action.payload.countOfGameCells;
            state.countOfMoveCells = action.payload.countOfMoveCells;
            state.cellStart = getRandomInt(0, action.payload.countOfGameCells);
            state.way = [...Array(action.payload.countOfMoveCells)].map(() => WayVariants[getRandomInt(0, 4)]);
            const colCount = Math.floor(Math.sqrt(action.payload.countOfGameCells));
            let end = state.cellStart;
            state.way.forEach((direction) => {
                switch (direction) {
                    case "Вверх":
                        if (end - colCount > -1) end -= colCount;
                        break
                    case "Вниз":
                        if (end + colCount < action.payload.countOfGameCells) end += colCount;
                        break
                    case "Влево":
                        if (Math.trunc(end / colCount) !== end / colCount) end--;
                        break
                    case "Вправо":
                        if (Math.trunc((end + 1) / colCount) !== (end + 1) / colCount) end++;
                        break
                }
            });
            state.cellEnd = end;
            state.status = "in game";
        },
        continueGame(state){
            state.cellStart = getRandomInt(0, state.countOfGameCells||0);
            state.way = [...Array(state.countOfMoveCells || 0)].map(() => WayVariants[getRandomInt(0, 4)]);
            const colCount = Math.floor(Math.sqrt(state.countOfGameCells||0));
            let end = state.cellStart;
            state.way.forEach((direction) => {
                switch (direction) {
                    case "Вверх":
                        if (end - colCount > -1) end -= colCount;
                        break
                    case "Вниз":
                        if (end + colCount < (state.countOfGameCells || 0)) end += colCount;
                        break
                    case "Влево":
                        if (Math.trunc(end / colCount) !== end / colCount) end--;
                        break
                    case "Вправо":
                        if (Math.trunc((end + 1) / colCount) !== (end + 1) / colCount) end++;
                        break
                }
            });
            state.cellEnd = end;
            state.status = "in game";
        },
        endGame(state, action: PayloadAction<typeof GameVariant[number]>){
            action.payload === "win" ? state.score.correct++ : state.score.false++;
            state.status = action.payload;
        },
        restartGame(state){
            state = Object.assign(state, initialState);
        }
    }
})

export default gameSlice.reducer;