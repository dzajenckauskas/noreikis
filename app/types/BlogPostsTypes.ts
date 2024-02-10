import { ImagesType } from './ImageTypes'
import { MetaType } from './MetaTypes'

export type BlogPostsType = {
    data: BlogPostType[];
    meta: MetaType;
}

export type BlogPostType = {
    id: number;
    attributes?: BlogPostAtributesType
}


export type BlogPostAtributesType = {
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt: Date | string;
    locale: string;
    content: any;
    slug: string;
    title: string;
    shortContent: string;
    images: ImagesType;
}
