const Artist = require('../api/models/artist.model')
const Follow = require('../api/models/follow.model')
const Genre = require('../api/models/genre.model')
const Post = require('../api/models/post.model')
const Track = require('../api/models/track.model')
const User = require('../api/models/user.model')
const UserArtist = require('../api/models/userartists.model')
const UserGenres = require('../api/models/usergenres.model')
const UserGenres = require('../api/models/usergenres.model')
const UserTracks = require('../api/models/usertracks.model')
const ArtistGenres = require('../api/models/artistgenres.model')

const addRelationsToModels = () => {
  try {
    User.belongsToMany(Artist, {through: UserArtist})
    Artist.belongsToMany(User, {through: UserArtist})
    User.belongsToMany(Genre, {through: UserGenres})
    Genre.belongsToMany(User, {through: UserGenres})
    User.belongsToMany(Track, {through: UserTracks})
    Track.belongsToMany(User, {through: UserTracks})
    User.belongsToMany(User, {through: Follow, as: following})
    User.belongsToMany(User, {through: Follow, as: followed})
    User.belongsToMany(Post)
    Post.belongsTo(User)
    Track.belongsTo(Artist)
    Artist.belongsToMany(Track)
    Artist.belongsToMany(Genre, {through: ArtistGenres})
    Genre.belongsToMany(Artist, {through: ArtistGenres})

  } catch (error) {
    console.log(error)
  }
}

module.exports = addRelationsToModels