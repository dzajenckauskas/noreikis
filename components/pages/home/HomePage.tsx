import { ObjectsType } from '@/app/types/ObjectsType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import { ReccomendationsSection } from '@/components/ReccomendationsSection'
import { ServicesSection } from '@/components/ServicesSection'
import Layout from '@/components/layout/Layout'
import { HeadComponent } from '../../layout/HeadComponent'
import { ForSaleSection } from './ForSaleSection'
import { HeroSection } from './HeroSection'
import { PriceInquirySection } from './PriceInquirySection'

type Props = {
    recommendations: RecommendationsType;
    objects?: ObjectsType | null;
}
export const HomePage = ({ recommendations, objects }: Props) => {
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
                <PriceInquirySection />
            </Layout>
        </>
    )
}
