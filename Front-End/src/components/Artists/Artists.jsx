import './Artists.css'
import loadingImage from "../../assets/loading.gif"
import { getUserTopArtist } from '../../services/getUserTopArtist'
import { useState, useEffect } from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'

const Artists = () => {
  const [topArtists, setTopArtists] = useState([])

  useEffect(() => {
    async function fetchArtists() {
      const artistFetch = await getUserTopArtist()
      const artistList = await artistFetch.items
      setTopArtists(artistList)
    }
    fetchArtists()
  }, [])

  return (
    <div id='artist-container'>
      {topArtists && topArtists.length > 0 ? topArtists.map((artist) => {
          return <ArtistCard key={artist.id} artistData={artist}/>
        }) : (
            <img id="loading-image" src={loadingImage} alt="loading image" />
          )}
    </div>
  )
}

export default Artists
