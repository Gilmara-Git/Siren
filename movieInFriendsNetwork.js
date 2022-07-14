// Network of friend with their respective rated movies.
const LauraSilvaMovies = [
  { title: "Spiderman", likes: 7000, friendNetwork: "LaraSilva" },
  { title: "Batman", likes: 8000, friendNetwork: "LaraSilva" },
  { title: "Snapshot", likes: 10000, friendNetwork: "LaraSilva" },
  { title: "DespicableMe", likes: 125000, friendNetwork: "LaraSilva" },
];

const JackieLimaMovies = [
  { title: "AfterWeCollided", likes: 700, friendNetwork: "JackieLima" },
  { title: "Greyhound", likes: 8000, friendNetwork: "JackieLima" },
  { title: "Snapshot", likes: 10001, friendNetwork: "JackieLima" },
  { title: "BlackPanther", likes: 120000, friendNetwork: "JackieLima" },
];
const MaryDuarteMovies = [
  { title: "Inception", likes: 1000, friendNetwork: "MaryDuarte" },
  { title: "PulpFiction", likes: 9100, friendNetwork: "MaryDuarte" },
  { title: "DriveMyCar", likes: 112000, friendNetwork: "MaryDuarte" },
  { title: "SchindlersList", likes: 1200050, friendNetwork: "MaryDuarte" },
];

const IldaNetaMovies = [
  { title: "Cuties", likes: 7030, friendNetwork: "IldaNeta" },
  { title: "Casablanca", likes: 80000, friendNetwork: "IldaNeta" },
  { title: "TheLordOfTheRings", likes: 110000, friendNetwork: "IldaNeta" },
  { title: "TheDarkKnight", likes: 120000, friendNetwork: "IldaNeta" },
];

const GilmaraPimentelMovies = [
  { title: "365Days", likes: 56000, friendNetwork: "GilmaraPimentel" },
  { title: "Snapshot", likes: 8010, friendNetwork: "GilmaraPimentel" },
  {
    title: "ICantThinkStraight",
    likes: 60000,
    friendNetwork: "GilmaraPimentel",
  },
  { title: "DespicableMe", likes: 320000, friendNetwork: "GilmaraPimentel" },
];

const AdrianaWinkelmanMovies = [
  { title: "ForestGump", likes: 9000, friendNetwork: "AdrianaWinkelman" },
  {
    title: "BeautyAndTheBeast",
    likes: 80004,
    friendNetwork: "AdrianaWinkelman",
  },
  { title: "BrotherBear", likes: 100002, friendNetwork: "AdrianaWinkelman" },
  { title: "BoysDontCry", likes: 120030, friendNetwork: "AdrianaWinkelman" },
];

class SocialNetworkGraph {
  constructor() {
    this.friendsList = {};
    this.totalMoviesList = [];
  }
  // adding nodes(person) and their movies
  addFriend(friendName, movies) {
    if (!this.friendsList[friendName]) {
      this.friendsList[friendName] = [];
    }

    this.friendsList[friendName].push({ movies: movies });
    movies.forEach((movie) => this.totalMoviesList.push(movie));
  }
  // adding their connections to create a Graph
  addFriendsWith(originFriend, relatedFriend) {
    if (!this.friendsList[originFriend].includes(relatedFriend)) {
      this.friendsList[originFriend].push({ friendsWith: relatedFriend });
    }

    if (!this.friendsList[relatedFriend].includes(originFriend)) {
      this.friendsList[relatedFriend].push({ friendsWith: originFriend });
    }
  }

  //
  getMovieWithHighestLikesAmongFriends() {
    let highestLikes = 0;
    let mostPopularMovie = "";
    let friendNetwork = "";
    this.totalMoviesList.forEach((movie) => {
      if (movie.likes > highestLikes) {
        highestLikes = movie.likes;
        mostPopularMovie = movie.title;
        friendNetwork = movie.friendNetwork;
      }
    });
    return {
      TopMovie: highestLikes,
      movieName: mostPopularMovie,
      friendNetwork
    };
  }
  depthFirstSearchOnFriends_RecursivelyMode(startingFriend) {
    let checkedFriend = {};
    const moviesList = [];
    const friendsList = this.friendsList;

    checkedFriend[startingFriend] = "Yes";

    (function initiateSearch(friend) {
      friendsList[friend].forEach((item) => {
        if (item.movies) {
          item.movies.forEach((movie) => {
            moviesList.push(movie);
          });
        }

        if (!checkedFriend[friend]) {
          checkedFriend[friend] = "Yes";
        }
      });
    })(startingFriend);

    return moviesList;
  }
}

const newFriend = new SocialNetworkGraph();
// creating the Graph nodes
newFriend.addFriend("Laura Silva", LauraSilvaMovies);
newFriend.addFriend("Jackie Lima", JackieLimaMovies);
newFriend.addFriend("Mary Duarte", MaryDuarteMovies);
newFriend.addFriend("Ilda Neta", IldaNetaMovies);
newFriend.addFriend("Gilmara Pimentel", GilmaraPimentelMovies);
newFriend.addFriend("Adriana Winkelman", AdrianaWinkelmanMovies);

// creating their connections
newFriend.addFriendsWith("Laura Silva", "Jackie Lima");
newFriend.addFriendsWith("Laura Silva", "Mary Duarte");
newFriend.addFriendsWith("Jackie Lima", "Ilda Neta");
newFriend.addFriendsWith("Mary Duarte", "Adriana Winkelman");
newFriend.addFriendsWith("Adriana Winkelman", "Gilmara Pimentel");
newFriend.addFriendsWith("Gilmara Pimentel", "Ilda Neta");
newFriend.addFriendsWith("Adriana Winkelman", "Ilda Neta");

// getting the movie with highest likes within these friends' network
const popularMovie = newFriend.getMovieWithHighestLikesAmongFriends();
console.log("Return originated from getMovieWithHighestLikesAmongFriends", popularMovie);

const lauraMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Laura Silva");
const jackieMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Jackie Lima");
const maryMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Mary Duarte");
const ildaMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Ilda Neta");
const gilmaraMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Gilmara Pimentel");
const adrianaMovies =
  newFriend.depthFirstSearchOnFriends_RecursivelyMode("Adriana Winkelman");

function allMovies(personMoviesList) {
  let highestLikes = 0;
  let movieName = "";
  let friendName = "";

  personMoviesList.forEach((item) => {
    if (item.likes > highestLikes) {
      highestLikes = item.likes;
      movieName = item.title;
      friendName = item.friendNetwork;
    }
  });

  return {
    title: movieName,
    likes: highestLikes,
    friendNetwork: friendName,
  };
}

const lauraTopMovie = allMovies(lauraMovies);
const jackieTopMovie = allMovies(jackieMovies);
const maryTopMovie = allMovies(maryMovies);
const ildaTopMovie = allMovies(ildaMovies);
const gilmaraTopMovie = allMovies(gilmaraMovies);
const adrianaTopMovie = allMovies(adrianaMovies);

const listOfTopMovies = [];
listOfTopMovies.push(
  lauraTopMovie,
  jackieTopMovie,
  maryTopMovie,
  ildaTopMovie,
  gilmaraTopMovie,
  adrianaTopMovie
);

function findTopMovie(allTopMoviesPerPerson) {
  return allMovies(allTopMoviesPerPerson);
}

const mostLikedMovie = findTopMovie(listOfTopMovies);
console.log("Return originated from the depth first search", mostLikedMovie);

module.exports = SocialNetworkGraph;
