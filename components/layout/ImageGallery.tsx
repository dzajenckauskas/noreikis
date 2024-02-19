import { ImageType } from '@/app/types/ImageTypes';
import Stack from '@mui/material/Stack';
import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/legacy/image"
import useIntersectionObserver from '@/app/useIntersectionObserver';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { theme } from './Theme';
// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];



type Props = {
    images: ImageType[]
}
export const ImageCarousel = ({ images }: Props) => {
    const imgRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(imgRef, 'animate__animated animate__fadeIn');

    // const thumbItems = (items: any[], [setThumbIndex, setThumbAnimation]: [React.Dispatch<React.SetStateAction<number>>, React.Dispatch<React.SetStateAction<boolean>>]) => {
    //     return items.map((item, i) => {
    //         const imageSrc = item.attributes?.formats.large?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.formats.large?.url}` : undefined

    //         return (
    //             <div key={i} onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
    //                 {/* {item} */}
    //                 <Stack ref={imgRef} sx={{ position: 'relative', width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' }, height: 100 }}>
    //                     {/* <Image priority alt={item?.attributes?.alternativeText ?? ''}
    //                         src={imageSrc ?? '/'} /> */}
    //                     <img src={imageSrc ?? '/'} />
    //                 </Stack>
    //             </div>
    //         )
    //     });
    // };

    // const responsive = {
    //     0: { items: 10 },
    //     600: { items: 10 },
    //     1000: { items: 10 },
    //     1200: { items: 10 },
    // };
    // const thumbs1 = images?.map((item, i) => {
    //     const imageSrc = item.attributes?.formats.large?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.formats.large?.url}` : undefined
    //     return (
    //         <Stack key={i} data-value={item.id} ref={imgRef}
    //             sx={{ position: 'relative', width: 200, height: 200 }}>
    //             <Image priority alt={item?.attributes?.alternativeText ?? ''}
    //                 layout='fill' objectFit='cover' src={imageSrc ?? '/'} />
    //         </Stack>
    //     )
    // }
    // )


    // const [mainIndex, setMainIndex] = useState(0);
    // const [mainAnimation, setMainAnimation] = useState(false);
    // const [thumbIndex, setThumbIndex] = useState(0);
    // const [thumbAnimation, setThumbAnimation] = useState(false);
    // const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    // const slideNext = () => {
    //     if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
    //         setThumbAnimation(true);
    //         setThumbIndex(thumbIndex + 1);
    //     }
    // };

    // const slidePrev = () => {
    //     if (!thumbAnimation && thumbIndex > 0) {
    //         setThumbAnimation(true);
    //         setThumbIndex(thumbIndex - 1);
    //     }
    // };

    // const syncMainBeforeChange = (_e: any) => {
    //     setMainAnimation(true);
    // };

    // const syncMainAfterChange = (e: { type: string; item: React.SetStateAction<number>; }) => {
    //     setMainAnimation(false);

    //     if (e.type === 'action') {
    //         setThumbIndex(e.item);
    //         setThumbAnimation(false);
    //     } else {
    //         setMainIndex(thumbIndex);
    //     }
    // };

    // const syncThumbs = (e: { item: React.SetStateAction<number>; }) => {
    //     setThumbIndex(e.item);
    //     setThumbAnimation(false);

    //     if (!mainAnimation) {
    //         setMainIndex(e.item);
    //     }
    // };
    console.log(images, "images");

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

    // const responsive = {
    //     0: { items: 10 },
    //     600: { items: 10 },
    //     1000: { items: 10 },
    //     1200: { items: 10 },
    // };
    const thumbs = images?.map((item, i) => {
        const imageSrc = item.attributes?.formats.large?.url ? `${process.env.NEXT_PUBLIC_API_URL}${item.attributes?.formats.large?.url}` : undefined
        return (
            <Stack key={i}
                sx={{ position: 'relative', width: 100, height: 100 }}>
                <Image priority alt={item?.attributes?.alternativeText ?? ''}
                    layout='responsive' width={100} height={100} objectFit='cover' src={imageSrc ?? '/'} />
            </Stack>
        )
    }
    )
    return (
        <Stack id={'id'} height={'inherit'}>
            {/* //     <AliceCarousel
        //         activeIndex={mainIndex}
        //         // animationDuration={8000}
        //         disableDotsControls
        //         renderPrevButton={() => { return <WestIcon sx={{ cursor: 'pointer' }} /> }}
        //         renderNextButton={() => { return <EastIcon sx={{ cursor: 'pointer' }} /> }}
        //         // disableButtonsControls
        //         items={items}
        //         // mouseTracking={!thumbAnimation}
        //         onSlideChange={syncMainBeforeChange}
        //         onSlideChanged={syncMainAfterChange}
        //         touchTracking={!thumbAnimation}
        //         disableSlideInfo animationType={'fadeout'} autoPlayInterval={4000}
        //         keyboardNavigation autoPlay infinite
        //         responsive={responsive}
        //     /> */}
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
            <Stack height={100}>
                {/* <AliceCarousel
                    responsive={responsive}
                    // renderPrevButton={() => {
                    //     return <Stack direction={'row'} sx={{ position: 'relative', top: -50 }} justifyContent={'flex-end'}>
                    //         <WestIcon sx={{ cursor: 'pointer', color: theme.palette.secondary.main }} />
                    //     </Stack>
                    // }}
                    // renderNextButton={() => {
                    //     return <Stack direction={'row'} sx={{ position: 'relative', top: -50 }} justifyContent={'flex-start'}>
                    //         <EastIcon sx={{ cursor: 'pointer', color: theme.palette.secondary.main }} />
                    //     </Stack>
                    // }}
                    disableSlideInfo
                    animationType={'fadeout'}
                    autoPlayInterval={4000}
                    mouseTracking keyboardNavigation
                    autoPlay
                    infinite
                    disableButtonsControls={images.length <= 1}
                    disableDotsControls
                    items={thumbs} /> */}
                {/* <AliceCarousel
                    // activeIndex={thumbIndex}
                    autoWidth
                    disableDotsControls
                    disableButtonsControls
                    items={thumbs}
                    mouseTracking={false}
                // onSlideChanged={syncThumbs}
                // touchTracking={!mainAnimation}
                /> */}
            </Stack>
            {/* <div className="thumbs">
                <AliceCarousel
                    responsive={responsive}
                    activeIndex={thumbIndex}
                    autoWidth
                    disableDotsControls
                    infinite
                    disableButtonsControls
                    items={thumbs1}
                    // mouseTracking={false}
                    onSlideChanged={syncThumbs}
                    touchTracking={!mainAnimation}
                />
                <div onClick={slidePrev}><WestIcon sx={{ cursor: 'pointer' }} /></div>
                <div onClick={slideNext}><EastIcon sx={{ cursor: 'pointer' }} /></div>
            </div > */}
        </Stack>
    )
};