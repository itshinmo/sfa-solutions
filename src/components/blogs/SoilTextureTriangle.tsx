import STTThumbnail from "@/assets/blogs/soil-texture-triangle/thumbnail.jpeg";

const SoilTextureTriangle = () => {
  return (
    <main className="flex flex-col justify-center gap-y-8 py-12">
      <section className="blogcontainer flex flex-col justify-center gap-y-8">
        <h1 className="h1 text-start!">
          Detailed Examination of the 12 Soil Texture Classes in the Soil
          Texture Triangle
        </h1>

        <p className="p font-medium">
          Below is a much more detailed examination of each of the 12 soil
          texture classes found in the soil texture triangle, focusing on
          physical characteristics, hydraulic behavior, irrigation management,
          and their effects on plant root development. The explanations use
          specialized concepts from field and agricultural management.
        </p>

        <div className="mx-auto w-xs">
          <div className="image-container">
            <img
              src={STTThumbnail}
              alt="soil-texture-triangle-thumbnail"
            />
          </div>
        </div>
      </section>

      <section className="blogcontainer flex flex-col justify-center">
        <h2 className="h2 mb-4">1. Sandy Soil Group</h2>

        <div className="flex flex-col justify-center gap-y-8">
          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">1.1. Sand</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This soil contains more than 85% sand particles
                  (coarse-textured particles). Due to the presence of very large
                  macropores, water infiltrates this soil extremely quickly and
                  leaves the root development zone through deep percolation.
                </p>

                <p className="p font-medium">
                  The cation exchange capacity (CEC) of these soils is close to
                  zero, meaning they have very little ability to retain
                  nutrients, and fertilizers are rapidly leached away.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                Agricultural production in this soil requires the use of drip
                irrigation systems with very short irrigation intervals (even
                several times per day) and drip fertigation systems. Adding
                large amounts of organic matter (compost and biochar) is
                necessary to increase water-holding capacity.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">1.2. Loamy Sand</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This texture contains a high percentage of sand with a small
                  amount of clay and silt. The addition of even a small amount
                  of finer particles allows sand grains to bind together
                  slightly better, preventing the soil from being completely
                  loose and structureless.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                The water-holding capacity (field capacity) is slightly higher
                than pure sand, but evaporation and drainage are still high.
                Plants that require abundant oxygen around their roots and are
                sensitive to moisture-related fungal diseases (such as peanuts
                and some tuber crops) perform well in this soil.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">1.3. Sandy Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  Containing a large proportion of sand along with a balanced
                  distribution of silt and clay, this soil is one of the most
                  preferred textures for gardeners and farmers. It provides good
                  drainage, while the clay content is sufficient to retain
                  moisture and nutrients for several days.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                This soil warms up quickly in spring, making it ideal for
                early-season crops. The risk of waterlogging is very low, and it
                is highly compatible with both sprinkler and drip irrigation
                systems.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="blogcontainer flex flex-col justify-center">
        <h2 className="h2 mb-4">2. Silty Soil Group</h2>

        <div className="flex flex-col justify-center gap-y-8">
          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">2.1. Silt</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This soil consists mainly of silt particles. Silt particles
                  are intermediate in size between sand and clay.
                </p>

                <p className="p font-medium">
                  When dry, this soil has a texture similar to talcum powder or
                  baby powder. When wet, it feels smooth and slippery but is not
                  sticky.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                The biggest challenges of silty soils are their high
                vulnerability to water and wind erosion, as well as the
                formation of surface crusting. Crusting prevents seedlings from
                emerging from the soil. Irrigation should be performed using
                very fine droplets (in sprinkler systems) to prevent droplet
                impact from damaging the surface structure.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">2.2. Silt Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This texture contains a high percentage of silt along with
                  balanced amounts of clay and sand. It is considered one of the
                  most fertile soils in the world. Many alluvial soils near
                  major rivers belong to this category.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                The available water capacity of this soil is among the highest
                for plant growth. However, due to its softness and weak
                structure, heavy agricultural machinery can quickly cause
                compaction, reducing soil aeration.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="blogcontainer flex flex-col justify-center">
        <h2 className="h2 mb-4">3. Loamy Soil Group (The Balance Point)</h2>

        <div className="flex flex-col justify-center gap-y-8">
          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">3.1. Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This texture represents the ideal agricultural soil: a
                  balanced combination of the physical properties of all three
                  particle types.
                </p>

                <p className="p font-medium">
                  Clay retains nutrients, sand improves aeration and allows
                  excess water to drain, and silt provides a soft medium for
                  root penetration.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                Almost all plant species grow well in this soil. Under drip
                irrigation, the wetting pattern (soil moisture bulb) usually
                develops a symmetrical, apple-shaped distribution, which is
                considered one of the best patterns for delivering water to the
                root zone.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">3.2. Sandy Clay Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  This soil contains a significant amount of sand, but its clay
                  percentage is high enough (approximately 20–35%) that
                  clay-like properties become noticeable. When wet, it can be
                  shaped into a short ribbon, but it breaks easily.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                During dry summers, this soil does not develop deep cracks
                because of the sand content. However, the clay retains water for
                longer periods between irrigation events. It has moderate
                permeability.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">3.3. Silty Clay Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  A soil dominated by fine particles (silt and clay) with a very
                  high water-holding capacity. Its texture is soft but sticky.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                Drainage in this soil is relatively slow. After flood irrigation
                or heavy rainfall, it takes a long time for the soil to dry and
                return to field capacity. Proper timing of tillage operations is
                essential to prevent the formation of hard clods.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">3.4. Clay Loam</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  A dense soil containing approximately 27–40% clay. This soil
                  has high fertility potential because minerals and nutrients
                  are effectively retained within clay crystal structures.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                This soil has high physical resistance to root growth. Tuber
                crops (such as potatoes and carrots) may develop deformities in
                this soil. Irrigation should be applied at a low infiltration
                rate to prevent surface runoff.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className="blogcontainer flex flex-col justify-center">
        <h2 className="h2 mb-4">4. Clay-Rich Soil Group</h2>

        <div className="flex flex-col justify-center gap-y-8">
          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">4.1. Sandy Clay</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  Contains more than 35% clay along with a high percentage of
                  sand. Clay particles fill the spaces between sand particles.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                Despite containing sand, this soil behaves hydraulically like a
                heavy clay soil. When dry, it becomes extremely hard and
                cement-like; when wet, it becomes heavy and difficult to work
                with. Organic matter management is very important to create
                secondary pore spaces and improve structure.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">4.2. Silty Clay</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  A soil with extremely high stickiness, containing more than
                  40% clay and a high percentage of silt. There are very few
                  coarse particles available to create large pores.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                Water infiltration is extremely slow in this soil. The wetting
                pattern under drip irrigation becomes very wide and shallow.
                Drip irrigation should use very low flow rates (for example,
                liters per hour) and longer irrigation durations so water has
                enough time to infiltrate instead of accumulating on the
                surface.
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center ps-6">
            <h3 className="h3">4.3. Clay</h3>

            <div className="flex flex-col justify-center ps-6">
              <div className="mb-6 flex flex-col justify-center gap-4">
                <p className="p font-medium">
                  A pure clay texture containing more than 40% clay (and in some
                  cases above 60%). This soil contains countless micropores that
                  hold water with very strong matric forces. The water can
                  become so tightly bound that it becomes unavailable to plants,
                  causing plants to reach the permanent wilting point even while
                  moisture remains in the soil.
                </p>
              </div>

              <h4 className="h4">Management:</h4>

              <p className="p font-medium">
                The greatest problems with this soil are severe oxygen
                deficiency (root suffocation) and the risk of root-rot diseases
                (such as Phytophthora). When dry, these soils develop extremely
                deep and wide cracks that can damage fine root hairs.
                Improvement methods include adding sand, coarse materials,
                perlite, and using crop rotations with deep-rooted plants to
                break compacted layers.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SoilTextureTriangle;
