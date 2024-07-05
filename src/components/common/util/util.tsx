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
      (loaderStatus: any) => loaderStatus.get("status") === "PENDING" &&
        loaderStatus.get("actionType") == actionType
    );
  if (loadingState) {
    return true;
  } else return false;
};

export const getAllCartProducts = (packages: any) => {
  let foundProducts: any = [];
  packages && packages.forEach((element: any) => {
    let stockId = element.get("stockId");
    element && element.get('products') && element.get('products').forEach((prod: any) => {
      foundProducts.push(fromJS({ product: prod, stockId: stockId }))
    })
  });
  return foundProducts;
};

export const findCartItem = (packages:any, targetId:any) => {
  let foundProduct: any = false;
  packages && packages.forEach((element:any) => {
      let stockId = element.get("stockId");
      element && element.get('products').forEach((prod:any) => {
          if (prod.get('productId') === targetId) {
              foundProduct = fromJS({ product: prod, stockId: stockId })
          }
      })
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
