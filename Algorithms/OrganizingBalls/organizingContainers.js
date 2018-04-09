//input: matrix representing containers and # of balls in them
//output: pass/fail, can containers be successfully organized?

//solution: only condition where organization cannot happen is if a type of ball does not have an existing
//          container with the same amount of balls already in it. Find sum of balls in each container and
//          compare to sum of balls of each type to make sure there no discrepancies.

function arrayDiff (a1, a2) {
    if(!a1.length){
        return "Possible";
    } else {
        for ( i = 0; i < a1.length; i++ ){
            for (j = 0; j < a2.length; j++){
                if (a1[i] === a2[j]){
                    a1.splice(i,1);
                    a2.splice(j,1);
                    return arrayDiff(a1, a2);
                }
            }
        }
        return "Impossible";
    }
}

function organizingContainers(container) {
    const types = container.reduce((a, n) => a.map((x, y) => x + n[y]));
    const containers = container.map((n) => n.reduce((a, n) => a + n));
    
    return arrayDiff(types, containers);
}