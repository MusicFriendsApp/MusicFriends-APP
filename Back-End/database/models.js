const Artist = require('../api/models/artist.model')
const Follow = require('../api/models/follow.model')
const Genre = require('../api/models/genre.model')
const Post = require('../api/models/post.model')
const Track = require('../api/models/track.model')
const User = require('../api/models/user.model')
const UserArtist = require('../api/models/userartists.model')
const UserGenres = require('../api/models/usergenres.model')
const ArtistTracks = require('../api/models/artisttracks.model')
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
    User.belongsToMany(User, {through: Follow, as: 'following_user_id'})
    User.hasMany(Post)
    Post.belongsTo(User)
    Artist.belongsToMany(Track, {through: ArtistTracks})
    Track.belongsToMany(Artist, {through: ArtistTracks})
    Artist.belongsToMany(Genre, {through: ArtistGenres})
    Genre.belongsToMany(Artist, {through: ArtistGenres})
    Post.belongsTo(Post, {through: 'PostParent', as: 'children_id'})

    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = addRelationsToModels