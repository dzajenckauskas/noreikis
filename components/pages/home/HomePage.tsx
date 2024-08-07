import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import { PageType } from '@/app/types/PageType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import Layout from '@/components/layout/Layout'
import MainAnimation from '@/components/layout/MainAnimation'
import { ReccomendationsSection } from '@/components/pages/home/ReccomendationsSection'
import { ServicesSection } from '@/components/pages/home/services/ServicesSection'
import { HeadComponent } from '../../layout/HeadComponent'
import { BlogPostsSection } from './BlogPostsSection'
import { ForSaleSection } from './ForSaleSection'
import { HeroSection } from './HeroSection'
import { PriceInquirySection } from './PriceInquirySection'
import { AboutSection } from './services/AboutSection'
import { QuickContactSection } from './services/QuickContactSection'
import Stack from '@mui/material/Stack'
import { theme } from '@/components/layout/Theme'
// import "./styless.css";

type Props = {
    recommendations: RecommendationsType;
    objects?: ObjectsType | null;
    blogPosts?: BlogPostsType | null;
    page?: PageType;
}

export const HomePage = ({ page, recommendations, objects, blogPosts }: Props) => {
    return (
        <>
            <HeadComponent
                title={page?.attributes.seo.seoTitle}
                description={page?.attributes.seo.seoDescription}
                keywords={page?.attributes.seo.seoKeywords}
            />
            <Layout>
                <Stack sx={{ backgroundColor: theme.palette.secondary.main, }}>
                    <HeroSection />
                    <AboutSection />
                    <MainAnimation />
                </Stack>

                {/* <QuickContactSection /> */}
                {/* <MainAnimation /> */}

                <ReccomendationsSection recommendations={recommendations} />
                <ForSaleSection objects={objects} />
                <ServicesSection />
                <PriceInquirySection />
                <BlogPostsSection blogPosts={blogPosts} />
            </Layout>
        </>
    )
}
