// src/data/data.js
import daraz from "../assets/daraz.svg";
import homeshopping from "../assets/homeshopping.svg";
import mobilemall from "../assets/mobilemall.svg";
import productImage from "../assets/productImage.png";
import priceoye from "../assets/priceoye.svg";
import profile1 from "../assets/dealProfile.png";
import offercard1 from "../assets/offercard1.png";
import offercard2 from "../assets/offercard2.png";
import product from "../assets/product.png";
import banner from "../assets/banner.png";
import bannerDark from "../assets/bannerDark.png";

const carouselData = [
  {
    light: banner,
    dark: bannerDark,
    alt: "Image 1",
  },
  {
    light: banner,
    dark: bannerDark,
    alt: "Image 2",
  },
  {
    light: banner,
    dark: bannerDark,
    alt: "Image 3",
  },
];

export default carouselData;

export const dummyProducts = [
  {
    id: 1,
    title: "Galaxy S22 Ultra",
    sku: "galaxy-s22-ultra",
    brandName: "samsung",
    image: productImage,
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    tags: ["all", "popular"],
    prices: [
      { site: "Daraz", logo: daraz, price: 32999 },
      { site: "Priceoye", logo: priceoye, price: 32999 },
      { site: "Homehomeshopping", logo: homeshopping, price: 32999 },
      { site: "Mobilemall", logo: mobilemall, price: 32999 },
    ],
    minPrice: 32999,
    maxPrice: 32999,
    variants: [
      {
        store: "Daraz",
        logo: daraz,
        price: 32999,
        ptaStatus: "PTA Approved",
        warranty: "1 Year Official Warranty",
        simType: "Physical SIM & eSIM",
        displaySize: "6.9-inch",
        color: "Black",
      },
      {
        store: "HomeShopping",
        logo: homeshopping,
        price: 32999,
        ptaStatus: "Non PTA",
        warranty: "1 Year Official Warranty",
        simType: "Physical SIM",
        displaySize: "6.9-inch",
        color: "Black",
      },
    ],
  },
  {
    id: 2,
    title: "iPhone 13",
    sku: "iphone-13",
    brandName: "apple",
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    image: productImage,
    tags: ["all", "latest"],
    prices: [
      { site: "Daraz", logo: daraz, price: 89999 },
      { site: "Priceoye", logo: priceoye, price: 92999 },
    ],
    minPrice: 89999,
    maxPrice: 92999,
    variants: [
      {
        store: "Daraz",
        logo: daraz,
        price: 89999,
        ptaStatus: "PTA Approved",
        warranty: "1 Year Official Warranty",
        simType: "eSIM",
        displaySize: "6.1-inch",
        color: "Blue",
      },
      {
        store: "Priceoye",
        logo: priceoye,
        price: 92999,
        ptaStatus: "Non PTA",
        warranty: "No Warranty",
        simType: "eSIM",
        displaySize: "6.1-inch",
        color: "Red",
      },
    ],
  },
  {
    id: 3,
    title: "Infinix Note 12",
    sku: "infinix-note-12",
    brandName: "infinix",
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    image: productImage,
    tags: ["all", "popular"],
    prices: [
      { site: "Daraz", logo: daraz, price: 21999 },
      { site: "Priceoye", logo: priceoye, price: 22999 },
    ],
    minPrice: 21999,
    maxPrice: 22999,
    variants: [
      {
        store: "Daraz",
        logo: daraz,
        price: 21999,
        ptaStatus: "PTA Approved",
        warranty: "6 Months",
        simType: "Physical SIM",
        displaySize: "6.7-inch",
        color: "Gray",
      },
      {
        store: "Priceoye",
        logo: priceoye,
        price: 22999,
        ptaStatus: "Non PTA",
        warranty: "No Warranty",
        simType: "Physical SIM",
        displaySize: "6.7-inch",
        color: "Blue",
      },
    ],
  },
  {
    id: 4,
    title: "Vivo V27",
    sku: "vivo-v27",
    brandName: "vivo",
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    image: productImage,
    tags: ["all", "latest"],
    prices: [
      { site: "Daraz", logo: daraz, price: 54999 },
      { site: "Mobilemall", logo: mobilemall, price: 57999 },
    ],
    minPrice: 54999,
    maxPrice: 57999,
    variants: [
      {
        store: "Daraz",
        logo: daraz,
        price: 54999,
        ptaStatus: "PTA Approved",
        warranty: "1 Year Official Warranty",
        simType: "eSIM",
        displaySize: "6.5-inch",
        color: "Green",
      },
      {
        store: "Mobilemall",
        logo: mobilemall,
        price: 57999,
        ptaStatus: "Non PTA",
        warranty: "No Warranty",
        simType: "eSIM",
        displaySize: "6.5-inch",
        color: "White",
      },
    ],
  },
  {
    id: 5,
    title: "Realme GT Neo",
    sku: "realme-gt-neo",
    brandName: "realme",
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    image: productImage,
    tags: ["all", "popular"],
    prices: [
      { site: "Daraz", logo: daraz, price: 37999 },
      { site: "Priceoye", logo: priceoye, price: 39999 },
    ],
    minPrice: 37999,
    maxPrice: 39999,
    variants: [
      {
        store: "Daraz",
        logo: daraz,
        price: 37999,
        ptaStatus: "PTA Approved",
        warranty: "1 Year",
        simType: "Physical SIM",
        displaySize: "6.6-inch",
        color: "Blue",
      },
      {
        store: "Priceoye",
        logo: priceoye,
        price: 39999,
        ptaStatus: "Non PTA",
        warranty: "No Warranty",
        simType: "eSIM",
        displaySize: "6.6-inch",
        color: "Black",
      },
    ],
  },
  {
    id: 6,
    title: "Tecno Spark 10",
    sku: "tecno-spark-10",
    brandName: "tecno",
    description:
      "Apple Iphone 16 Pro Max 6.9” Inch Display Physical Sim & Esim - PTA Approved - 1 year Official Warrenty ...",
    image: productImage,
    tags: ["all", "latest"],
    prices: [
      { site: "Priceoye", logo: priceoye, price: 17999 },
      { site: "Mobilemall", logo: mobilemall, price: 19999 },
    ],
    minPrice: 17999,
    maxPrice: 19999,
    variants: [
      {
        store: "Priceoye",
        logo: priceoye,
        price: 17999,
        ptaStatus: "PTA Approved",
        warranty: "1 Year",
        simType: "Physical SIM",
        displaySize: "6.5-inch",
        color: "Orange",
      },
      {
        store: "Mobilemall",
        logo: mobilemall,
        price: 19999,
        ptaStatus: "Non PTA",
        warranty: "6 Months",
        simType: "Physical SIM",
        displaySize: "6.5-inch",
        color: "Black",
      },
    ],
  },
];

