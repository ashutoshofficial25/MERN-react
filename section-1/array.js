movies = [ 'PK', 'DON 2', 'BAHUBALI','GODFARHER','300','FLASH'];

console.log(movies.length);

console.log(movies[2]);  // indexing starts from  zero

console.log(movies.slice(1,4))//slicing  = use for group of element
console.log(movies.slice(1,6))//slicing  = use for group of element

movies[2] =" bahabuli 2";
console.log(movies)

movies.push("Justic League :Snyedrs league");
console.log(movies);

movies.splice( 2,2) ; //splice for delete (stsrt/number)
console.log(movies);


