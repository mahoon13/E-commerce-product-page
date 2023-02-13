import PlusIcon from "../assets/icon-plus.svg";
import MinusIcon from "../assets/icon-minus.svg";
import { ReactComponent as CartIcon } from "../assets/icon-cart.svg";

const ProductInfo = (props) => {
  return (
    <div className="flex flex-col gap-[2rem] mobile:gap-[1rem] sm:py-[4rem] sm:px-[6rem] mobile:p-[2rem]">
      <div>
        <CompanyName name={props.info.company} />
        <ProductName name={props.info.productName} />
      </div>

      <ProductDescription text={props.info.description} />

      <div className="flex flex-col gap-[5px]">
        {props.info.hasDiscount ? (
          <DiscaountedProductPrice
            discountPrice={props.info.discountPrice}
            discountPercent={props.info.discountPercent}
          />
        ) : (
          ""
        )}

        <ProductRealPrice
          price={props.info.realPrice}
          hasDiscount={props.info.hasDiscount}
        />
      </div>

      <div className="flex items-center gap-[1rem] mobile:flex-col">
        <CartController count={props.count} setCount={props.setCount} />
        <AddToCartButton
          onclick={() => {
            if (props.count !== 0) props.addProductToCard();
          }}
        />
      </div>
    </div>
  );
};

function CompanyName(props) {
  return (
    <p className="text-lg mobile:text-base text-orange-500 uppercase font-bold tracking-wide">
      {props.name}
    </p>
  );
}

function ProductName(props) {
  return (
    <h1 className="text-5xl font-bold text-stone-900 pt-[1rem] mobile:text-3xl mobile:pt-[.5rem]">
      {props.name}
    </h1>
  );
}

function ProductDescription(props) {
  return <p className="text-slate-400 font-bold">{props.text}</p>;
}

function DiscaountedProductPrice(props) {
  return (
    <div className="flex gap-[1rem] mobile:gap-[.5rem] items-center">
      <p className="text-3xl mobile:text-2xl font-bold">
        {props.discountPrice}
      </p>
      <div className="bg-orange-100 text-orange-500 font-bold px-[6px] rounded">
        {props.discountPercent}
      </div>
    </div>
  );
}

function ProductRealPrice(props) {
  if (props.hasDiscount) {
    return (
      <p className="line-through font-bold text-stone-400">{props.price}</p>
    );
  } else {
    return <p className="text-3xl mobile:text-xl font-bold">{props.price}</p>;
  }
}

function CartController(props) {
  return (
    <div className="flex items-center sm:gap-[3rem] bg-slate-100 p-[10px] npm rounded-lg mobile:w-full mobile:justify-between mobile:p-[1rem]">
      <Minus
        onclick={() => {
          if (props.count === 0) return;
          props.setCount(props.count - 1);
        }}
      />
      <div className="font-bold text-2xl text-stone-900 w-[18px] text-center select-none">
        {props.count}
      </div>
      <Plus onclick={() => props.setCount(props.count + 1)} />
    </div>
  );
}

function Minus(props) {
  return (
    <div
      className="w-[15px] cursor-pointer select-none"
      onClick={props.onclick}
    >
      <img src={MinusIcon} className="w-full" />
    </div>
  );
}

function Plus(props) {
  return (
    <div
      className="w-[15px] cursor-pointer select-none"
      onClick={props.onclick}
    >
      <img src={PlusIcon} className="w-full" />
    </div>
  );
}

function AddToCartButton(props) {
  return (
    <div
      className="flex gap-[1rem] mobile:gap-[.5rem] bg-orange-500 w-full justify-center py-[1rem] rounded-xl cursor-pointer items-center hover:bg-orange-300"
      onClick={props.onclick}
    >
      <CartIcon className="white-svg mobile:scale-[80%]" />
      <div className="text-white font-bold tracking-wide text-lg select-none mobile:text-base">
        Add to cart
      </div>
    </div>
  );
}

export default ProductInfo;
