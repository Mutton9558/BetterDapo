import "../App.css";

interface AdvertismentProps {
  image: string;
  captionText: string;
  captionPos: string;
}

const Advertisement: React.FC<AdvertismentProps> = ({
  image,
  captionText,
  captionPos,
}) => {
  return (
    <>
      <div id="container-ad">
        <div id="text-ad" className={captionPos}>
          <p>{captionText}</p>
        </div>
        <div id="background-ad">
          <img src={image} alt="image"></img>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
