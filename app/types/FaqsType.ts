import { MetaType } from "./MetaTypes"; // Assuming you have this

export type FaqsType = {
    data: FaqType;
    meta: MetaType;
}

export type FaqType = {
    id: number;
    attributes?: FaqAttributesType;
}

export type FaqAttributesType = {
    faqs: FaqItemType[];
}

export type FaqItemType = {
    id: number;
    question: string;
    answer: string;
};
