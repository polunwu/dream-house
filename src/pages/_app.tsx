import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Rokkitt } from 'next/font/google';

const rokkitt = Rokkitt({ subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${rokkitt.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
