import Image from "next/image"
import { ProductCardContainer, ProductCardContent } from "./styles"

export interface IProduct {
    title: string
    description: string
    imageUrl: string
    advertiser: string
    advertiserUrl: string
    kilometers: string
    year: string
    value: string
}

export interface IProductCardProps {
    product: IProduct
}

const ProductCard = ({ product }: IProductCardProps) => {

    const format = (title: string, maxLen: number) => {
        if (title.length > maxLen) {
            return title.substring(0, maxLen) + "..."
        }
        return title
    }

    return (
        <ProductCardContainer>
            <ProductCardContent>
                <div className="product_upper_info">
                    <figure className="product_image_container">
                        <Image className="product_image" src={product.imageUrl} width={350} height={200} alt="car" />
                    </figure>
                    <h2 className="product_title">{format(product.title, 35)}</h2>
                    <h3 className="product_description">{format(product.description, 80)}</h3>
                </div>
                <div className="product_advertiser">
                    <figure className="advertiser_figure">
                        <Image className="advertiser_profile" src={product.advertiserUrl} width={350} height={200} alt="profile" />
                    </figure>
                    <h3 className="advertiser_name">{product.advertiser}</h3>
                </div>
                <div className="product_down_info">
                    <div className="product_numbers">
                        <h3 className="product_button">{product.kilometers} KM</h3>
                        <h3 className="product_button">{product.year}</h3>
                    </div>
                    <h3 className="product_value">R$ {product.value}</h3>
                </div>
            </ProductCardContent>
        </ProductCardContainer>
    )
}

export default ProductCard
