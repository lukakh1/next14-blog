import Image from 'next/image';

import black from './../../public/images/black.png';
import curly from './../../public/images/curly.png';
import blonde from './../../public/images/blonde.png';
import stars from './../../public/images/stars.png';
import H1 from '@/components/h1';

export default function PhotosPage() {
  return (
    <div>
      <H1>my photos</H1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='h-60 overflow-hidden relative'>
          <Image
            alt='blackone'
            src={black}
            fill
            className='object-cover w-full h-full'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={true}
            quality={100}
            placeholder='blur'
          />
        </div>
        <div className='h-60 overflow-hidden relative'>
          <Image
            alt='blondeone'
            src={blonde}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority={true}
            className='object-cover w-full h-full'
            placeholder='blur'
          />
        </div>
        <div className='h-60 overflow-hidden relative'>
          <Image
            alt='starsone'
            src={stars}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover w-full h-full'
            placeholder='blur'
          />
        </div>
        <div className='h-60 overflow-hidden relative'>
          <Image
            alt='curlyone'
            src={curly}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover w-full h-full'
            placeholder='blur'
          />
        </div>
      </div>
    </div>
  );
}
