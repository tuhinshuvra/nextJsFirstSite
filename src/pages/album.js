import Image from 'next/image';
import React from 'react';

const AlbumPage = () => {
    return (
        <div>
            {/* <img
                src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
                alt=""
                width="100%"
            /> */}
            <Image
                src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png"
                alt=""
                width={500}
                height={500}
            ></Image>
        </div >
    );
};

export default AlbumPage;