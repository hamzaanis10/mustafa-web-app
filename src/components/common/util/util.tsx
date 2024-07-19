import { appLoaderStatusSelector } from "@/store/selectors/app.selectors";
import { fromJS } from "immutable";
import AppProductStarRating from "../app.product.star.rating/app.product.star.rating";
import axios from "axios";

export const differenceBetweenDatesInMinutes = (
  startDate: any,
  endDate: any
) => {
  const date1: any = new Date(startDate);
  const date2: any = new Date(endDate);
  const ms: any = Math.abs(date2 - date1);
  var diffMins = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
  return diffMins;
};
export const PRODUCTS_PAGE_SIZE = 20;

export const isActionLoading = (actionType: string) => {
  const appLoaderState = appLoaderStatusSelector();
  const loadingState: any =
    appLoaderState &&
    appLoaderState.find(
      (loaderStatus: any) =>
        loaderStatus.get("status") === "PENDING" &&
        loaderStatus.get("actionType") == actionType
    );
  if (loadingState) {
    return true;
  } else return false;
};

export const getAllCartProducts = (packages: any) => {
  let foundProducts: any = [];
  packages &&
    packages.forEach((element: any) => {
      let stockId = element.get("stockId");
      element &&
        element.get("products") &&
        element.get("products").forEach((prod: any) => {
          foundProducts.push(fromJS({ product: prod, stockId: stockId }));
        });
    });
  return foundProducts;
};

export const findCartItem = (packages: any, targetId: any) => {
  let foundProduct: any = false;
  packages &&
    packages.forEach((element: any) => {
      let stockId = element.get("stockId");
      element &&
        element.get("products").forEach((prod: any) => {
          if (prod.get("productId") === targetId) {
            foundProduct = fromJS({ product: prod, stockId: stockId });
          }
        });
    });
  return foundProduct;
};

export const getLanguageBaseName = (name: any, language = "en") => {
  if (name) {
    let theName =
      name && name[language] !== undefined
        ? name[language]
        : name.get(language);
    if (!theName) {
      theName = name && name["en"] !== undefined ? name["en"] : name.get("en");
    }
    return theName && theName.trim();
  } else return "";
};

