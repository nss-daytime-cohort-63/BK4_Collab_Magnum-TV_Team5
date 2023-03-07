const database = {
  //Actors Array for the shows
  actors: [{
    id: 1,
    name: "John Smith",
  },{
    id: 2,
    name: "Jerry Michaels",
  },{
    id: 3,
    name: "Jim Jones",
  },{
    id: 4,
    name: "Martin Matthews",
  },{
    id: 5,
    name: "Glen Jackson",
  }],

  //Genres Array for the shows
  genres: [{
    id: 1,
    type: "Action",
  },{
    id: 2,
    type: "Comedy",
  },{
    id: 3,
    type: "Horror",
  },{
    id: 4,
    type: "Adventure",
  }],

  //Array of shows
  shows: [{
    id: 1,
    showName: "The Couldesac",
    genreId: 2,
    actorId: 4,
  },{
    id: 2,
    showName: "Hospital ER",
    genreId: 1,
    actorId: 3,
  },{
    id: 3,
    showName: "Scare Tactics",
    genreId: 3,
    actorId: 2,
  },{
    id: 4,
    showName: "The Adventure Zone",
    genreId: 4,
    actorId: 1,
  }]
}

export const getShows = () => {
  return database.shows.map(shows =>({ ...shows}))
}

export const getGenres = () => {
  return database.genres.map(genres =>({ ...genres }))
}

export const getActors = () => {
  return database.actors.map(actors =>({ ...actors}))
}