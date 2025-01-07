import "../App.css";

interface AdvertismentProps {
  image: string;
  captionText: string;
}

const Advertisement: React.FC<AdvertismentProps> = ({ image, captionText }) => {
  return (
    <>
      <div id="container-ad">
        <div id="left-ad">
          <p>{captionText}</p>
        </div>
        <div id="right-ad">
          <img src={image} alt="image"></img>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
