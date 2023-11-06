import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/NavBar";
import PhotoGrid from "./components/PhotoGrid";

function App() {

    const [activeTab, setActiveTab] = useState('grid1');

  // const [gridType, setGridType] = useState('grid');
  //
  // const toggleGridType = () => {
  //   setGridType(prevGridType => prevGridType === 'grid' ? 'list' : 'grid');
  // };
  //
  //
  // // Пример компонента для показа картинок
  // const ImageItem = ({ image }) => {
  //   return (
  //       <div className="image-item">
  //         <img src={image.url} alt={image.title} />
  //         <h3>{image.title}</h3>
  //       </div>
  //   );
  // };
  //
  // // Пример данных для картинок
  // const images = [
  //   { id: 1, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 1' },
  //   { id: 2, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 2' },
  //   { id: 3, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 3' },
  //   { id: 4, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 4' },
  //   { id: 5, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 5' },
  //   { id: 6, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 6' },
  //   { id: 7, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 7' },
  //   { id: 8, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 8' },
  //   { id: 9, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 9' },
  //   { id: 10, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 10' },
  // ];

  return (
    // <div className={`image-grid ${gridType === 'grid' ? 'grid' : 'list'}`}>
    //   <nav>
    //     <button onClick={toggleGridType}>
    //       {gridType === 'grid' ? 'Переключить на список' : 'Переключить на сетку'}
    //     </button>
    //   </nav>
    //   <div className={`image-grid ${gridType}`}>
    //     {images.map(image => (
    //         <ImageItem key={image.id} image={image} />
    //     ))}
    //   </div>
    // </div>

      <div>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <PhotoGrid activeTab={activeTab} />
      </div>
  );
}

export default App;
