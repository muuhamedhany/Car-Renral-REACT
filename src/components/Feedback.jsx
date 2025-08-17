import React from 'react';
import pfp1 from '../images/testimonials/DexterMorgan.png';
import pfp2 from '../images/testimonials/SaulGoodman.png';

const Feedback = (props) => {
  return (
    <div className={`bg-[#ff510008]  py-30 mb-${props.mb}`}>
      <div className="cont grid gap-15  ">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="Normal font-semibold">Reviewed by People</h1>
          <h1 className="Heading font-bold">Client's Testimonials</h1>
          <p className="Paragraph text-[#8f8e8b] md:w-200 mt-5">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="grid feedback-card shadowPrim">
            <p className="Normal font-[500]">
              "Let me tell ya, folks — we grabbed a sweet ride from this site,
              smooth as silk. Booking? A total breeze. Price? Practically a
              steal. You’d be crazy not to try it."
            </p>

            <div className="flex items-center gap-5">
              <img src={pfp2} className="rounded-[50%] w-[70px]" />
              <div className="">
                <h1 className="font-bold Normal">Jimmy Mcgill</h1>
                <h1 className="Normal">Albuquerque</h1>
              </div>
            </div>
          </div>

          <div className="grid feedback-card shadowPrim">
            <p className="Normal font-[500]">
              "I rented a car from this site. The process was clean, precise…
              almost surgical. No complications, no surprises. Just efficiency
              at a price even I couldn’t kill."
            </p>

            <div className="flex items-center gap-5">
              <img src={pfp1} className="rounded-[50%] w-[70px]" />
              <div className="">
                <h1 className="font-bold Normal">Dexter Morgan</h1>
                <h1 className="Normal">Miami</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
