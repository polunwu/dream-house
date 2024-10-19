import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-full min-h-screen bg-slate-200 flex'>
      {/* Left */}
      <section className='flex-auto flex flex-col'>
        <div className='flex-auto relative'>
          <Image
            src={'/images/home_bg_1.png'}
            alt={'home_bg_1'}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex-auto relative max-h-[16%] flex'>
          <div className='flex-auto max-w-[14%] bg-primary'>我是房東</div>
          <div className='flex-auto bg-secondary'>Taipei Dreamhouse</div>
          <div className='flex-auto max-w-[31%] bg-secondary'>重設代碼</div>
        </div>
      </section>
      {/* Right */}
      <section className='flex-auto max-w-[30%] flex flex-col'>
        <div className='flex-auto bg-primary max-h-[26%]'>租客代碼</div>
        <div className='flex-auto bg-primary max-h-[14%]'>
          <span>(a</span>
          <span>000000000</span>
          <span>)</span>
        </div>
        <div className='flex-auto bg-secondary max-h-[25%]'>登入找房</div>
        <div className='flex-auto relative'>
          <Image
            src={'/images/home_bg_2.png'}
            alt={'home_bg_2'}
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>
    </div>
  );
}
