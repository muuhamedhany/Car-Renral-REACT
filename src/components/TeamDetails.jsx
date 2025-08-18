import team from '../data/team.json';
import dexter from '../images/team/dexter.png';
import masuka from '../images/team/masuka.png';
import debra from '../images/team/deb.png';
import batista from '../images/team/laPassion.png';
import doakes from '../images/team/doakes.png';
import rita from '../images/team/rita.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const imageMap = {
  dexter,
  masuka,
  debra,
  batista,
  doakes,
  rita,
};

const TeamDetails = () => {
  return (
    <div className=" mt-25 cont">
      <div className="grid md:grid-cols-3 place-items-center gap-10">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-surface shadowPrim  rounded-[16px]
             border border-[#b0ada958] w-[300px] text-center "
          >
            <LazyLoadImage
              src={imageMap[member.image]}
              alt={member.name}
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: '500ms' },
              }}
              className="rounded-t-[16px] w-full"
              effect="blur"
            />

            <div className="py-7">
              <h2 className="Normal font-semibold mb-2">{member.name}</h2>
              <p className="text-[#8f8e8b] ">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
