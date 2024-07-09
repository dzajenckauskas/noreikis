import { BlogPostsType } from "@/app/types/BlogPostsTypes";
import { ObjectsType } from "@/app/types/ObjectsType";
import { PageResponseType } from "@/app/types/PageType";
import { getItems, getPage } from "@/app/utils";
import { GetServerSideProps } from "next";

type Props = {
    objects: ObjectsType;
    homePage: PageResponseType;
    blogPosts: BlogPostsType;
}

function generateSiteMap({ objects, homePage, blogPosts }: Props) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>
   <url>
   <loc>${`${process.env.NEXT_PUBLIC_URL}/kontaktai`}</loc>
   <lastmod>${new Date().toISOString()}</lastmod>
  </url>

   ${objects.data?.map((eo) => {
        return `<url>
          <loc>${`${process.env.NEXT_PUBLIC_URL}/parduodami/${eo.attributes?.slug}`}</loc>
          <lastmod>${eo?.attributes?.updatedAt?.toString()}</lastmod>
         </url>`;
    }).join('')}

    ${blogPosts.data?.map((post) => {
        return `<url>
           <loc>${`${process.env.NEXT_PUBLIC_URL}/naujienos/${post.attributes?.slug}`}</loc>
           <lastmod>${post?.attributes?.updatedAt?.toString()}</lastmod>
          </url>`;
    }).join('')}

   </urlset>
   `;
}


function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

    // const recommendations = (await getItems('recommendations', 'populate=deep')) ?? null
    const objects = (await getItems('objects', '&pagination[limit]=100')) ?? null
    const blogPosts = (await getItems('blog-posts')) ?? null
    const homePage = (await getPage('home-page')) ?? null
    // console.log(objects, "objectsobjects");

    const sitemap = generateSiteMap({ objects, homePage, blogPosts });

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };

}

// MySQLConnector.init();

// const pagesPromise = PagesService.getAllPages()
// const postsPromise = PostsService.getAllPosts()
// const productsPromise = ProductsService.getAllProducts()
// const categoriesPromise = CategoriesService.getAllCategories()

// const [
//     posts,
//     pages
//     , products, categories
// ] =
//     await Promise.all([
//         postsPromise,
//         pagesPromise,
//         productsPromise,
//         categoriesPromise
//     ])

// MySQLConnector.end();
// const sitemap = generateSiteMap(pages, posts, products, categories);

// res.setHeader('Content-Type', 'text/xml');
// // we send the XML to the browser
// res.write(sitemap);
// res.end();

// }

export default SiteMap