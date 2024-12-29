function Game(name,genre,rating){
    this.genre = genre;
    this.name = name;
    this.rating = rating;
}

// var god_of_war = new Game("God Of War","Action/Hack&Slash","AAA");
// var final_fantasy = new Game("Final Fantasy","ActionRPG","AAA");

// console.log('Name: ' + god_of_war.name + '\n' + 'Genre: ' +god_of_war.genre + '\n' + 'Rating: ' + god_of_war.rating);
// console.log('Name: ' + final_fantasy.name + '\n' + 'Genre: ' + final_fantasy.genre + '\n' + 'Rating: ' + final_fantasy.rating);

//literal obj notation
var game = {
    name:'God Of War',
    genre: 'Action/Hack&Slash',
    rating: 'AAA'
};

console.log(game.name + '\n' + game.genre + '\n' + game.rating);