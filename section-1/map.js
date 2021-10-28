nums = [1,2,3,4,5,6];
movies = [ 'PK', 'DON 2', 'BAHUBALI','GODFARHER','300','FLASH'];

console.log(nums);

new_nums=nums.map(  n  =>   n*n  );   //short
new_movies=movies.map ( (mov,i) =>{ return mov+i});

console.log(new_nums);
console.log(new_movies);



filtered_nums= nums.filter( (n) => {return n%2==0});

console.log(filtered_nums);


s = "PK";
filtered_movie = movies.filter( (mov) => {return s.toLowerCase()==mov.toLowerCase()} );

s="a";  // only that movies which has letter "a/A"
filtered_movie2 = movies.filter( (mov) => {return mov.toLowerCase().includes(s.toLowerCase())} );

console.log(filtered_movie);
console.log(filtered_movie2);


console.log("This is Sparta".toLowerCase().includes('spaRTa'.toLowerCase()));