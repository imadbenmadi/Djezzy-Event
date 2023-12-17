import React from 'react'

export default function Item_description() {
  return (
      <div style={{ boxShadow: "0px 0px 12px 0px gray" }} className=' p-2 rounded-2xl mt-8'>
          <p className="text-2xl underline font-semibold mt-4">Description:</p>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              justo eu urna ullamcorper facilisis. Integer interdum ultricies
              mi, ac scelerisque urna dictum nec. Fusce efficitur, nisl eget
              fringilla bibendum, lacus justo fermentum tortor, vel dictum
              turpis risus vel mauris.
          </p>
          <p>
              Suspendisse potenti. Duis tristique, velit eget facilisis mattis,
              urna dui feugiat libero, ac bibendum elit massa vel augue. Nullam
              in lacus vitae nulla fermentum tempus. Vestibulum non odio elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
          </p>
          <p>
              Vestibulum bibendum sapien id nisl imperdiet, eu tempus urna
              convallis. Phasellus vel fringilla mi. Nam bibendum, turpis et
              posuere feugiat, ligula mauris tincidunt elit, in facilisis dolor
              elit eu turpis. Fusce rhoncus quam vel efficitur fringilla. Donec
              scelerisque, arcu et venenatis facilisis, justo ex fringilla
              tellus, ut dignissim lectus velit sit amet lectus. Duis ultricies
              tellus in bibendum tincidunt. Nulla facilisi.
          </p>
          {/* Subtitle 1 */}
          <p className="font-semibold mt-4">Exploring New Horizons:</p>
          <p>
              Dive into uncharted territories where creativity meets innovation.
              Discover the possibilities that arise when pushing the boundaries
              of conventional thinking. Embrace the journey of exploration and
              the thrill of venturing into the unknown.
          </p>
          {/* Subtitle 2 */}
          <p className="font-semibold mt-4">Cultivating Resilience:</p>
          <p>
              Life's challenges are the building blocks of resilience. Cultivate
              the strength to navigate through adversity. Like a sturdy tree
              withstands the storm, develop resilience that allows you to stand
              tall in the face of life's uncertainties.
          </p>
          {/* Subtitle 3 */}
          <p className="font-semibold mt-4">Harmony of Diversity:</p>
          <p>
              Just as different notes come together to create a beautiful
              melody, embrace the diversity of experiences. Find harmony in the
              unique perspectives, and let the symphony of life enrich your
              journey.
          </p>
      </div>
  );
}
