//inputs: n - length of array, s - array, d - sum, m - length of sequence
//outputs: # of instances in s, where a sequence of values m long sums to d

//solution: iterate and sum successes

function solve(n, s, d, m){
    const validity = s.map( (n, i, arr) => {
        let currSum = arr.slice(i, i + m).reduce((a, n) => a + n);
        
        if (currSum === d){
            return 1;
        } else  {
            return 0;   
        }
    });
    
    return validity.reduce((a, n) => a + n);
}