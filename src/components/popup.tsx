import React from 'react';
import { Link } from 'react-router-dom';

interface MediaItems {
  name1: string;
  path1: string;
  name2: string;
  path2: string;
  name3: string;
  path3: string;
  name4: string;
  path4: string;
}

interface PopupProps {
  mediaItems: MediaItems;
}

const Popup: React.FC<PopupProps> = ({ mediaItems }) => {
  return (
    <div className='w-40 h-32 rounded rounded-md py-1 mr-8 px-2 bg-gray-800 text-center' >
      <Link to={mediaItems.path1} >
        <p className=''>{mediaItems.name1}</p>
      </Link>
      <Link to={mediaItems.path2}>
        <p className='py-1'>{mediaItems.name2}</p>
      </Link>
      <Link to={mediaItems.path3} >
        <p className=''>{mediaItems.name3}</p>
      </Link>
      <Link to={mediaItems.path4}>
        <p className='py-1'>{mediaItems.name4}</p>
      </Link>
    </div>
  );
};

export default Popup;
