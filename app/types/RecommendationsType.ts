import { ActionType } from './ActionType';
import { SingleImageType } from './ImageTypes';
import { MetaType } from './MetaTypes';

export type RecommendationsType = {
    data: RecommendationType[];
    meta: MetaType;
}

export type RecommendationType = {
    id: number;
    attributes?: RecommendationAtributesType
}


export type RecommendationAtributesType = {
    action: ActionType;
    createdAt: Date;
    customer: string;
    image: SingleImageType;
    locale: string;
    publishedAt: Date;
    rate: number;
    text: string;
    updatedAt: Date;
}

