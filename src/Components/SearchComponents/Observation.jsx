import React from 'react'

export default function Observation() {
  return (
      <div
          style={{ boxShadow: "0px 0px 8px 0px gray" }}
          className="p-2 rounded-lg w-[50%] m-auto mt-[50px]"
      >
          <div className=" text-xl underline
           font-semibold mt-2">Observation</div>
          <p className="font-semibold mt-2">Brief Description:</p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              justo eu urna ullamcorper facilisis. Integer interdum ultricies
              mi, ac scelerisque urna dictum nec.
          </p>
          <p className="font-semibold mt-3">Challenges & Strength:</p>
          <p>
              Life's challenges build resilience. Cultivate strength to navigate
              adversity and stand tall in uncertainties.
          </p>
          <p className="font-semibold mt-3">Embracing Diversity:</p>
          <p>
              Like notes in a melody, embrace diverse experiences. Find harmony
              in unique perspectives, enriching your journey.
          </p>
      </div>
  );
}
