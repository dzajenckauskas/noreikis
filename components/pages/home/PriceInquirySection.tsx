import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { SectionSubtitle } from '@/components/layout/SectionSubtitle'
import { SectionTitle } from '@/components/layout/SectionTitle'
import { theme } from '@/components/layout/Theme'
import { InfoOutlined } from '@mui/icons-material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
export const PriceInquirySection = () => {
    return (
        <Stack sx={{
            backgroundColor: '#fff',
            position: 'relative', mt: '-1px', zIndex: 3
        }}>
            <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={6} py={10} sx={{
                pt: 12,
                justifyContent: 'space-between', width: '100%',
                maxWidth: 'xl', mx: 'auto', position: 'relative',
                px: { xl: 2, md: 4, xs: 2 },
                overflow: 'hidden'
            }}>
                <Stack width={'100%'}>
                    <Stack width={{ xs: '100%', sm: '100%', lg: '100%' }} position={'relative'} zIndex={2}>
                        <Stack sx={{
                            // mt: { lg: 10, md: -5 },
                            position: 'relative', width: '100%',
                            height: { xs: 600, md: 700, lg: 680 },
                            positon: 'relative',
                            // top: { xs: 5, md: 40 }
                        }}>
                            <Image priority alt={"Ernestas Noreikis NT nekilnojamas turto brokeris"}
                                layout='fill' objectFit='cover' objectPosition='bottom' src={'/assets/images/photo-008.jpg'} />
                        </Stack>
                    </Stack>
                </Stack>


                <Stack maxWidth={{ xs: '100%', md: '50%' }}>
                    <Stack direction={'row'} justifyContent={"center"}
                        id={'priceInquiryForm'} sx={{
                            scrollMarginTop: 400
                        }}>
                        <Stack sx={{ width: { xs: '90%', md: '100%' } }}>
                            <SectionTitle title={<><span style={{ color: theme.palette.secondary.main }}>
                                Nemokamas
                            </span>
                                &nbsp;turto kainos įvertinimas</>} />
                            <SectionSubtitle
                                text={"Užpildykite turto kainos vertinimo užklausą ir sužinokite savo nekilnojamojo turto vertę"} />
                        </Stack>
                    </Stack>

                    <Stack py={4} spacing={8} width={{ xs: '90%', md: '100%' }}
                        alignSelf={'center'}
                        direction={{ xs: 'column', md: 'column' }}
                        justifyContent={'space-between'}>
                        <Stack sx={{ p: 0 }}>
                            <PriceInquiryForm />
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