export const items = [
  {
    name: "Fashion Clearance Sale Online in Pakistan",
    description:
      "Check out the best woman clothing online in pakistan and buy at the best rate. ",
    post: "Associated moderator",
    image: profile1,
    likes: 120,
    comment: 20,
    tag: "Daraz",
    product: product,
  },
  {
    name: "Fashion Clearance Sale Online in Pakistan",
    description:
      "Check out the best woman clothing online in pakistan and buy at the best rate. ",
    post: "Associated moderator",
    image: profile1,
    likes: 120,
    comment: 20,
    tag: "Daraz",
    product: product,
  },
  {
    name: "Fashion Clearance Sale Online in Pakistan",
    description:
      "Check out the best woman clothing online in pakistan and buy at the best rate. we deliver all over the pakistan with Daraz.pk.",
    post: "Associated moderator",
    image: profile1,
    likes: 120,
    comment: 20,
    tag: "Daraz",
    product: product,
  },
];

export const banners = [{ image: offercard1 }, { image: offercard2 }];

export const categories = [
  { name: "iPhone" },
  { name: "Vivo" },
  { name: "Tecno" },
  { name: "Samsung" },
  { name: "Nokia" },
  { name: "realme" },
  { name: "Infinix" },
  { name: "Oppo" },
  { name: "MI" },
];

export const commentsData = [
  {
    id: 1,
    name: "Jane Doe",
    comment:
      "I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!",
    avatar: "user1",
  },
  {
    id: 2,
    name: "John Smith",
    comment:
      "This product exceeded my expectations! The quality is outstanding and the features are exactly what I needed for my daily work.",
    avatar: "user1",
  },
  {
    id: 3,
    name: "Alice Johnson",
    comment:
      "Great value for money! I've been using this for a month now and it's been reliable and efficient.",
    avatar: "user1",
  },
  {
    id: 4,
    name: "Bob Wilson",
    comment:
      "The customer service was excellent and the product arrived sooner than expected. Highly recommended!",
    avatar: "user1",
  },
  {
    id: 5,
    name: "Carol Davis",
    comment:
      "I was hesitant at first but this turned out to be one of my best purchases this year. Very satisfied!",
    avatar: "user1",
  },
  {
    id: 6,
    name: "David Miller",
    comment:
      "Amazing product with fantastic features. The battery life is exceptional and the display quality is top-notch.",
    avatar: "user1",
  },
];
