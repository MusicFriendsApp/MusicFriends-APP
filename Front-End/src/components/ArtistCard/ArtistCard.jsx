import './ArtistCard.css'
import { useState } from 'react';

const ArtistCard= ({artistData}) => {
  const [artistImage, setArtistImage] = useState('')
  console.log(artistData)
  if(artistData.images) {
    setArtistImage(artistData.images[1].url)
  } else {
    setArtistImage('/src/assests/defaultProfilePicture.svg')
  }

  return (
    <div id='artist-card'>
      <div id='artist-header'>
        <img id='artist-avatar' src={artistImage}/>
        <h4 id='artist-name'>{artistData.name}</h4>
      </div>
    </div>
  );
};

export default ArtistCard