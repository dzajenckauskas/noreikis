import { BlocksContent } from '@strapi/blocks-react-renderer';
import { ImagesType } from './ImageTypes'
import { MetaType } from './MetaTypes'
import { SeoType } from './PageType';

export type ObjectsType = {
    data: ObjectType[];
    meta: MetaType;
}

export type ObjectType = {
    id: number;
    attributes?: ObjectAtributesType
}

export type ObjectAtributesType = {
    topbroker: TopbrokerType;
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
    status: EntityDataType;
    statusType: EntityDataType;
    discountPrice: string;
    slug: string;
    price: string;
    images: ImagesType;
    seo?: SeoType;
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

export type TopbrokerType = {
    logo: string;
    comment: null,
    language: string;
    attachments: null,
    list: [
        {
            id: number;
            slug: string;
            description: string;
            token: number;
            location: {
                formated_address: string;
                position: string[];
            },
            estate_type: string;
            operation: string;
            main_parameters: [
                {
                    title: string;
                    value: string;
                    icon: string;
                    name: string;
                    unit: string;
                    secondary: string;
                    secondary_unit: string;
                }
            ],
            parameters: [
                {
                    title: string;
                    value: any[];
                    unit: null
                }
            ];

            medias: [];
            title: string;
            title_en: null;
            description_en: null;
            photos: string[]
        }
    ],
    user: TopbrokerUserType;
    date: Date | string;
}

export type TopbrokerUserType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    custom_fields: {};
    created_at: Date;
    updated_at: Date;
    archived_at: null;
    image_url: string;
    full_image_url: string;
}