import { BlogPostType } from '@/app/types/BlogPostsTypes';
import useIntersectionObserver from '@/app/useIntersectionObserver';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useRef } from 'react';

type Props = {
    blogPost: BlogPostType;
    color?: string;
    reversed?: boolean;
}

const BlogPostCard = ({ blogPost, color, reversed }: Props) => {
    const elementRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(elementRef, 'animate__animated animate__fadeIn');
    const image = blogPost?.attributes?.images?.data?.[0]?.attributes
    const imageSrc = image ? `${process.env.NEXT_PUBLIC_API_URL}${image?.formats?.large?.url ?? image?.formats?.medium?.url}` : '/assets/images/img-placeholder.png'
    console.log(imageSrc, "imageSrc");

    return (
        <Stack ref={elementRef} key={blogPost.id}
            direction={{ xs: 'column', md: (reversed ? 'row-reverse' : 'row') }} spacing={4}>
            <Stack sx={{
                position: 'relative',
                minWidth: { xs: '100%', md: '50%' }, minHeight: '350px', height: '100%'
            }}>
                <Image priority alt={image?.alternativeText ?? ''}
                    layout='fill' objectFit='cover' objectPosition={'top'} src={imageSrc} />
            </Stack>
            <Stack height={'100%'} alignSelf={'center'}>
                <Link passHref href={'/naujienos/' + blogPost.attributes?.slug}>
                    <Typography variant='h5' component={'h2'} fontWeight={600} width={'70%'} pb={2} color={color}>
                        {blogPost.attributes?.title}
                    </Typography>
                </Link>
                <Typography color={color}>
                    {blogPost.attributes?.shortContent}
                </Typography>
                <Stack pt={4}>
                    <Link passHref href={'/naujienos/' + blogPost.attributes?.slug}>
                        <Button variant='contained' color='secondary'>
                            Skaityti straipsnį
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default BlogPostCard
