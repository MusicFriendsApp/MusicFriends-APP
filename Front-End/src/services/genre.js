export const addUserGenres = async (genre_name) => {
    try {
      const {data} = await api.post("/genre/addGenre", {
          genre_name: genre_name,
      })
      return data
    } catch (error) {
      console.log(error)
    }
  }
  