import { ActionDataType } from "./ActionType";

export type PriceInquiryFormInputType = {
    name: string;
    phone: string;
    email: string;
    city: string;
    address: string;
    floorNumber: string;
    floorsTotal: string;
    roomsNumber: string;
    areaSqM: string;
    houseBuildYear: string;
    landArea: string;
    category: ActionDataType | null;
    objectPurpose: ActionDataType | null;
    objectState: ActionDataType | null;
    houseType: ActionDataType | null;
    comment?: string;
    contents: string;
    renovatedHouse?: boolean;
}