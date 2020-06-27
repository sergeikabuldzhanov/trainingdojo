"use strict";
function MatchingString(strings, queries) {
    const counter = {};
    for (let query of queries) {
        counter[query] = 0;
    }
    for (let str of strings) {
        if (str in counter) {
            counter[str] += 1;
        }
    }
    const result = Array.from(Object.keys(counter).map((key) => counter[key]));
    return result;
}
