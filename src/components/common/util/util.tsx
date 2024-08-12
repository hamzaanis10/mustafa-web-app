import { appLoaderStatusSelector } from "@/store/selectors/app.selectors";
import axios from "axios";
import { fromJS } from "immutable";

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

export function getRandomNumber() {
  let randomNumber = Math.floor(1000 + Math.random() * 9000); // generate a 4 digit random number
  return randomNumber
}

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


export const findCartItemByProductDetails = (packages: any, targetId: any) => {
  let foundProduct: any = false;
  packages &&
    packages.forEach((element: any) => {
      let stockId = element.get("stockId");
      element &&
        element.get("productDetails").forEach((prod: any) => {
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


export const MyOrder = [
  {
    id: "00000000",
    // code: "tx125ck42",
    // name: "Yoga Mat",
    // description: "Product Description",
    image: [
      {img: "yoga-mat.jpg"},
      {img: "yoga-mat.jpg"},
      {img: ""},
      {img: ""},
      {img: ""},
    ],
    price: 320.50,
    // discountedPrice: 35,
    // category: "Fitness",
    // quantity: 15,
    // inventoryStatus: "INSTOCK",
    // rating: 5,
    orderStatus:"Pending"
  },
  {
    id: "00000000",
    // code: "gwuby345v",
    // name: "Last",
    // description: "Product Description",
    image: [
      {img: "yoga-mat.jpg"},
      {img: "yoga-mat.jpg"},
      {img: ""},
      {img: ""},
      {img: ""},
    ],
    price: 320.50,
    // discountedPrice: 35,
    // category: "Fitness",
    // quantity: 25,
    // inventoryStatus: "INSTOCK",
    // rating: 8,
        orderStatus:"Completed"
  },
  {
    id: "00000000",
    // code: "zx23zc42c",
    // name: "Teal T-Shirt",
    // description: "Product Description",
    image: [
      {img: "yoga-mat.jpg"},
      {img: "yoga-mat.jpg"},
      {img: ""},
      {img: ""},
      {img: ""},
    ],
    price: 320.50,
    // discountedPrice: 35,
    // category: "Clothing",
    // quantity: 3,
    // inventoryStatus: "LOWSTOCK",
    // rating: 3,
    orderStatus:"Completed"

  },
 
];

export const Step_Menu = ( handleClick :(label: string) => void)=> [
  {
    label: "To deliver  ",
    inkbar: "|",
    command: () => handleClick("To deliver"),
  },
  { 
    label: "Delivering ", 
    inkbar: "|",
    command: () => handleClick("Delivering")
  },
  { 
    label: "Completed  ",
    inkbar: "|", 
    command: () => handleClick("Completed")
  },
  { 
    label: "Refund",
    command: () => handleClick("Refund") 
  },
];


