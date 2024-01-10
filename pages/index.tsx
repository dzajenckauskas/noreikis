import { ActionType } from '@/app/types/ActionType'
import { RecommendationsType } from '@/app/types/RecommendationsType'
import { getItems } from '@/app/utils'
import { AruodasIcon } from '@/components/AruodasIcon'
import { CounterSection } from '@/components/CounterSection'
import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { ReccomendationsSection } from '@/components/ReccomendationsSection'
import Layout from '@/components/layout/Layout'
import { theme } from '@/components/layout/Theme'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/legacy/image'
import Link from 'next/link'

type Props = {
  recommendations: RecommendationsType;
}

export default function Home({ recommendations }: Props) {

  return (
    <>
      <Head>
        <title>{"Ernestas Noreikis - Jūsų patikimas NT brokeris Vilniuje, Kaune, Palangoje"}</title>
        <meta name="description" content="Nekilnojamojo turto brokeris Ernestas Noreikis. Atstovauju Jūsų NT objektus perkant, parduodant ar nuomojant NT objektus Vilniuje, Kaune ir Palangoje. Dėl nemokamo turto vertinimo ar konsultacijos, susisiekime telefonu +37062429709 arba palikite žinutę info@noreikis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Stack direction={'row'} justifyContent={'space-between'} width={'100%'} spacing={4} >
          <Stack width={{ xs: '100%', md: '50%' }}>
            <Stack spacing={4} height={'100%'} alignItems={'flex-start'} position={'relative'}
              justifyContent={'center'} alignContent={'flex-start'}>
              <Typography variant='h1' fontWeight={800}>
                <span style={{ color: theme.palette.secondary.main }}>Kiekvienus</span> namus parduodu kaip savus
              </Typography>
              <Typography variant='body1'>
                Jūsų atstovas visais nekilnojamojo turto klausimais. Susisiekime jūsų poreikių ir turto įvertinimui, ir kartu ieškokime geriausios sprendimo dėl jūsų nekilnojamojo turto.
              </Typography>
              <Button variant='contained' color='secondary' href='#priceInquiryForm'>
                Nemokamas turto vertinimas
              </Button>
              <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} pt={.3} sx={{ alignItems: 'center' }}>
                <Link passHref href={`${process.env.NEXT_PUBLIC_ARUODAS_URL}`} aria-label="aruodas">
                  <AruodasIcon />
                </Link>
                <Link passHref href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`} aria-label="facebook">
                  <FacebookIcon sx={{ color: theme.palette.primary.dark, fontSize: 22 }} />
                </Link>
                <Link passHref href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`} aria-label="linkedin">
                  <LinkedInIcon sx={{ color: theme.palette.primary.dark, fontSize: 22 }} />
                </Link>
              </Stack>
              <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, position: 'absolute', bottom: 0 }}>
                <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                <Link passHref href={`/parduodami`}>
                  <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                    {'Parduodami objektai'}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
            {/* <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: "#fff", fontSize: 18 }} />
                                    <Link passHref href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>
                                        <Typography variant='caption' color={'#fff'}>
                                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                        </Typography>
                                    </Link>
                                </Stack> */}
          </Stack>
          <Stack width={{ xs: '100%', md: '50%' }}>
            <Stack sx={{ position: 'relative', width: '100%', height: 800 }}>
              <Image priority alt={"Ernestas Noreikis NT nekilnojamas turtas brokeris"}
                layout='fill' objectFit='cover' objectPosition='top' src={'/assets/images/ernestas-noreikis-NT-brokeris.avif'} />
              {/* <Typography variant='h1' fontWeight={600}>
                Kiekvienus namus parduodu kaip savus
              </Typography> */}
            </Stack>
          </Stack>
        </Stack>
        <CounterSection />
        <ReccomendationsSection recommendations={recommendations} />
        <Stack py={4} spacing={4} id={'priceInquiryForm'} direction={{ xs: 'column', md: 'row' }}>
          <Stack pb={2} width={{ md: '50%', xs: '100%' }}>
            <Typography variant='h4' color={theme.palette.secondary.main} fontWeight={600}>
              {'Nemokamas turto kainos įvertinimas'}
            </Typography>
            <Typography variant='body1' color={theme.palette.primary.main}>
              {'Nemokamas turto kainos įvertinimas'}
            </Typography>
          </Stack>
          <Stack width={{ md: '50%', xs: '100%' }}>
            <PriceInquiryForm />
          </Stack>
        </Stack>
      </Layout>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const recommendations = await getItems('recommendations', 'populate=deep') ?? null
  // const categories = await getItems('categories') ?? null

  return {
    props: {
      recommendations: recommendations ?? null,
      // categories: categories ?? null
    }
  }
}
