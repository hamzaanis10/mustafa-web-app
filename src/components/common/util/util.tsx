import { appLoaderStatusSelector } from "@/store/selectors/app.selectors";

export const differenceBetweenDatesInMinutes = (startDate: any, endDate: any) => {
  const date1: any = new Date(startDate);
  const date2: any = new Date(endDate);
  const ms: any = Math.abs(date2 - date1);
  var diffMins = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
  return diffMins;
};

export const isActionLoading = (actionType: string) => {
  const appLoaderState = appLoaderStatusSelector();
  const loadingState: any = appLoaderState && appLoaderState.find((loaderStatus: any) => loaderStatus.get('status') === 'PENDING');
  if (loadingState) {
    return true
  }
  else
    return false;
}

export const CATEGORY_MENU_ITEMS = [
  {
    label: "Fruit & Vegetables",
    items: [
      {
        label: "Leaves",
        items: [
          { label: "Spinach" },
          { label: "Coriander" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
      {
        label: "Fruits",
        items: [
          { label: "Apple" },
          { label: "Banana" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
      {
        label: "Pods",
        items: [
          { label: "Spinach" },
          { label: "Coriander" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
      {
        label: "Flowers",
        items: [
          { label: "Spinach" },
          { label: "Coriander" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
      {
        label: "Seeds",
        items: [
          { label: "Spinach" },
          { label: "Coriander" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
      {
        label: "Roots",
        items: [
          { label: "Spinach" },
          { label: "Coriander" },
          { label: "Mint" },
          { label: "Curry leaves" },
          { label: "Broccoli" },
          { label: "Cabbage" },
        ],
      },
    ],
  },
  {
    label: "Diary & Eggs",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Cooking & Baking needs",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Frozen",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Electronics",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Petcare",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Household",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },
  {
    label: "Mom, Baby & Kids",
    items: [
      { label: "Spinach" },
      { label: "Coriander" },
      { label: "Mint" },
      { label: "Curry leaves" },
      { label: "Broccoli" },
      { label: "Cabbage" },
    ],
  },

];

export const CAROUSEL_ITEMS = [
  {
    desktopSource: "../assets/images/desktop-banner.png",
    mobileSource: "../assets/images/mobil-banner.png",
    alt: "Slide 1",
  },
  {
    desktopSource: "../assets/images/desktop-banner.png",
    mobileSource: "../assets/images/mobil-banner.png",
    alt: "Slide 2",
    caption: "Second Slide",
  },
  {
    desktopSource: "../assets/images/desktop-banner.png",
    mobileSource: "../assets/images/mobil-banner.png",
    alt: "Slide 3",
  },
];
