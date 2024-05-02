import './ArtistCard.css'
import { useState, useEffect } from 'react';
import defaultImage from '../../assets/defaultProfilePicture.svg'

const ArtistCard= ({artistData}) => {
  const [artistImage, setArtistImage] = useState('')
  console.log(artistData)
  useEffect(() => {
    if (artistData.images && artistData.images.length > 1) {
      setArtistImage(artistData.images[1].url);
    } else {
      setArtistImage(defaultImage);
    }
  }, [artistData]);

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