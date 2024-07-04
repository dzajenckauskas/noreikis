import { getCompanyAge } from '@/app/getCompanyAge'
import { theme } from '@/components/layout/Theme'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import CountUp from "react-countup";

export const Counter = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} alignItems={{ xs: 'space-between', sm: 'flex-start' }}
            spacing={{ md: 8, sm: 8, xs: 4 }} sx={{ width: { xs: '100%', sm: '70%', md: '33%' }, pt: 8, px: { xs: 2 } }}>
            <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                <Stack direction={'row'} spacing={1} pb={1}>
                    <Typography component={'p'} fontSize={{ xs: 60, sm: 72 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                        <CountUp enableScrollSpy duration={3} end={98} />%
                    </Typography>
                </Stack>
                <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                    Klientų rekomenduoja
                </Typography>
            </Stack>
            <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                <Stack direction={'row'} spacing={1} pb={1}>
                    <Typography component={'p'} fontSize={{ xs: 60, sm: 72 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                        <CountUp enableScrollSpy duration={3} end={85} />%
                    </Typography>
                </Stack>
                <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                    NT objektų parduodama per 3 savaites
                </Typography>
            </Stack>
            <Stack alignItems={'flex-start'} maxWidth={{ xs: '60%', sm: '100%', md: '180px' }}>
                <Stack direction={'row'} spacing={1} pb={1}>
                    <Typography component={'p'} fontSize={{ xs: 60, sm: 72 }} lineHeight={1} color={theme.palette.secondary.main} fontWeight={700}>
                        <CountUp enableScrollSpy duration={3} end={getCompanyAge()} />+
                    </Typography>
                </Stack>
                <Typography component={'p'} variant="body2" color={theme.palette.primary.main} fontWeight={400}>
                    Metai patirties
                </Typography>
            </Stack>
        </Stack>
    )
}
