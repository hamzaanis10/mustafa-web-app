import { appLoaderStatusSelector } from "@/store/selectors/app.selectors";
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

export const ProductDetail_BreadCrumb = [
  {
    label: "Home",
  },
  {
    label: "Category",
  },
  {
    label: "Sub-Category",
  },
  {
    label: "Category-Name",
  },
  {
    label: "Product-Name",
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

export const OrderInfo_BreadCrumb = [
  {
    label: "Cart",
  },
  {
    label: "Order Information",
  },
  {
    label: "Pay",
  },
  {
    label: "Order Complete",
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

