import Image from 'next/image';
import React from 'react';
import NextImg from '../assets/Getting-Started-with-NextJS-Inside.webp'

const AlbumPage = () => {
    return (
        <div>
            {/* <img
                src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS-Inside.jpg"
                alt=""
                width="100%"
            /> */}
            <Image
                src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS-Inside.jpg"
                alt=""
                width={500}
                height={500}
                layout='responsive'
            ></Image>

            <Image
                src={NextImg}
                alt=""
                width={500}
                height={500}
                layout='responsive'
            ></Image>
        </div >
    );
};

export default AlbumPage;