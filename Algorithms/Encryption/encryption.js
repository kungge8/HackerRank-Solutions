//input: string
//output: encrypted string by problem's guidelines.

//solution: just do it? Convert string to matrix given guidelines, convert matrix to new string.

//could probably be written a little better?
function generateMatrix(s, rows, columns){
    let matrix = [];
    
    for (i = 0; i < rows; i++){
        matrix[i] = [];
        for (j = 0; j < columns; j++){
            matrix[i][j] = s.charAt();
            s = s.slice(1);
        }
    }

    return matrix;
}

function encryption(s) {
    const root = Math.sqrt(s.length);
    const columns = Math.ceil(root);
    const rows = (Math.floor(root) * columns < s.length) ? Math.floor(root) + 1 : Math.floor(root);
    
    const encryptedWords = generateMatrix(s, rows, columns).reduce((a, n) => a.map((x, y) => x + n[y]));
    
    return encryptedWords.join(' ');
}