function unreachableStatement(a, b) {
    // testing unreachable code for the linter
    //let result = a + b;
    return a;
    console.log("This is unreachable");
}

function redundantElseIf(a, b) {
    // testing redunant else if for linter
    if(a > b) {
        return a;
    } else if(a > b) {
        return b;
    } else if(a > b) {
        return b;
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