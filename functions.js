function unreachableStatement(a, b) {
    // testing unreachable code for the linter
    let result = a + b;
    return result;
    console.log("This is unreachable");
}

function assigningInConditional(a) {
    if (a = "assigning in a conditional") {
        return a;
    } 
}

function unusedVars() {
    let str = "This is unused.";
}

let foo = unreachableStatement(1, 1);

