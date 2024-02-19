import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Image from 'next/legacy/image';
import { useRef, useState } from 'react';
import { ImageType } from '@/app/types/ImageTypes';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { theme } from './Theme';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import AliceCarousel from 'react-alice-carousel';
import useIntersectionObserver from '@/app/useIntersectionObserver';

type Props = {
    images: ImageType[];
}
const ImageCarousel3 = ({ images }: Props) => {
    const [openFullscreen, setOpenFullscreen] = useState(false);
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const [activeImage, setActiveImage] = useState<number>(0)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleClose = () => {
        setOpenFullscreen(false);
    };
    const handleToggle = () => {
        setActiveImage(activeSlide)
        setOpenFullscreen(!openFullscreen);
    };

    function handleTouchStart(e: any) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e: any) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const toNextSlide = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveSlide((activeSlide + 1) > max ? 0 : activeSlide + 1)
        }
    }
    const toPreviousSlide = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveSlide((activeSlide - 1) < 0 ? max : activeSlide - 1)
        }
    }
    const toNextImage = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveImage((activeImage + 1) > max ? 0 : activeImage + 1)
        }
    }
    const toPreviousImage = () => {
        if (images) {
            const max = images && images.length - 1
            setActiveImage((activeImage - 1) < 0 ? max : activeImage - 1)
        }
    }

    function handleTouchEnd() {
        if (images)
            if (touchStart - touchEnd > 100) {
                toNextSlide()
            }
        if (touchStart - touchEnd < -100) {
            toPreviousSlide()
        }
    }

    const handleSelectSlide = (id: any) => {
        let idIndex = Number(id)
        setActiveSlide(idIndex);
    }
    const imgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');
    const items = images?.map((item, i) => {
        const imageSrc = item.attributes?.formats.large?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.url}` : undefined
        return (
            <Stack key={i} data-value={item.id} ref={imgRef}
                sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 600 }}>
                <Image priority alt={item?.attributes?.alternativeText ?? ''}
                    layout='responsive' objectFit='cover' height={item.attributes?.height} width={100} src={imageSrc ?? '/'} />
            </Stack>
        )
    }
    )

    const renderThumbnails = images.map((m, key) => {
        return (
            <Stack key={key} sx={{ border: '0.5px solid #E3E3E3', marginBottom: '8px', opacity: activeSlide === key ? 1 : 0.5, cursor: 'pointer' }}>
                <Image id={key.toString()}
                    alt={m.attributes?.alternativeText ?? ''}
                    onClick={(e: any) => { handleSelectSlide(e.target.id) }}
                    layout={'responsive'}
                    objectFit={'cover'}
                    width={70}
                    height={70}
                    src={`${process.env.NEXT_PUBLIC_API_URL}` + `${m.attributes?.url ?? "/assets/images/fallback-img.jpeg"}`}
                />
            </Stack>
        )
    })
    const renderDots = images && images.map((m, key) => {
        if (m)
            return (
                <span key={key} id={key.toString()} onClick={(e: any) => { handleSelectSlide(e.target.id) }}
                    style={{
                        marginLeft: '3px', marginRight: '3px', width: '10px', height: '10px',
                        borderRadius: '50%', border: '0.5px solid #e3e3e3', cursor: 'pointer',
                        backgroundColor: activeSlide === key ? '#192357' : 'transparent'
                    }}></span>
            )
    })

    return (
        <>
            <AliceCarousel
                renderPrevButton={() => {
                    return <Stack direction={'row'} sx={{
                        cursor: 'pointer',
                        backgroundColor: '#fff', width: 40, height: 40, position: 'absolute', opacity: .6,
                        ':hover': { opacity: .9 }, left: 0, bottom: 24, pt: 1, pr: 1
                    }} justifyContent={'flex-end'}>
                        <WestIcon sx={{ color: theme.palette.primary.main }} />
                    </Stack>
                }}
                renderNextButton={() => {
                    return <Stack direction={'row'} sx={{
                        cursor: 'pointer',
                        backgroundColor: '#fff', width: 40, height: 40, position: 'absolute', opacity: .6,
                        ':hover': { opacity: .9 }, left: 40, bottom: 24, pt: 1, pl: 1
                    }} justifyContent={'flex-start'}>
                        <EastIcon sx={{ color: theme.palette.primary.main }} />
                    </Stack>
                }}
                disableSlideInfo animationType={'fadeout'}
                autoPlayInterval={4000}
                mouseTracking keyboardNavigation
                autoPlay
                infinite
                disableButtonsControls={images.length <= 1}
                disableDotsControls
                items={items} />

            {images.length > 1 &&
                <Stack sx={{ flexDirection: 'row', width: '80px', pr: 1 }}>
                    {renderThumbnails}
                </Stack>}
            <>
                <Stack direction={'row'} height={'0px'} mb={{ lg: 4, md: 4, sm: 4, xs: 0 }} sx={{
                    justifyContent: { lg: images.length > 1 ? 'space-between' : 'flex-end', md: images.length > 1 ? 'space-between' : 'flex-end', sm: images.length > 1 ? 'space-between' : 'flex-end', xs: 'flex-end' }
                }}>
                    {images.length > 1 &&
                        <Stack direction={'row'} alignItems={'center'} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' } }}
                            marginLeft={{ xl: '46px', lg: '42px', md: '42px', sm: '-28px' }} mt={3}>
                            <button onClick={toPreviousSlide} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer', marginTop: 4
                            }}>
                                {"<"}
                                {/* <SlideButtonBack fillColor='transparent' color='#192357' /> */}
                            </button>
                            <Stack mb={1} direction={'row'} sx={{ fontSize: 18, color: '#192357' }}>
                                {activeSlide + 1}
                                <span style={{ margin: '0 8px' }}>iš</span>
                                {images.length}
                            </Stack>
                            <button onClick={toNextSlide} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                transform: 'rotate(180deg)', marginTop: '-16px'
                            }}>
                                {"<"}
                                {/* <SlideButtonBack fillColor='transparent' color='#192357' /> */}
                            </button>
                        </Stack>}
                    <Stack sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' } }}>
                        <button style={{
                            position: 'relative', right: 0, bottom: 65,
                            outline: 'none', background: 'transparent', border: 'none', cursor: 'pointer'
                        }} onClick={handleToggle}>
                            <FullscreenIcon />
                        </button>
                    </Stack>
                </Stack>
                <Stack direction={'row'} sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: images.length > 1 ? 'flex' : 'none' }, justifyContent: 'center', position: 'relative', top: '20px', mb: 2 }}>
                    {renderDots}
                </Stack>
            </>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1 }}
                open={openFullscreen}>
                <Stack position={'relative'} sx={{
                    // backgroundColor: "#fff",
                    position: 'relative', maxWidth: '80vw', maxHeight: '80vh', width: '100%', height: '100%'
                }}>
                    <button onClick={handleClose} style={{
                        position: "absolute", right: 0, marginTop: '10px', marginRight: '10px',
                        outline: 'none', background: 'transparent', border: 'none', cursor: 'pointer',
                        width: '34px', height: '34px', backgroundColor: '#fff', paddingTop: '4px',
                        borderRadius: '5px', zIndex: 999
                    }}>
                        {/* <CloseIcon /> */}
                        {'X'}
                    </button>

                    <Image
                        priority
                        layout='fill'
                        objectFit="contain"
                        src={`${process.env.NEXT_PUBLIC_API_URL}` + images[activeImage]?.attributes?.url ?? "/assets/images/fallback-img.jpeg"}
                        alt={'product.translation?.title'}
                        onTouchStart={(e) => { handleTouchStart(e) }}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={(e) => { handleTouchMove(e) }}
                    />
                    {images.length > 1 &&
                        <Stack sx={{ justifyContent: 'space-between' }}>
                            <button onClick={toPreviousImage} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                position: 'absolute', left: '-60px', marginTop: -10, top: '50%'
                            }}>
                                {"<"}
                            </button>
                            <button onClick={toNextImage} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer', transform: 'rotate(180deg)',
                                position: 'absolute', right: '-60px', marginTop: -20, top: '50%'
                            }}>
                                {">"}
                            </button>
                        </Stack>}
                </Stack>
            </Backdrop>
        </>

    )
}

export default ImageCarousel3