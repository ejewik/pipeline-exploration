function unreachableStatement(a, b) {
    // testing unreachable code for the linter
    //let result = a + b;
    return a;
    console.log("This is unreachable");
}

function redundantElseIf(a, b) {
    // testing redunant else if for linter
    if (a) {
        return a;
    } else if (b) {
        return b;
    } else if (b) {
        return a;
    }
}

function unusedVars() {
    let str = "This is unused.";
}

function mixedSpacesAndTabs() {
    let str1 = "This is indented by tab.";
    let str2 = "This is indented by spaces.";
    return str1;
}