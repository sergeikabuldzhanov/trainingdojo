"use strict";
// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data
const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
    function* neighbours(x, y) {
        const l = maze.length;
        if (y + 1 < l)
            yield [x, y + 1];
        if (y - 1 >= 0)
            yield [x, y - 1];
        if (x + 1 < l)
            yield [x + 1, y];
        if (x - 1 >= 0)
            yield [x - 1, y];
    }
    const q1 = [[xA, yA]];
    let steps = 1;
    while (q1.length) {
        const cur = q1.shift();
        let [cX, cY] = cur;
        for (let n of neighbours(cX, cY)) {
            let [nX, nY] = n;
            if (nX === xB && nY === yB)
                return steps + 1;
            if (maze[nX][nY] === 0) {
                q1.push([nX, nY]);
                maze[nX][nY] = "v";
            }
        }
        steps++;
    }
    return -1;
};
// there is a visualization tool in the completed exercise
// it requires you to shape your objects like I did
// see the notes there if you want to use it
// unit tests
// do not modify the below code
describe("pathfinding – happy path", function () {
    const fourByFour = [
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
    ];
    it("should solve a 4x4 maze", () => {
        expect(findShortestPathLength(fourByFour, [0, 0], [3, 3])).toEqual(6);
    });
    const sixBySix = [
        [0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
    ];
    it("should solve a 6x6 maze", () => {
        expect(findShortestPathLength(sixBySix, [1, 1], [2, 5])).toEqual(7);
    });
    const eightByEight = [
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 2, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 2],
    ];
    it("should solve a 8x8 maze", () => {
        expect(findShortestPathLength(eightByEight, [1, 7], [7, 7])).toEqual(16);
    });
    const fifteenByFifteen = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    it("should solve a 15x15 maze", () => {
        expect(findShortestPathLength(fifteenByFifteen, [1, 1], [8, 8])).toEqual(78);
    });
});
// I care far less if you solve these
// nonetheless, if you're having, solve some of the edge cases too!
// just remove the x from xdescribe
describe("pathfinding – edge cases", function () {
    const byEachOther = [
        [0, 0, 0, 0, 0],
        [0, 2, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
    ];
    it("should solve the maze if they're next to each other", () => {
        expect(findShortestPathLength(byEachOther, [1, 1], [2, 1])).toEqual(1);
    });
    const impossible = [
        [0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 2],
    ];
    it("should return -1 when there's no possible path", () => {
        expect(findShortestPathLength(impossible, [1, 1], [4, 4])).toEqual(-1);
    });
});
