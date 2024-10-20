import Image from 'next/image';
import { TransText } from '@/components/TransText';

export default function Home() {
  return (
    <div className='w-full h-full min-h-screen bg-slate-200 flex'>
      {/* Left */}
      <section className='flex-auto flex flex-col'>
        <div className='flex-auto relative'>
          <Image
            src={'/images/home_bg_1.png'}
            alt={'home_bg_1'}
            priority
            fill
            className='object-cover'
          />
        </div>
        <div className='flex-auto relative max-h-[16%] flex'>
          <div className='flex-auto max-w-[14%] bg-primary relative'>
            <div className='absolute -top-[43%] right-0 bottom-0 left-0 bg-primary'>
              我是房東
            </div>
          </div>
          <div className='flex-auto bg-secondary'>Taipei Dreamhouse</div>
          <div className='flex-auto max-w-[31%] bg-secondary'>重設代碼</div>
        </div>
      </section>
      {/* Right */}
      <section className='flex-auto max-w-[30%] flex flex-col'>
        <div className='flex-auto bg-primary max-h-[26%] relative'>
          <div className='absolute top-0 right-0 bottom-0 -left-[10%] bg-primary'>
            <TransText
              paddingX={24}
              paddingY={12}
              textStyle={{
                fontWeight: '600',
              }}
            >
              租客代碼
            </TransText>
          </div>
        </div>
        <div className='flex-auto bg-primary max-h-[14%] relative'>
          <div className='absolute top-0 right-0 bottom-0 -left-1/3 bg-primary'>
            <TransText
              paddingX={18}
              paddingY={12}
              textStyle={{
                fontWeight: '600',
              }}
            >
              <span>(a</span>
              <span className='text-secondary'>000000000</span>
              <span>)</span>
            </TransText>
          </div>
        </div>
        <div className='flex-auto bg-secondary max-h-[25%]'>登入找房</div>
        <div className='flex-auto relative'>
          <Image
            src={'/images/home_bg_2.png'}
            alt={'home_bg_2'}
            priority
            fill
            className='object-cover'
          />
        </div>
      </section>
    </div>
  );
}
