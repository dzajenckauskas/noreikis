import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ImagesType } from './ImageTypes'
import { MetaType } from './MetaTypes'

export type ObjectsType = {
    data: ObjectType[];
    meta: MetaType;
}

export type ObjectType = {
    id: number;
    attributes?: ObjectAtributesType
}

export type ObjectAtributesType = {
    region: string;
    district: string;
    quartal: string;
    street: string;
    houseNumber: string;
    flatNumber: string;
    showHouseNumber: boolean;
    showFlatNumber: boolean;
    RCnumber: string;
    showRCnumber: boolean;
    areaSqM: number;
    roomsNumber: 2,
    floorNumber: 4,
    totalFloors: 5,
    buildYear: string;
    renovated: boolean,
    renovatedYear: string;
    houseType: string;
    intendance: string;
    heating: string;
    soldOrRented: false;
    reserved: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt: Date | string;
    locale: string;
    description: BlocksContent;
    landArea: string;
    category: EntityDataType;
    actionType: EntityDataType;
    objectState: EntityDataType;
    objectPurpose: EntityDataType;
    heatingType: EntityDataType;
    statusType: EntityDataType;
    discountPrice: string;
    slug: string;
    price: string;
    images: ImagesType;
}


export type EntityDataType = {
    data: EntityAttributesType;
}
export type EntityAttributesType = {
    attributes: EntityType;
    id: number;
}
export type EntityType = {
    title: string;
    singularTitle?: string;
    locale: string;
    value: string;
}