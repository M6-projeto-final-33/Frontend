import { IAd } from "../../interfaces/IAd";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard";
import { LinkPage, StyledCarousel } from "./style";
import { useEffect, useRef, useState } from "react";
import ProductCardAuction from "../ProductCardAuction";

interface ICarouselListing {
  id?: string;
  title: string;
  adList: IAd[];
  auction?: boolean;
}

const CarouselListing = ({
  title,
  adList,
  auction,
  id,
}: ICarouselListing): JSX.Element => {
  const carousel = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    carousel.current &&
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <LinkPage id={id} />
      <StyledCarousel>
        <motion.h2
          id={id}
          className="title"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        <div className="content">
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.ul
              className="inner"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 600 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {adList.map((ad) => (
                <motion.li key={ad.id} className="item">
                  {auction ? (
                    <ProductCardAuction product={ad} />
                  ) : (
                    <ProductCard product={ad} />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </StyledCarousel>
    </>
  );
};

export default CarouselListing;
