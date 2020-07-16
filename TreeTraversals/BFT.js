"use strict";
const breadthFirstTraverse = (queue, array) => {
    // fill code in here
    while (queue.length) {
        const curr = queue.shift();
        array.push(curr.value);
        if (curr.left)
            queue.push(curr.left);
        if (curr.right)
            queue.push(curr.right);
    }
    return array;
};
const t = {
    value: "A",
    left: {
        value: "B",
        left: {
            value: "D",
            left: {
                value: "G",
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: "E",
            left: null,
            right: {
                value: "H",
                left: {
                    value: "K",
                    left: null,
                    right: null
                }
            }
        }
    },
    right: {
        value: "C",
        left: {
            value: "F",
            left: {
                value: "I",
                left: null,
                right: null
            },
            right: {
                value: "J",
                left: null,
                right: null
            }
        },
        right: null
    }
};
const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
if (JSON.stringify(breadthFirstTraverse([t], [])) === JSON.stringify(answer)) {
    console.log("BFT: OK");
}
else {
    console.log("BFT: ERROR");
}
