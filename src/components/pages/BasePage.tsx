/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NavButton } from "./TopBar";

import { backgroundSecondary } from "@/const/colors";
import { useStore } from "@/stores/storeContext";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import Loader from "../base/Loader";

const TopBar = dynamic(() => import("./TopBar"));
const Footer = dynamic(() => import("./Footer"));

type BasePageProps = {
  navButtons: ReadonlyArray<NavButton>;
  className?: string;
  children?: any;
  hideFooter?: boolean;
  hidePreview?: boolean;
  adminOnly?: boolean;
  authOnly?: boolean;
  authMessage?: string;
};

const LoaderContainer = styled(Loader)`
  z-index: 10001;
  padding: 40px 60px 60px 40px;
  background-color: ${backgroundSecondary};
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const LoaderMask = styled.div`
  position: fixed;
  width: 100vw;
  background: black;
  z-index: 10000;
  opacity: 0.5;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainTopBar = styled(TopBar)`
  padding: 80px 50px 0 50px;
  max-width: 1500px;
  display: flex;
  align-self: center;
  width: -webkit-fill-available;
`;

const GreyBackground = styled.div`
  padding: 30px 30px;

  background: ${backgroundSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainFooter = styled(Footer)`
  margin-top: 40px;
  max-width: 1200px;
  display: flex;
`;

const BasePage = ({
  className,
  children,
  hideFooter,
  hidePreview,
  navButtons,
  adminOnly,
}: BasePageProps) => {
  const { uiStateStore } = useStore();

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      uiStateStore.setLoading(true);
      // setTimeout(() => uiStateStore.setLoading(true), 0);
    };
    const handleStop = () => {
      uiStateStore.setLoading(false);
      // setTimeout(() => uiStateStore.setLoading(false), 0);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      setTimeout(() => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleStop);
        router.events.off("routeChangeError", handleStop);
      });
    };
  }, [router, uiStateStore]);

  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Chiba.Rocket – Логистическая компания</title>

        {hidePreview ? null : (
          <>
            <meta
              data-vue-meta="ssr"
              property="fb:pages"
              content="226046999608903"
            />
            <meta
              data-vue-meta="ssr"
              name="twitter:card"
              content="summary_large_image"
            />
            <meta
              data-vue-meta="ssr"
              name="twitter:site"
              content="@chibarocket"
            />
            <meta
              data-vue-meta="ssr"
              property="og:site_name"
              content="Chibarocket"
              data-vmid="og:site_name"
            />
            <meta
              data-vue-meta="ssr"
              property="og:title"
              content="Chiba.Rocket – Логистическая компания"
              data-vmid="og:title"
            />
            <meta
              data-vue-meta="ssr"
              name="twitter:title"
              content="Chiba.Rocket – Логистическая компания"
              data-vmid="twitter:title"
            />
            <meta
              data-vue-meta="ssr"
              name="aiturec:title"
              content="Chiba.Rocket – Логистическая компания"
              data-vmid="aiturec:title"
            />
            <meta
              data-vue-meta="ssr"
              name="description"
              content="Доставляем грузы по Москве и МО. Доставляем еду, продукты, личные вещи. По Москве доставляем товары от 99 рублей."
              data-vmid="description"
            />
            <meta
              data-vue-meta="ssr"
              itemProp="description"
              content="Доставляем грузы по Москве и МО. Доставляем еду, продукты, личные вещи. По Москве доставляем товары от 99 рублей."
              data-vmid="description:itemprop"
            />
            <meta
              data-vue-meta="ssr"
              property="og:description"
              content="Доставляем грузы по Москве и МО. Доставляем еду, продукты, личные вещи. По Москве доставляем товары от 99 рублей."
              data-vmid="og:description"
            />
            <meta
              data-vue-meta="ssr"
              name="twitter:description"
              content="Доставляем грузы по Москве и МО. Доставляем еду, продукты, личные вещи. По Москве доставляем товары от 99 рублей."
              data-vmid="twitter:description"
            />
            <meta
              data-vue-meta="ssr"
              property="aiturec:description"
              content="Доставляем грузы по Москве и МО. Доставляем еду, продукты, личные вещи. По Москве доставляем товары от 99 рублей."
              data-vmid="aiturec:description"
            />
            <meta
              data-vue-meta="ssr"
              itemProp="image"
              content="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="image:itemprop"
            />
            <meta
              data-vue-meta="ssr"
              property="og:image"
              content="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="og:image"
            />
            <meta
              data-vue-meta="ssr"
              property="og:image:width"
              content="1200"
              data-vmid="og:image:width"
            />
            <meta
              data-vue-meta="ssr"
              property="og:image:height"
              content="630"
              data-vmid="og:image:height"
            />
            <meta
              data-vue-meta="ssr"
              property="aiturec:image"
              content="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="aiturec:image"
            />
            <meta
              data-vue-meta="ssr"
              name="twitter:image"
              content="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="twitter:image"
            />
            <meta
              data-vue-meta="ssr"
              property="vk:image"
              content="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="vk:image"
            />
            <link
              data-vue-meta="ssr"
              href="https://chibarocket.aqulasoft.com/preview.png"
              data-vmid="image:href"
            />
            <link
              data-vue-meta="ssr"
              href="https://chibarocket.aqulasoft.com"
              rel="og:url"
              data-vmid="og:url"
            />
            <link
              data-vue-meta="ssr"
              href="https://chibarocket.aqulasoft.com"
              type="application/rss+xml"
              title=""
              rel="alternate"
            />
            <link
              data-vue-meta="ssr"
              href="https://chibarocket.aqulasoft.com"
              rel="canonical"
              data-vmid="canonical"
            />
            <link data-vue-meta="ssr" data-vmid="hreflang" />
            <link
              data-vue-meta="ssr"
              rel="amphtml"
              href="https://chibarocket.aqulasoft.com"
            />
            <meta
              data-vue-meta="ssr"
              property="og:type"
              content="article"
              data-vmid="og:type"
            />
            <meta
              data-vue-meta="ssr"
              property="og:locale"
              content="ru_RU"
              data-vmid="og:locale"
            />
          </>
        )}

        <meta
          data-vue-meta="ssr"
          name="keywords"
          content="Логистика Москва, доставка по Москве, доставка по МО, доставка по московской области, доставка продуктов, доставка в термобоксах, доставка недорого, доставка быстро, доставка по фиксированной цене, доставка пирожных, доставка тортов"
        />

        <meta name="apple-mobile-web-app-status-bar-style" content="#b00101" />
        <meta name="msapplication-TileColor" content="#b00101" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className={className}>
        <MainTopBar navButtons={navButtons} />
        {children}
        {!hideFooter ? (
          <GreyBackground>
            <MainFooter />
          </GreyBackground>
        ) : null}
        {uiStateStore.isLoading ? (
          <>
            <LoaderMask></LoaderMask>
            <LoaderContainer />
          </>
        ) : null}
      </Main>
    </div>
  );
};

export default observer(BasePage);
