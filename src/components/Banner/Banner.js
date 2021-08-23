import React from 'react';
import './styles.scss';
import SeaImage from '../../assets/sea.jpeg'

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <h1>CV Efishery Indonesia</h1>
        <p>Penyedia Ikan Dengan Kualitas Terbaik yang pernah ada</p>
      </div>
      <img src={SeaImage} alt="Pokemon Banner" className="image"/>
    </div>
  )
}
