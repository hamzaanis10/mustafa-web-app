import React from 'react';
import './app.checker.board.scss';

interface AppCheckerBoardProps{
    rows: number;
    cols: number;
    className?: string
}

const AppCheckerBoard: React.FC<AppCheckerBoardProps> = (props) => {
    const {rows, cols,className} =props
    const createCheckerBoard = () => {
        const Board = [];
        for (let row = 0; row < rows; row++) {
            const Cells = [];
            for (let col = 0; col < cols; col++) {
                const isBlack = (row + col) % 2 === 1;
                Cells.push(
                    <div
                        key={`${row}-${col}`}
                        className={`cell ${className} ${isBlack ? 'black' : 'white'}`}
                    ></div>
                );
            }
            Board.push(
                <div key={row} className="row">
                    {Cells}
                </div>
            );
        }
        return Board;
    };

    return (
        <div id='CheckerBoard' className="checkerboard ">{createCheckerBoard()}</div>
    );
}

export default AppCheckerBoard;