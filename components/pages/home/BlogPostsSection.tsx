import { BlogPostsType } from '@/app/types/BlogPostsTypes';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';
import { SectionTitle } from '@/components/layout/SectionTitle';
import { getTheme } from '@/components/layout/Theme';
import BlogPostCard from '@/components/shared/BlogPostCard';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

type Props = {
    blogPosts?: BlogPostsType | null;
}

export const BlogPostsSection = ({ blogPosts }: Props) => {
    const theme = getTheme()
    const renderBlogPosts = blogPosts?.data?.map((blogPost, i) => {
        return (
            <Grid key={blogPost.id} item xs={12} sm={12} lg={12}>
                <BlogPostCard reversed={i % 2 === 1} blogPost={blogPost} color={theme.palette.primary.main} />
            </Grid>
        )
    })
    return (
        <Stack sx={{ backgroundColor: '#f5f5f5', position: 'relative', zIndex: 0 }}>
            <Stack sx={{
                pb: 12,
                backgroundColor: '#f5f5f5',
                width: '100%', maxWidth: 'xl', mx: 'auto',
                px: { xl: 2, md: 4, xs: 2 }, pt: { xl: 2, md: 4, xs: 2 },
            }}>
                <Stack pt={6} sx={{ width: { xs: '100%', md: '50%' } }}>
                    <SectionTitle title={<>Nekilnojamojo turto&nbsp;<br />
                        <span style={{ color: theme.palette.secondary.main }}>
                            naujienos
                        </span></>} />
                    <SectionSubtitle text={"Mano asmeninės įžvalgos ir Nekilnojamojo turto rinkos naujienos bei aktualijos:"} />
                </Stack>
                <Grid container direction={'row'} spacing={5} sx={{ my: 4 }}>
                    {renderBlogPosts}
                </Grid>
            </Stack>
        </Stack>
    )
}
