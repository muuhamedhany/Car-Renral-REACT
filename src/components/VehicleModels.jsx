import cars from '../data/cars.json';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import audiShow from '../images/modelsShow/audiShow.png';
import benzShow from '../images/modelsShow/benzShow.png';
import bmwShow from '../images/modelsShow/bmwShow.png';
import golf6Show from '../images/modelsShow/golf6Show.png';
import passatShow from '../images/modelsShow/passatShow.png';
import toyotaShow from '../images/modelsShow/toyotaShow.png';

const imageMap = {
  audiShow,
  benzShow,
  bmwShow,
  golf6Show,
  passatShow,
  toyotaShow,
};

const VehicleModels = () => {
  return (
    <div className="cont">
      <div className="grid md:grid-cols-3 gap-10 mt-30">
        {cars.map((car) => {
          return (
            <div
              className="bg-surface shadowPrim rounded-[16px]
             border-[1px] border-[#b0ada958]"
            >
              <LazyLoadImage
                src={imageMap[car.imgShow]}
                className=" rounded-t-[16px] w-full"
                alt={car.name}
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: '500ms' },
                }}
                effect="blur"
              />

              <div className="md:px-10 px-7 flex flex-col">
                <div className="  py-3 flex justify-between items-center">
                  <div>
                    <h1 className="Normal font-semibold">{car.name}</h1>
                  </div>

                  <div className="flex flex-col items-end">
                    <h1 className="font-bold Heading2">${car.pricePerDay}</h1>
                    <h1 className="Paragraph">per day</h1>
                  </div>
                </div>

                <div className="px-5 mt-5 grid grid-cols-2 text-[#b0ada9]">
                  <div className="flex flex-col gap-3">
                    <h1>{car.specs.Model}</h1>
                    <h1>{car.specs.Transmission}</h1>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <h1>{car.specs.Doors}</h1>
                    <h1>{car.specs.Fuel}</h1>
                  </div>
                </div>

                <div className="grid col-span-2 text-center my-5">
                  <a href="/" className="primary-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleModels;
