import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Image from 'next/legacy/image';
import { useState } from 'react';
import { ImageType } from '@/app/types/ImageTypes';

type Props = {
    images: ImageType[];
}
const ImageCarousel = ({ images }: Props) => {
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
            <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}>
                {images.length > 1 &&
                    <Stack sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, flexDirection: 'column', width: '80px', pr: 1 }}>
                        {renderThumbnails}
                    </Stack>}

                <div style={{
                    width: '100%', maxHeight: '60vh', position: 'relative', minHeight: '50vh', height: 'auto',
                    overflow: 'hidden', display: 'flex', border: '0.5px solid #e3e3e3', alignItems: 'center'
                }}>
                    {images && images.length > 1 &&
                        <Stack sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'flex' }, justifyContent: 'space-between' }}>
                            <button onClick={toPreviousSlide} style={{
                                border: 'none', zIndex: 999,
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                position: 'absolute', left: '-15px', marginTop: -25, filter: 'drop-shadow(0 0 0.75rem crimson)'
                            }}>
                                {'<'}
                                {/* <SlideButtonBack fillColor='transparent' color='#192357' scale={1} /> */}
                            </button>
                        </Stack>}
                    <Image
                        priority
                        layout='fill'
                        objectFit="contain"
                        src={`${process.env.NEXT_PUBLIC_API_URL}` + images[activeSlide]?.attributes?.url ?? "/assets/images/fallback-img.jpeg"}
                        alt={'product.translation?.title'}
                        onTouchStart={(e) => { handleTouchStart(e) }}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={(e) => { handleTouchMove(e) }}
                    />

                    {images && images.length > 1 &&
                        <Stack sx={{ display: { lg: 'none', md: 'none', sm: 'none', xs: 'flex' }, justifyContent: 'space-between' }}>
                            <button onClick={toNextSlide} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer', transform: 'rotate(180deg)',
                                position: 'absolute', right: '-15px', marginTop: -35
                            }}>
                                {">"}
                                {/* <SlideButtonBack fillColor='transparent' color='#192357' scale={1} /> */}
                            </button>
                        </Stack>}

                </div>

            </Stack>


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
                            {/* <ZoomIcon /> */}
                            {"+"}
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
                <Stack position={'relative'} sx={{ backgroundColor: "#fff", position: 'relative', maxWidth: '80vw', maxHeight: '80vh', width: '100%', height: '100%' }}>
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
                                {/* <SlideButtonBack fillColor='#fff' color='#192357' scale={1} /> */}
                            </button>
                            <button onClick={toNextImage} style={{
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer', transform: 'rotate(180deg)',
                                position: 'absolute', right: '-60px', marginTop: -20, top: '50%'
                            }}>
                                {">"}
                                {/* <SlideButtonBack fillColor='#fff' color='#192357' scale={1} /> */}
                            </button>
                        </Stack>}
                </Stack>
            </Backdrop>
        </>

    )
}

export default ImageCarousel