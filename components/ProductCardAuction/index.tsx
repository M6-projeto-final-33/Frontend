import Image from "next/image";
import { Background, GradientLayer, ProductCardAuctionContainer, ProductCardAuctionContainer1, ProductCardAuctionContainer2, ProductCardAuctionContent1, ProductCardAuctionContent2 } from "./styles";
import Timer from "../../assets/time_icon.svg"
import Set from "../../assets/seta_direita.svg"
import { IProductCardProps } from "../ProductCard";

const ProductCardAuction = ({ product }: IProductCardProps) => {
    return (
        <ProductCardAuctionContainer>
            <ProductCardAuctionContainer1>

                <Background>
                    <Image
                        className="background_image"
                        src={product.imageUrl}
                        width={328}
                        height={238}
                        alt="car"
                    />
                </Background>
                <GradientLayer className="gradient_layer" />

                <ProductCardAuctionContent1>
                    <div className="timer_container">
                        <Image
                            src={Timer}
                            width={20}
                            height={20}
                            alt="car"
                        />
                        <h3 className="timer">01:58:00</h3>
                    </div>
                    <h2 className="product_name">{product.title}</h2>
                    <h3 className="product_description">{product.description}</h3>
                    <div className="product_advertiser">
                        <figure className="advertiser_figure">
                            <Image
                                className="advertiser_profile"
                                src={product.advertiserUrl}
                                width={1000}
                                height={600}
                                alt="profile"
                            />
                        </figure>
                        <h3 className="advertiser_name">{product.advertiser}</h3>
                    </div>
                    <div className="product_down_info">
                        <div className="product_numbers">
                            <h3 className="product_button">{product.year}</h3>
                            <h3 className="product_button">{product.kilometers} KM</h3>
                        </div>
                        <h3 className="product_value">R$ {product.value}</h3>
                    </div>
                </ProductCardAuctionContent1>

            </ProductCardAuctionContainer1>
            <ProductCardAuctionContainer2>
                <ProductCardAuctionContent2>
                    <h2>Acessar página do leilão</h2>
                    <Image
                        className="background_image"
                        src={Set}
                        width={20}
                        height={20}
                        alt="car"
                    />
                </ProductCardAuctionContent2>
            </ProductCardAuctionContainer2>
        </ProductCardAuctionContainer>
    )
}

export default ProductCardAuction
