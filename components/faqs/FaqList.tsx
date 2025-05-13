import React, { useState } from 'react';
import {
    Box,
    Collapse,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { FaqsType } from '@/app/types/FaqsType';
import { theme } from '../layout/Theme';
import { SectionTitle } from '../layout/SectionTitle';

type Props = {
    faqs?: FaqsType;
};

export const FaqList = ({ faqs }: Props) => {
    const faqItems = faqs?.data.attributes?.faqs || [];
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggleOpen = (id: number) => {
        setOpenIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <Stack sx={{ backgroundColor: '#fff', position: 'relative', zIndex: 11 }} py={4}>
            <Stack
                sx={{
                    width: '100%',
                    maxWidth: 'xl',
                    mx: 'auto',
                    px: { xl: 2, md: 4, xs: 2 },
                    pt: { xl: 2, md: 4, xs: 2 },
                    pb: 8,
                }}
            >
                <Stack pt={4} sx={{ width: { xs: '100%', md: '50%' } }}>
                    <SectionTitle title={<>D.U.K.</>} />
                </Stack>

                <Stack spacing={2} pt={5}>
                    {faqItems.map((faq) => {
                        const isOpen = openIds.includes(faq.id);

                        return (
                            <Box
                                onClick={() => toggleOpen(faq.id)}
                                key={faq.id}
                                sx={{
                                    cursor: 'pointer',
                                    p: 3,
                                    transition: 'background-color 0.3s ease',
                                    backgroundColor: isOpen ? theme.palette.grey[50] : theme.palette.grey[50],
                                    '&:hover': {
                                        backgroundColor: theme.palette.grey[50],
                                    },
                                }}
                            >
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Typography variant="h6" component="h4">
                                        {faq.question}
                                    </Typography>
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent parent click
                                            toggleOpen(faq.id);
                                        }}
                                        size="small"
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 0, // 8px, makes it square-ish
                                            transition: 'transform 0.3s ease',
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        }}
                                    >
                                        {isOpen ? <Remove fontSize='medium' /> : <Add fontSize='medium' />}
                                    </IconButton>

                                </Stack>

                                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                    <Typography
                                        variant="body1"
                                        component="div"
                                        sx={{ mt: 1 }}
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </Collapse>
                            </Box>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default FaqList;
