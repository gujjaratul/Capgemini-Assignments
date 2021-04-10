"use strict";
function add(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(add(6, 5));
console.log(add());
var userFriends = function (_username) {
    var userFriends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        userFriends[_i - 1] = arguments[_i];
    }
    console.log(_username);
    console.log(userFriends);
};
userFriends("A", ["B", "C", "D", "E", "F"]);
var printCapitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i in names) {
        console.log(names[i].toUpperCase());
    }
};
printCapitalNames("atul", "ashish", "manish", "askshay", "nikhil");
//# sourceMappingURL=Assignment5.js.map