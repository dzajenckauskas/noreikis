export type ActionType = {
    data: ActionDataType;
}

export type ActionDataType = {
    id: number;
    attributes: ActionAttributesType;
}

export type ActionAttributesType = {
    title: string;
    locale: string;
    value: string;
}