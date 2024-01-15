import PriceInquiryForm from '@/components/forms/PriceInquiryForm'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight'

export const PriceInquirySection = () => {
    // <Stack sx={{
    //     px: { xl: 2, md: 4, xs: 2 },
    //     width: '100%', maxWidth: 'xl', mx: 'auto'
    // }}>
    //     <Stack py={8} spacing={2} id={'priceInquiryForm'} direction={{ xs: 'column', md: 'column' }}>
    //         <Stack pb={2} width={{ md: '50%', xs: '100%' }}>
    //             <Typography variant='h4' color={theme.palette.secondary.main} fontWeight={600}>
    //                 {'Nemokamas turto kainos įvertinimas'}
    //             </Typography>
    //             <Typography variant='body1' color={theme.palette.primary.main}>
    //                 {'Nemokamas turto kainos įvertinimas'}
    //             </Typography>
    //         </Stack>
    //         <Stack width={{ md: '50%', xs: '100%' }}>
    //             <PriceInquiryForm />
    //         </Stack>
    //     </Stack>
    // </Stack>
    return (
        <Stack sx={{
            backgroundColor: '#fafafa',
            // boxShadow: '0px 0px 20px #1E2F9729',
            position: 'relative', mt: '-1px', zIndex: 3
        }}>
            <Stack spacing={1} py={10} sx={{
                justifyContent: 'space-between', width: '100%',
                maxWidth: 'xl', mx: 'auto', position: 'relative',
                px: { xl: 2, md: 4, xs: 2 },
                backgroundColor: '#fafafa',
                overflow: 'hidden'
            }}>
                <Stack direction={'row'} justifyContent={"space-between"} id={'priceInquiryForm'} sx={{
                    scrollMarginTop: 400
                }}>
                    <Stack sx={{ width: { xs: '90%', md: '50%' } }}>
                        <Typography variant='h3'
                            sx={{ fontWeight: 600 }}
                        >
                            {/* &nbsp; */}
                            <span style={{ color: theme.palette.secondary.main }}>
                                Nemokamas
                            </span>
                            &nbsp;turto kainos įvertinimas

                        </Typography>

                        <Typography pt={2} variant='body1' width={{ xs: '80%', sm: '60%' }}>
                            Užpildykite turto kainos vertinimo užklausą ir sužinokite savo nekilnojamojo turto vertę
                        </Typography>

                    </Stack>
                </Stack>
                <Stack py={4} width={'100%'} direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={{ md: 1, xs: .5 }} sx={{ pt: 4, alignSelf: { xs: 'flex-start', md: 'flex-end' } }}>
                        {/* <SubdirectoryArrowRightIcon sx={{ color: theme.palette.secondary.main, fontSize: 18, }} />
                        <Link passHref target='_blank' href={`/kontaktai`}>
                            <Typography variant='body1' color={theme.palette.secondary.main} sx={{ ":hover": { textDecoration: 'underline' } }}>
                                {'Kontaktai'}
                            </Typography>
                        </Link> */}
                    </Stack>
                    <Stack pb={{ xs: 6 }} width={{ xs: '100%', md: '50%' }}>
                        <PriceInquiryForm />
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}
