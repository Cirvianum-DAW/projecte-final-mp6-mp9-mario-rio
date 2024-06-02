import React from 'react';
import { Helmet } from 'react-helmet';

const SourcesPage = () => {
  return (
    <main className="container mx-auto mt-8 flex-1">
      <Helmet>
        <title>AirsoftMunteanu | Sources</title>
      </Helmet>
      <div className="container mt-8 mx-auto">
        <h1 className="font-bold mb-6 text-3xl">Image Sources</h1>
        <ul className="list-disc pl-8">
          <li className="mb-2">
            <a target="_blank" href="https://icons8.com/icon/yGcWL8copNNQ/facebook" rel="noopener noreferrer">Facebook</a> icon from <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://icons8.com/icon/32323/instagram" rel="noopener noreferrer">Instagram</a> icon from <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://icons8.com/icon/xWVjuc9hryql/twitter" rel="noopener noreferrer">Twitter</a> icon from <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://backiee.com/wallpaper/military/59194" rel="noopener noreferrer">Airsoft1</a> picture from <a target="_blank" href="https://backiee.com" rel="noopener noreferrer">Backiee</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://backiee.com/wallpaper/military/72449" rel="noopener noreferrer">Airsoft2</a> picture from <a target="_blank" href="https://backiee.com" rel="noopener noreferrer">Backiee</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://backiee.com/wallpaper/air-soft-battle-bb-guns/282040" rel="noopener noreferrer">Airsoft3</a> picture from <a target="_blank" href="https://backiee.com" rel="noopener noreferrer">Backiee</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://www.pngwing.com" rel="noopener noreferrer">Shop</a> pictures from <a target="_blank" href="https://www.pngwing.com" rel="noopener noreferrer">PNGWing</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://www.justbbguns.co.uk/wp-content/uploads/2022/11/Perfect-Airsoft-Stocking-Fillers-and-Christmas-Gifts.jpg" rel="noopener noreferrer">Aboutus1</a> picture from <a target="_blank" href="https://www.justbbguns.co.uk" rel="noopener noreferrer">JustBBGuns</a>
          </li>
          <li className="mb-2">
            <a target="_blank" href="https://wallpapercave.com/airsoft-wallpapers" rel="noopener noreferrer">Rest of about</a> pictures from <a target="_blank" href="https://wallpapercave.com/airsoft-wallpapers" rel="noopener noreferrer">WallpaperCave</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SourcesPage;
