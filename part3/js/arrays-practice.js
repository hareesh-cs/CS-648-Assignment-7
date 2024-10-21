// STEP 1: Display Second Movie
let movies = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "The Godfather",
];
console.log(movies[1]);

// STEP 2: Using Constructor
let moviesUsingConstructor = new Array(5);
moviesUsingConstructor[0] = "The Call";
moviesUsingConstructor[1] = "Wander";
moviesUsingConstructor[2] = "Superman IV: The Quest for Peace";
moviesUsingConstructor[3] = "Green Book";
moviesUsingConstructor[4] = "The Young Girls of Rochefort";
console.log(moviesUsingConstructor[0]);

// STEP 3: Adding a Movie
moviesUsingConstructor.splice(2, 0, "Harley Davidson and the Marlboro Man");
console.log(moviesUsingConstructor.length);

// STEP 4: Deleting First Movie
let moviesUsingLiteralNotation = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "The Godfather",
];

delete moviesUsingLiteralNotation[0];

console.log(moviesUsingLiteralNotation);

// STEP 5: Iterating Through Array
let moviesIterating = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "The Godfather",
  "Pulp Fiction",
  "Fight Club",
];

for (let i = 0; i < moviesIterating.length; i++) {
  console.log(moviesIterating[i]);
}

// STEP 6: Using for-in Loop
for (let index in moviesIterating) {
  console.log(movies[index]);
}

// STEP 7: Sorted Array
movies.sort().forEach((movie) => console.log(movie));

// STEP 8: Displaying Liked and Disliked Movies
let leastFavMovies = ["Black Christmas", "Me Time", "The Greatest"];
console.log("Movies I like: \n", movies.join("\n"));
console.log("Movies I regret watching:\n", leastFavMovies.join("\n"));

// STEP 9: Merging Arrays and Reversing
let allMovies = movies.concat(leastFavMovies).sort().reverse();
console.log(allMovies);

// STEP 10: Display Last Movie
console.log(allMovies.pop());
