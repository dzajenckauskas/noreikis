import axios from 'axios'

export const getItem = async (name: string, id: string,) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}/${Number(id)}/?populate=images`
    url = `${url}`
    const item = await axios.get(url)
    return item.data
}
export const getItems = async (name: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?populate=images`
    url = `${url}`
    const items = await axios.get(url)
    return items.data
}

export const getItemsByLocale = async (name: string, locale?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?locale=${locale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE}&populate=images`
    url = `${url}`
    const item = await axios.get(url)
    console.log(url);

    return item.data
}

export const getItemBySlug = async (name: string, slug: string, locale?: string) => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/${name}?filters[slug][$eq]=${slug}&locale=${locale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE}&populate=images`
    url = `${url}`
    const item = await axios.get(url)
    console.log(url);

    return item.data
}

