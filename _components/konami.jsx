// KonamiCode.js
import React from 'react';
import Konami from 'react-konami-code';
import Image from 'next/image';

const KonamiCode = ({ onKonami }) => {
  return (
    <Konami action={() => onKonami()}>
      <>
        <div className="moving-image-container">
          <Image src='/images/mario.gif' alt='Mario' unoptimized width={200} height={235} />
        </div>
        <audio id="konamiAudio" src="/sounds/Overworld.mp3" loop />
      </>
    </Konami>
  );
};

export default KonamiCode;
