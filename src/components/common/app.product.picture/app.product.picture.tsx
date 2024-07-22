import { Galleria, GalleriaProps, } from "primereact/galleria";
import './app.product.picture.css';

interface AppProductPictureProps extends GalleriaProps {}

const AppProductPicture: React.FC<AppProductPictureProps> = (props:any) => {
  const {value, numVisible, item, thumbnailsPosition , thumbnail, showThumbnailNavigators} = props; 

 const responsiveOptions = [
  {
      breakpoint: '991px',
      numVisible: 4,
  },
  {
      breakpoint: '767px',
      numVisible: 4,
  },
  {
      breakpoint: '575px',
      numVisible: 4,
  }
];

  return (
      <Galleria
        value={value}
        responsiveOptions={responsiveOptions}
        numVisible={numVisible}
        className="w-12 lg:w-6"
        item={item}
        thumbnail={thumbnail}
        thumbnailsPosition={thumbnailsPosition}
        showThumbnailNavigators={showThumbnailNavigators}

      />
  );
};

export default AppProductPicture;
