import Image from "next/image";
import { ProductCardContainer, ProductCardContent } from "./styles";
import { IAd } from "../../interfaces/IAd";
import transformCurrency from "../../utils/transformCurrency";
import UserIcon from "../UserIcon";

export interface IProductCardProps {
  product: IAd;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const format = (title: string, maxLen: number) => {
    if (title.length > maxLen) {
      return title.substring(0, maxLen) + "...";
    }
    return title;
  };

  return (
    <ProductCardContainer>
      <ProductCardContent>
        <div className="product_upper_info">
          <figure className="product_image_container">
            <Image
              className="product_image"
              src={product.coverImg}
              width={350}
              height={200}
              alt="car"
            />
          </figure>
          <h2 className="product_title">{format(product.title, 35)}</h2>
          <h3 className="product_description">
            {format(product.description, 80)}
          </h3>
        </div>
        <div className="product_advertiser">
          {product.user.userImage ? (
            <>
              <figure className="advertiser_figure">
                <Image
                  className="advertiser_profile"
                  src={product.user.userImage}
                  width={350}
                  height={200}
                  alt="profile"
                />
              </figure>
              <h3 className="advertiser_name">{product.user.name}</h3>
            </>
          ) : (
            <UserIcon user={product.user} />
          )}
        </div>
        <div className="product_down_info">
          <div className="product_numbers">
            <h3 className="product_button">{product.mileage} KM</h3>
            <h3 className="product_button">{product.year}</h3>
          </div>
          <h3 className="product_value">{transformCurrency(product.price)}</h3>
        </div>
      </ProductCardContent>
    </ProductCardContainer>
  );
};

export default ProductCard;
