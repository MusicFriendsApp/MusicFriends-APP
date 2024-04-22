const Artist = require('../api/models/artist.model')
const Follow = require('../api/models/follow.model')
const Genre = require('../api/models/genre.model')
const Post = require('../api/models/post.model')
const Track = require('../api/models/track.model')
const User = require('../api/models/user.model')
const UserArtist = require('../api/models/userartists.model')
const UserGenres = require('../api/models/usergenres.model')
const UserGenres = require('../api/models/usergenres.model')

const addRelationsToModels = () => {
  try {
    User.belongsToMany(Artist, {through: UserArtist})
    Artist.belongsToMany(User, {through: UserArtist})
    User.belongsToMany(Genre, {through: UserGenres})
    Genre.belongsToMany(User, {through: UserGenres})
    User.belongsToMany(Track, {through: UserTracks})
    Track.belongsToMany(User, {through: UserTracks})
  } catch (error) {
    console.log(error)
  }
}

module.exports = addRelationsToModels