export const PRODUCT_lIST = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Blue Band",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1003",
    code: "244wgerg2",
    name: "Blue T-Shirt",
    description:
      "Product DescriptionProduct DescriptionProduct DescriptionProduct Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "Brown Purse",
    description: "Product Description",
    image: "brown-purse.jpg",
    price: 120,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1006",
    code: "bib36pfvm",
    name: "Chakra Bracelet",
    description: "Product Description",
    image: "chakra-bracelet.jpg",
    price: 32,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 5,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1007",
    code: "mbvjkgip5",
    name: "Galaxy Earrings",
    description: "Product Description",
    image: "galaxy-earrings.jpg",
    price: 34,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 23,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1008",
    code: "vbb124btr",
    name: "Game Controller",
    description: "Product Description",
    image: "game-controller.jpg",
    price: 99,
    discountedPrice: 35,
    category: "Electronics",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 4,
  },
  {
    id: "1009",
    code: "cm230f032",
    name: "Gaming Set",
    description: "Product Description",
    image: "gaming-set.jpg",
    price: 299,
    discountedPrice: 35,
    category: "Electronics",
    quantity: 63,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
  {
    id: "1010",
    code: "plb34234v",
    name: "Gold Phone Case",
    description: "Product Description",
    image: "gold-phone-case.jpg",
    price: 24,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1011",
    code: "4920nnc2d",
    name: "Green Earbuds",
    description: "Product Description",
    image: "green-earbuds.jpg",
    price: 89,
    discountedPrice: 35,
    category: "Electronics",
    quantity: 23,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1012",
    code: "250vm23cc",
    name: "Green T-Shirt",
    description: "Product Description",
    image: "green-t-shirt.jpg",
    price: 49,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 74,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1013",
    code: "fldsmn31b",
    name: "Grey T-Shirt",
    description: "Product Description",
    image: "grey-t-shirt.jpg",
    price: 48,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 3,
  },
  {
    id: "1014",
    code: "waas1x2as",
    name: "Headphones",
    description: "Product Description",
    image: "headphones.jpg",
    price: 175,
    discountedPrice: 35,
    category: "Electronics",
    quantity: 8,
    inventoryStatus: "LOWSTOCK",
    rating: 5,
  },
  {
    id: "1015",
    code: "vb34btbg5",
    name: "Light Green T-Shirt",
    description: "Product Description",
    image: "light-green-t-shirt.jpg",
    price: 49,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 34,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1016",
    code: "k8l6j58jl",
    name: "Lime Band",
    description: "Product Description",
    image: "lime-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 12,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
  {
    id: "1017",
    code: "v435nn85n",
    name: "Mini Speakers",
    description: "Product Description",
    image: "mini-speakers.jpg",
    price: 85,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 42,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1018",
    code: "09zx9c0zc",
    name: "Painted Phone Case",
    description: "Product Description",
    image: "painted-phone-case.jpg",
    price: 56,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 41,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1019",
    code: "mnb5mb2m5",
    name: "Pink Band",
    description: "Product Description",
    image: "pink-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 63,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1020",
    code: "r23fwf2w3",
    name: "Pink Purse",
    description: "Product Description",
    image: "pink-purse.jpg",
    price: 110,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1021",
    code: "pxpzczo23",
    name: "Purple Band",
    description: "Product Description",
    image: "purple-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 6,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1022",
    code: "2c42cb5cb",
    name: "Purple Gemstone Necklace",
    description: "Product Description",
    image: "purple-gemstone-necklace.jpg",
    price: 45,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 62,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1023",
    code: "5k43kkk23",
    name: "Purple T-Shirt",
    description: "Product Description",
    image: "purple-t-shirt.jpg",
    price: 49,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 5,
  },
  {
    id: "1024",
    code: "lm2tny2k4",
    name: "Shoes",
    description: "Product Description",
    image: "shoes.jpg",
    price: 64,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 0,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1025",
    code: "nbm5mv45n",
    name: "Sneakers",
    description: "Product Description",
    image: "sneakers.jpg",
    price: 78,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 52,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1026",
    code: "zx23zc42c",
    name: "Teal T-Shirt",
    description: "Product Description",
    image: "teal-t-shirt.jpg",
    price: 49,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 3,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1027",
    code: "acvx872gc",
    name: "Yellow Earbuds",
    description: "Product Description",
    image: "yellow-earbuds.jpg",
    price: 89,
    discountedPrice: 35,
    category: "Electronics",
    quantity: 35,
    inventoryStatus: "INSTOCK",
    rating: 3,
  },
  {
    id: "1028",
    code: "tx125ck42",
    name: "Yoga Mat",
    description: "Product Description",
    image: "yoga-mat.jpg",
    price: 20,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 15,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1029",
    code: "gwuby345v",
    name: "Last",
    description: "Product Description",
    image: "yoga-set.jpg",
    price: 20,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 8,
  },
];

export const CART_LIST_ITEMS = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "bamboo-watch.jpg",
    price: 65,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "black-watch.jpg",
    price: 72,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "blue-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
];


export const SEARCH_TERMS = [
  {
    name:"Green Tea"
  },
  {
    name:"Grapes"
  },
  {
    name:"Greek Yogurt"
  },
  {
    name:"Pokka Green Tea"
  },
];

export const TRENDING_SEARCHES = [
  {
    name:"50 % Off"
  },
  {
    name:"PWP"
  },
  {
    name:"Tea"
  },
  {
    name:"OTC Medicines"
  },
  {
    name:"Shoes"
  },
  {
    name:"Perfumes"
  },
  {
    name:"Bags"
  },
  {
    name:"Jewellery"
  },
  {
    name:"Baby Products"
  },
  
]


export const USER_INFO_DETAILS =[
  {
    image:"/assets/icons/wish-list-icon.png",
    name:"My Wishlist"
  },
  {
    image:"/assets/icons/wallet-icon.png",
    name:"My Wallet"
  },
  {
    image:"/assets/icons/order-icon.png",
    name:"My Orders"
  },
  {
    image:"/assets/icons/setting-icon.png",
    name:"Settings"
  },
]
export const CATEGORY_ORDER_LIST = [
  {
    id: "1001",
    code: "nvklal433",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "black-watch.jpg",
    price: 72,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "blue-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
];
export const CATEGORY_ORDER_LIST1 = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Driscoll’sBlueberrieDriscoll’s BlueberrieDrisco...",
    description: "125g | Morocco Valley ",
    image: "bamboo-watch.jpg",
    price: 65,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
];

export const colors = [
  { code: "#ff0000", name: "Red" },
  { code: "#0000ff", name: "Blue" },
  { code: "#00ff00", name: "Green" },
  { code: "#ffff00", name: "Yellow" },
  { code: "#000000", name: "Black" },
  { code: "#808080", name: "Gray" },
  { code: "#ff0000", name: "Dark Red" },
  { code: "#8b0000", name: "Brown" },
  { code: "#0000ff", name: "Dark Blue" },
  { code: "#00008b", name: "Light Blue" },
];

