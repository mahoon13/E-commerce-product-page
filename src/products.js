import image1 from "./assets/image-product-1.jpg";
import image1_thumbnail from "./assets/image-product-1-thumbnail.jpg";

import image2 from "./assets/image-product-2.jpg";
import image2_thumbnail from "./assets/image-product-2-thumbnail.jpg";

import image3 from "./assets/image-product-3.jpg";
import image3_thumbnail from "./assets/image-product-3-thumbnail.jpg";

import image4 from "./assets/image-product-4.jpg";
import image4_thumbnail from "./assets/image-product-4-thumbnail.jpg";

// Api response like.Array of products objects
const products = [
  {
    images: [
      { view: image1, thumbnail: image1_thumbnail },
      { view: image2, thumbnail: image2_thumbnail },
      { view: image3, thumbnail: image3_thumbnail },
      { view: image4, thumbnail: image4_thumbnail },
    ],
    info: {
      company: "Sneaker Company",
      productName: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      realPrice: "$250.00",
      hasDiscount: true,
      discountPercent: "50%",
      discountPrice: "$125.00",
      productId: 1,
    },
  },
];

export default products;
