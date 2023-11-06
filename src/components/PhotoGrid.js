import React from 'react';

const photos1 = [
    { id: 1, url: 'https://avatars.mds.yandex.net/get-altay/1868686/2a0000016b426fd21377fc2ecea42293ba55/XL', title: 'Картинка 1', alt: 'photo 1' },
    { id: 2, url: 'https://w.forfun.com/fetch/5f/5fae8b9ce29a10950b001db52779ca78.jpeg', title: 'Картинка 2', alt: 'photo 2' },
    { id: 3, url: 'https://avatars.mds.yandex.net/get-mpic/5253277/img_id2022416321623944703.jpeg/9', title: 'Картинка 3', alt: 'photo 3' },
    { id: 4, url: 'https://w.forfun.com/fetch/0d/0d325a7b06397ad7ebbb3988b1cef9d2.jpeg', title: 'Картинка 4', alt: 'photo 4' },
    { id: 5, url: 'https://www.wallpaperflare.com/static/27/787/660/cat-muzzle-eyes-brown-wallpaper.jpg', title: 'Картинка 5', alt: 'photo 5' },

];

const photos2 = [

    { id: 6, url: 'https://w.forfun.com/fetch/0d/0d325a7b06397ad7ebbb3988b1cef9d2.jpeg', title: 'Картинка 6', alt: 'photo 6' },
    { id: 7, url: 'data:image/jpeg;base64,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', title: 'Картинка 7', alt: 'photo 7' },
    { id: 8, url: 'https://www.wallpaperflare.com/static/27/787/660/cat-muzzle-eyes-brown-wallpaper.jpg', title: 'Картинка 8', alt: 'photo 8' },
    { id: 9, url: 'https://avatars.mds.yandex.net/get-mpic/5253277/img_id2022416321623944703.jpeg/9', title: 'Картинка 9', alt: 'photo 9' },
    { id: 10, url: 'https://w.forfun.com/fetch/5f/5fae8b9ce29a10950b001db52779ca78.jpeg', title: 'Картинка 10', alt: 'photo 10' },

];

const PhotoGrid = ({ activeTab }) => {
    const photos = activeTab === 'grid1' ? photos1 : photos2;

    return (
        <div className="photo-grid">
            {photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.alt} className="photo" />
            ))}
        </div>
    );
};

export default PhotoGrid;
