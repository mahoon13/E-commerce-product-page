import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetails = (props) => {
  return (
    <div className="flex mobile:flex-col justify-between sm:py-[5rem] sm:px-[2rem]">
      <ProductGallery images={props.product.images} />
      <ProductInfo
        info={props.product.info}
        count={props.count}
        setCount={props.setCount}
        addProductToCard={() =>
          props.addProductToCard(props.product, props.count)
        }
      />
    </div>
  );
};

export default ProductDetails;
