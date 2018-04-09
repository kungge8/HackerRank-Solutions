//input: array of integers representing individual sightings of species of birds
//  species are represented by the integers 1-5. Example input: [1,4,4,4,5,3]
//output: integer representing the most sighted species, favoring species with lower ID #

//solution: create reference array holding bird types (birds)
//          create array of # of sightings of each bird type (count)
//          return birds[i], i being the index of the highest integer held in count

function migratoryBirds(n, ar) {
    // Complete this function
    const birds = [1,2,3,4,5];
    const count = birds.map((n) => ar.reduce( (a, m) => (m === n) ? a + 1 : a, 0));
    return birds[count.reduce((a, n, i, arr) => {
        if ( n > a.count ){
            a.index = i;
            a.count = n
            return a;
        } else {
            return a;
        }
    }, { index: 0, count: 0 }).index];
}