export const Sizes = [
  { name: "34(XS)" },
  { name: "36(S)" },
  { name: "38(M)" },
  { name: "40/42(L)" },
];

export const PhotoService = {
  getData() {
    return [
      {
        itemImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
        thumbnailImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
        alt: "Description for Image 1",
        title: "Title 1",
      },
      {
        itemImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
        thumbnailImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",
        alt: "Description for Image 2",
        title: "Title 2",
      },
      {
        itemImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
        thumbnailImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",
        alt: "Description for Image 3",
        title: "Title 3",
      },
      {
        itemImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
        thumbnailImageSrc:
          "https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",
        alt: "Description for Image 4",
        title: "Title 4",
      },
    ];
  },
  getImages() {
    return Promise.resolve(this.getData());
  },
};

export const ReviewTag = [
  { name: "with pic" },
  { name: "All(493)" },
  { name: "Good quality" },
  { name: "Good quality" },
  {
    name: "5",
    star: <AppProductStarRating value={1} stars={1} />,
  },
  {
    name: "4",
    star: <AppProductStarRating value={1} stars={1} />,
  },
  {
    name: "3",
    star: <AppProductStarRating value={1} stars={1} />,
  },
  {
    name: "2",
    star: <AppProductStarRating value={1} stars={1} />,
  },
  {
    name: "1",
    star: <AppProductStarRating value={1} stars={1} />,
  },
];

export const ProductReview = [
  {
    id: "01",
    name: "UserName",
    rating: 5,
    date: "10 may 2023",
    comment:
      "Excellent Product！I buy this for our daily breakfast with yogurt and jam. Love the taste. Not too sweet like HL but still makes my yogurt palatable.",
  },
  {
    id: "02",
    name: "UserName",
    image: [
      {
        img: "black-watch.jpg",
      },
      {
        img: "black-watch.jpg",
      },
      {
        img: "black-watch.jpg",
      },
    ],
    rating: 4,
    date: "10 may 2023",
    comment:
      "Excellent Product！I buy this for our daily breakfast with yogurt and jam. Love the taste. Not too sweet like HL but still makes my yogurt palatable.",
  },
  {
    id: "03",
    name: "UserName",
    rating: 2,
    date: "10 may 2023",
    comment:
      "Excellent Product！I buy this for our daily breakfast with yogurt and jam. Love the taste. Not too sweet like HL but still makes my yogurt palatable.",
  },
  {
    id: "04",
    name: "UserName",
    rating: 3,
    date: "10 may 2023",
    comment:
      "Excellent Product！I buy this for our daily breakfast with yogurt and jam. Love the taste. Not too sweet like HL but still makes my yogurt palatable.",
  },
];

export const ProductFilter = [
  {
    brand: [
      {
        id: "02",
        name: "Master Grocer",
        quantity: "92",
        checked: false,
      },
      {
        id: "03",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "04",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "05",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "06",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "07",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "08",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
      {
        id: "09",
        name: "The Cellar Door ",
        quantity: "62",
        checked: false,
      },
    ],
    Dietary_attributes: [
      {
        id: "01",
        name: "Master Grocer",
        checked: false,
        quantity:'92',
      },
      {
        id: "02",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "03",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "04",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "05",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "06",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "07",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "08",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "09",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "10",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "11",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
      {
        id: "12",
        name: "The Cellar Door ",
        checked: false,
         quantity:'62',
      },
    ],
  },
];

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export const fetchCountryCodes = async (): Promise<Country[]> => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries: Country[] = response.data
      .map((country: any) => ({
        name: country.name.common,
        code: country.idd?.root + (country.idd?.suffixes?.[0] || ''),
        flag: country.flags?.svg || country.flags?.png,
      }))
      .filter((country: Country) => country.code);

    console.log('Country codes:', countries);
    return countries;
  } catch (error) {
    console.error('Error fetching country codes:', error);
    throw error;
  }
};

export const CATEGORY_lIST = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Blue Band",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    discountedPrice: 35,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1003",
    code: "244wgerg2",
    name: "Blue T-Shirt",
    description:
      "Product DescriptionProduct DescriptionProduct DescriptionProduct Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    discountedPrice: 35,
    category: "Clothing",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "",
    description: "Product Description",
    image: "",
    price: 120,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "",
    description: "Product Description",
    image: "",
    price: 120,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "",
    description: "Product Description",
    image: "",
    price: 120,
    discountedPrice: 35,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
  
];