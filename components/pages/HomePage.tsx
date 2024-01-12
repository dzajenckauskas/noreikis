import { RecommendationsType } from '@/app/types/RecommendationsType'
import { CounterSection } from '@/components/CounterSection'
import { ReccomendationsSection } from '@/components/ReccomendationsSection'
import Layout from '@/components/layout/Layout'
import { HeadComponent } from '../layout/HeadComponent'
import { HeroSection } from './home/HeroSection'
import { PriceInquirySection } from './home/PriceInquirySection'

type Props = {
    recommendations: RecommendationsType;
}
export const HomePage = ({ recommendations }: Props) => {
    return (
        <>
            <HeadComponent
                title={"Ernestas Noreikis - Jūsų patikimas NT brokeris Vilniuje, Kaune, Palangoje"}
                description={"Nekilnojamojo turto brokeris Ernestas Noreikis. Atstovauju Jūsų NT objektus perkant, parduodant ar nuomojant NT objektus Vilniuje, Kaune ir Palangoje. Dėl nemokamo turto vertinimo ar konsultacijos, susisiekime telefonu +37062429709 arba palikite žinutę info@noreikis.com"} />
            <Layout>
                <HeroSection />
                <CounterSection />
                <ReccomendationsSection recommendations={recommendations} />
                <PriceInquirySection />
            </Layout>
        </>
    )
}
