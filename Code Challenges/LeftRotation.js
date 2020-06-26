function MatchingString(strings, queries) {
    var counter = {};
    for (var _i = 0, queries_1 = queries; _i < queries_1.length; _i++) {
        var query = queries_1[_i];
        counter[query] = 0;
    }
    for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
        var str = strings_1[_a];
        if (str in counter) {
            counter[str] += 1;
        }
    }
    var result = Array.from(Object.keys(counter).map(function (key) { return counter[key]; }));
    return result;
}
