import { BlogPostType } from '@/app/types/BlogPostsTypes';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from "next/legacy/image";
import Link from 'next/link';

type Props = {
    blogPost: BlogPostType;
    color?: string;
}

const BlogPostCard = ({ blogPost, color }: Props) => {
    const image = blogPost.attributes?.images?.data?.[0]?.attributes
    const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${image?.formats?.small?.url ?? image?.formats?.medium?.url}`
    return (
        <Stack key={blogPost.id} direction={{ xs: 'column', md: 'row' }} spacing={4}>
            <Stack sx={{
                position: 'relative',
                minWidth: { xs: '100%', md: '50%' }, minHeight: '350px', height: '100%'
            }}>
                <Image priority alt={image?.alternativeText ?? ''}
                    layout='fill' objectFit='cover' width={300} height={100} src={imageSrc} />
            </Stack>
            <Stack height={'100%'}>
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
