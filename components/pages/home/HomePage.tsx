import { BlogPostsType } from '@/app/types/BlogPostsTypes'
import { ObjectsType } from '@/app/types/ObjectsType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import Layout from '@/components/layout/Layout'
import { ReccomendationsSection } from '@/components/pages/home/ReccomendationsSection'
import { ServicesSection } from '@/components/pages/home/services/ServicesSection'
import { HeadComponent } from '../../layout/HeadComponent'
import { BlogPostsSection } from './BlogPostsSection'
import { ForSaleSection } from './ForSaleSection'
import { HeroSection } from './HeroSection'
import { PriceInquirySection } from './PriceInquirySection'

type Props = {
    recommendations: RecommendationsType;
    objects?: ObjectsType | null;
    blogPosts?: BlogPostsType | null;
}
export const HomePage = ({ recommendations, objects, blogPosts }: Props) => {
    return (
        <>
            <HeadComponent
                title={"Ernestas Noreikis - Jūsų patikimas NT brokeris Vilniuje, Kaune, Palangoje"}
                description={"Nekilnojamojo turto brokeris Ernestas Noreikis. Atstovauju Jūsų NT objektus perkant, parduodant ar nuomojant NT objektus Vilniuje, Kaune ir Palangoje. Dėl nemokamo turto vertinimo ar konsultacijos, susisiekime telefonu +37062429709 arba palikite žinutę info@noreikis.com"} />
            <Layout>
                <HeroSection />
                <ServicesSection />
                <ReccomendationsSection recommendations={recommendations} />
                <ForSaleSection objects={objects} />
                <BlogPostsSection blogPosts={blogPosts} />
                <PriceInquirySection />
            </Layout>
        </>
    )
}
