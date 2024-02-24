import axios from 'axios'

export const getPage = async (name: string, populate?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?${populate}`
    url = `${url}`
    const item = await axios.get(url)
    return item?.data ?? null
}
export const getItem = async (name: string, id: string, populate?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}/${id}/?${populate}`
    url = `${url}`
    const item = await axios.get(url)
    return item?.data ?? null
}
export const getItems = async (name: string, populate?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?${populate}`
    url = `${url}`
    const items = await axios.get(url)
    return items?.data ?? null
}

export const getItemsByLocale = async (name: string, locale?: string, populate?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?locale=${locale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE}&${populate}`
    url = `${url}`
    const item = await axios.get(url)
    return item?.data ?? null
}

export const getItemBySlug = async (name: string, slug: string, locale?: string, populate?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?filters[slug][$eq]=${slug}&locale=${locale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE}`
    url = `${url}`
    const item = await axios.get(url)
    return item?.data ?? null
}

