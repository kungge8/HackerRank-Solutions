//input: n, ar - array of integers and # of entries, k - an integer
//output: # of pairs of numbers in ar that are divisible by k.

//solution: generate new array, mirroring ar but instead each i holding # of unique successful pairings for ar[i]
//          sum the new array

function divisibleSumPairs(n, k, ar) {
    return ar.reduce( (a, n, i, arr) => {
        if ( i === arr.length - 1 ){
            return a;
        } else {
            return a + arr.slice(i + 1).map((m) => ((m + n) % k === 0) ? 1 : 0).reduce((a,n) => a + n);        
        }
    }, 0);
}