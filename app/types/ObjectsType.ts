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

export type Type = {
    bodyType: string;
    color: string;
    createdAt: string;
    damage: string | null;
    description: any[];
    discountPrice: string;
    engineCapacityCC: string
    firstRegDate: string;
    fuelType: string;
    gearbox: string;
    images?: ImagesType;
    instalmentPriceFrom: number;
    locale: string;
    make: string;
    mileageKM: string;
    model: string;
    numberOfDoors: string;
    powerKW: string;
    price: string;
    publishedAt: string;
    slug: string;
    steeringWheel: string;
    updatedAt: string;
    vin: string;

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
    description: any;
    landArea: string;
    category: EntityDataType;
    actionType: EntityDataType;
    objectState: EntityDataType;
    objectPurpose: EntityDataType;
    heatingType: EntityDataType;
    statusType: EntityDataType;
    //     {
    //         type: string;
    //         children: [
    //             {
    //                 text: string;
    //                 type: string;
    //             ]
    //     }
    // ],
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