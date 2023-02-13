import { useState } from "react";
import NextIcon from "../assets/icon-next.svg";
import PrevIcon from "../assets/icon-previous.svg";

const ProductGallery = (props) => {
  const [seletedImageIndex, setSelectedImageIndex] = useState(0);
  const maxImageIndex = props.images.length - 1;

  return (
    <div className="sm:w-[500px] flex-none flex flex-col gap-[2rem] ">
      <div className="relative">
        <PrevImageButton
          onclick={() => {
            if (seletedImageIndex === 0) {
              setSelectedImageIndex(maxImageIndex);
            } else setSelectedImageIndex(seletedImageIndex - 1);
          }}
        />
        <MainPicture image={props.images[seletedImageIndex].view} />
        <NextImageButton
          onclick={() => {
            if (seletedImageIndex === maxImageIndex) {
              setSelectedImageIndex(0);
            } else setSelectedImageIndex(seletedImageIndex + 1);
          }}
        />
      </div>
      <Gallery
        thumbnails={props.images.map((image) => image.thumbnail)}
        seletedThumbnailIndex={seletedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
    </div>
  );
};

function MainPicture(props) {
  return (
    <div className="sm:rounded-2xl overflow-hidden select-none">
      <img
        src={props.image}
        className="mobile:max-h-[400px] mobile:w-full mobile:object-cover mobile:object-center"
      />
    </div>
  );
}

function Gallery(props) {
  return (
    <div className="flex justify-between mobile:hidden">
      {props.thumbnails.map((thumbnail, i) => (
        <Thumbnail
          image={thumbnail}
          key={i}
          selected={i === props.seletedThumbnailIndex}
          onclick={() => {
            props.setSelectedImageIndex(i);
          }}
        />
      ))}
    </div>
  );
}

function Thumbnail(props) {
  return (
    <div
      className={`w-[100px] rounded-xl overflow-hidden cursor-pointer select-none ${
        props.selected ? "border-[3px] border-orange-500" : ""
      }`}
      onClick={props.onclick}
    >
      <img
        src={props.image}
        className={`${props.selected ? "opacity-30" : ""} hover:opacity-30`}
      />
    </div>
  );
}

function NextImageButton(props) {
  return (
    <div
      className="hidden mobile:flex bg-white absolute right-3 top-[calc(50%_-_20px)] rounded-full w-[40px] h-[40px] items-center justify-center cursor-pointer text-center select-none"
      onClick={props.onclick}
    >
      <img src={NextIcon} className="w-[10px] h-[13px]" />
    </div>
  );
}

function PrevImageButton(props) {
  return (
    <div
      className="hidden mobile:flex bg-white absolute left-3 top-[calc(50%_-_20px)] rounded-full w-[40px] h-[40px] items-center justify-center cursor-pointer select-none"
      onClick={props.onclick}
    >
      <img src={PrevIcon} className="w-[10px] h-[13px]" />
    </div>
  );
}

export default ProductGallery;
