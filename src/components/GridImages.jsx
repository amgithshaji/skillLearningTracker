import React from 'react'
import Masonry from './Masonry';


function GridImages() {
    const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "",
      height: 450,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 450,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 900,
    },
     {
      id: "4",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 450,
    },
         {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 450,
    },
       {
      id: "6",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "",
      height: 450,
    },
     {
      id: "7",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "",
      height: 450,
    },
      {
      id: "8",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "",
      height: 450,
    },
       {
      id: "9",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "",
      height: 450,
    },
    
];
  return (
    <div className='mt-5' >
        <Masonry
  items={items}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>

    </div>
  )
}

export default GridImages