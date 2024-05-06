type CategoryList = {
    id: string;
    displayOrder: number,
    deleted: boolean,
    createdAt: string,
    active: boolean,
    children: CategoryList[],
    name: any,
    nameSearch: string,
    parentId: string,
    productCount: number,
    thumbnailImage: string,
    topPick: boolean,
    updatedAt: string
};
