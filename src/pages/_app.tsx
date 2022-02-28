import React from 'react';
import { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import '../styles/fonts.css';
import { primary } from '@/const/colors';
import '../api/apiClient'; // create api client on start
import { StoreProvider } from '@/stores/storeContext';
import rootStore from '@/stores/rootStore';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <Global
        styles={css`
          body {
            min-width: 350px;
            font-family: 'geometria', Arial, sans-serif;
            line-height: 1.55;
            color: ${primary};
            margin: 0;
          }

          .ReactModal__Body--open {
            overflow: hidden;
          }
          .ReactModal__Overlay {
            z-index: 1000;
          }

          @keyframes MoveUpDown {
            0% {
              transform: translateX(0px) translateY(0px) rotate(0deg)
                scale(1, 1);
              animation-timing-function: linear;
            }
            50% {
              transform: translateX(0px) translateY(-15px) rotate(0deg)
                scale(1, 1);
              animation-timing-function: linear;
            }
            100% {
              transform: translateX(0px) translateY(0px) rotate(0deg)
                scale(1, 1);
            }
          }
        `}
      />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
