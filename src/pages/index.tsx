import Image from 'next/image';
import { TransText } from '@/components/TransText';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div className='flex flex-col w-full h-full min-h-screen bg-slate-200'>
          <div className='flex-auto max-h-[85px] flex'>
            <div className='flex-auto max-w-[45%] bg-secondary px-1 py-2'>
              <div className='relative h-full'>
                <div
                  className='absolute inset-0 border-4 rounded-[50%]'
                  style={{
                    padding: '12px 8px',
                  }}
                >
                  <TransText
                    textStyle={{
                      fontWeight: '600',
                    }}
                  >
                    ~登入找房~
                  </TransText>
                </div>
              </div>
            </div>
            <div className='flex-auto bg-primary px-1 py-1'>
              <TransText
                textStyle={{
                  fontWeight: '600',
                }}
              >
                租客代碼
              </TransText>
            </div>
          </div>
          <div className='flex-auto relative'>
            <Image
              src={'./images/mb/home_bg.png'}
              alt={'home_bg_1'}
              priority
              fill
              sizes='50vw'
              className='object-cover'
            />
          </div>
          <div className='flex-auto max-h-[56px]'></div>
        </div>
      ) : (
        <div className='flex w-full h-full min-h-screen bg-slate-200'>
          <style jsx>{`
            .cursor-home:hover {
              cursor: url('./images/cursor_home.png') 53 53, pointer;
            }
            .cursor-lord:hover {
              cursor: url('./images/cursor_lord.png') 53 53, pointer;
            }
            .cursor-key:hover {
              cursor: url('./images/cursor_key.png') 53 53, pointer;
            }
          `}</style>
          {/* Left */}
          <section className='flex-auto flex flex-col'>
            <div className='flex-auto relative'>
              <Image
                src={'./images/home_bg_1.png'}
                alt={'home_bg_1'}
                priority
                fill
                sizes='50vw'
                className='object-cover'
              />
            </div>
            <div className='flex-auto relative max-h-[16%] flex'>
              <div className='cursor-lord flex-auto max-w-[14%] bg-primary relative'>
                <div className='absolute -top-[43%] right-0 bottom-0 left-0 bg-primary flex flex-col'>
                  <div className='flex-auto'>
                    <TransText
                      paddingX={8}
                      textStyle={{
                        fontWeight: '200',
                      }}
                    >
                      我是
                    </TransText>
                  </div>
                  <div className='flex-auto'>
                    <TransText
                      paddingX={8}
                      textStyle={{
                        fontWeight: '200',
                      }}
                    >
                      房東
                    </TransText>
                  </div>
                </div>
              </div>
              <div className='flex-auto bg-secondary px-6 py-8'>
                <TransText
                  textStyle={{
                    fontWeight: '600',
                  }}
                >
                  Taipei Dreamhouse
                </TransText>
              </div>
              <div className='cursor-key flex-auto max-w-[31%] bg-secondary px-5 py-2'>
                <div className='relative h-full'>
                  <div
                    className='absolute inset-0 rounded-[50%]'
                    style={{
                      borderWidth: '5px',
                      padding: '32px 18px',
                    }}
                  >
                    <TransText
                      textStyle={{
                        fontWeight: '500',
                      }}
                    >
                      重設代碼
                    </TransText>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Right */}
          <section className='flex-auto max-w-[30%] flex flex-col'>
            <div className='flex-auto bg-primary max-h-[26%] relative'>
              <div className='absolute top-0 right-0 bottom-0 -left-[10%] bg-primary'>
                <TransText
                  paddingX={12}
                  paddingY={6}
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
                  paddingX={9}
                  paddingY={6}
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
            <div className='cursor-home flex-auto bg-secondary max-h-[25%] px-2 py-5'>
              <div className='relative h-full'>
                <div
                  className='absolute inset-0 border-8 rounded-[50%]'
                  style={{
                    padding: '30px',
                  }}
                >
                  <TransText
                    textStyle={{
                      fontWeight: '600',
                    }}
                  >
                    ~登入找房~
                  </TransText>
                </div>
              </div>
            </div>
            <div className='flex-auto relative'>
              <Image
                src={'./images/home_bg_2.png'}
                alt={'home_bg_2'}
                priority
                fill
                sizes='50vw'
                className='object-cover'
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
