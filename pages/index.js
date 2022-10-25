import Link from 'next/link';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import React, {useState} from "react";
import scss from "../styles/sass/_index.module.scss";
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import 'animate.css';


export default function Main() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  

  return (
<>
<main>
      <>
  <Head>
    <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta content="webポートフォリオサイトです。" name="description"/>
    <title>Ken | Web Portfolio</title>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"/>
    <link rel="stylesheet" href="../styles/sass/_main.module.scss"/>
    <link rel="stylesheet" href="css/style.min.css"/> 
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.css"/>   */}
  </Head>
  
  
    <section id="js-header" className={scss.header}>
      <div className={`${scss.wrapper}  ${scss['header-container']}`}>
        <h1 className={scss['site-title']}>
          <a href="#">KEN PORTFOLIO</a>
        </h1>

        <nav className={scss['header-nav']} id="js-header-nav">
          <ul className={scss['header-ul']}>
            <li><Link href="#"><a>Home</a></Link></li>
            <li><Link href="#js-service"><a>Service</a></Link></li>
            <li><Link href="#js-about"><a>About</a></Link></li>
            <li><Link href="#js-works"><a>Works</a></Link></li>
            <li><Link href="#js-contact"><a>Contact</a></Link></li>  
          </ul>
        </nav>
        
        
        <header id="header" className={scss.header}>
          <div className={scss.container}>
          <div className={scss.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? scss.open : undefined}></span>
            <span className={openMenu ? scss.open : undefined}></span>
            <p className={openMenu ? scss.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${scss.drawerMenu} ${openMenu ? scss.open : undefined}`}>
        <ul>
          <div className={scss.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="#">
              <a>
                <p className={scss.mainTitle}>Home</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#js-service">
              <a>
              <p className={scss.mainTitle}>Service</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#js-about">
              <a>
              <p className={scss.mainTitle}>About</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#js-works">
              <a>
              <p className={scss.mainTitle}>Works</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#js-contact">
              <a>
              <p className={scss.mainTitle}>Contact</p> 
              </a>  
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>


      <div className={scss.mainvisual}>
        <div className={`${scss.mainvisualContainer} ${scss.wrapper}`}>
          <div className={scss.mainvisualImage}>
          <Image src="/images/mainvisual.png" alt="メインモックアップ" width={612} height={380} />
          </div>
          <div className={scss['mainvisual-textunit']}>
            <h2 className={scss['mainvisual-title']}>KEN<br/>PORTFOLIO</h2>
            <p className={scss['mainvisual-text']}>傾聴を重視し、お客様のご満足のいくサイトをお作り出来るよう心掛けています。</p>
          </div>
        </div>
      </div>
      
    
      <section id="js-service" className={`${scss.service} ${scss.wrapper} ${scss['internal-links']}`}>
        <h2 className={scss['section-title']}>
          <span className={scss.en}>Service</span>
          <span className={scss.ja}>出来ること</span>
        </h2>
        
        <ul className={`${scss['service-container']} ${scss.slidebottom}`}>
          <li className={`${scss['service-list']}`}>
            <Image className={scss['service-image']} src="/images/service-01.svg" alt="カンプ再現" width="152" height="120"/>
            <h3 className={scss['service-title']}>コーディング</h3>
            <p className={scss['service-text']}>デザインカンプを正確に再現致<br/>します。<br/>
              レスポンシブデザインにより,<br/>スマートフォンやタブレットに<br/>対応させることが出来ます。</p>
          </li>
          <li className={`${scss['service-list']}`}>
            <Image className={scss['service-image']} src="/images/service-02.svg" alt="アニメーション" width="152" height="120"/>
            <h3 className={scss['service-title']}>アニメーション</h3>
            <p className={scss['service-text']}>サイトにアニメーションを使っ<br/>て動きをつけます。<br/>
              スクロールに応じたアニメー<br/>ション,ハンバーガーメニュー,<br/>アコーディオンなど実装可能で<br/>す。</p>
          </li>
          
          <li className={`${scss['service-list']}`}>
            <Image className={scss['service-image']} src="/images/service-03.svg" alt="WordPress構築" width="152" height="120"/>
            <h3 className={scss['service-title']}>WordPress構築</h3>
            <p className={scss['service-text']}>WordPressでオリジナルテーマ<br/>を作成致します。<br/>
              既存サイトのWordPress化も可<br/>能です。<br/>また,状況に応じてカスタムフィ<br/>ールドなども扱います。</p>
          </li>
          
        </ul>
      </section>
    
      
      
      <section id="js-about" className={`${scss.about} ${scss['internal-links']}`}>
        <div className={scss.wrapper}>
          <h2 className={scss['section-title']}>
            <span className={scss.en}>About</span>
            <span className={scss.ja}>私について</span>
          </h2>

          <div className={scss['about-container']}>
            <div className={scss['about-image']}>
              <Image src="/images/about-01.jpg" alt="私の似顔絵" width="394" height="400"/>
            </div>
            <div className={scss['about-textunit']}>
              <p className={scss['about-name']}>名前：KEN</p>
              <p className={scss['about-text']}>福岡県出身の35歳。事務職で働く傍ら、web制作をしています。
                (デザインは専門外です。)<br/>
                コードを書く楽しさから、学習・創作に打ち込むようになりました。<br/>
                お困りの方を助けることの出来る存在でありたいです。よろしくお願い致します。
              </p>
              <h4 className={scss['about-qa']}>Q＆A</h4>

              

            <div>
              <Accordion className={scss.accordion} allowZeroExpanded >
                <AccordionItem className={scss.accordionItem}>
                  <AccordionItemHeading className={scss.accordionHead}>
                    <AccordionItemButton className={scss.accordionButton}>＋ 趣味は？</AccordionItemButton>
                  </AccordionItemHeading >
                  <AccordionItemPanel className={scss.accordionPanel}>・読書・街巡り・旅行・音楽鑑賞・ゲームなど。</AccordionItemPanel>
                  <AccordionItemHeading className={scss.accordionHead}>
                    <AccordionItemButton className={scss.accordionButton}>＋ 長所は？</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className={scss.accordionPanel}>・集中力があります。・知的好奇心が強いです。</AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
              
            </div>
          </div>
        </div>
      </section>
    
      
    
      <section id="js-works" className={scss.wrapper}>
        <h2 className={scss['section-title']}>
          <span className={scss.en}>Works</span>
          <span className={scss.ja}>制作実績</span>
        </h2>
            
        <div className={scss['swiper-container']}>
  
          <Swiper
            className={scss.swiper}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: "#button_prev",
              nextEl: "#button_next"
          }}
            pagination={{
            clickable: true,
            el: "#pagination",
        }}
        >
            
              <SwiperSlide className={scss.swiperSlide}>
                <Link href="corporate"><Image src="/images/portfolio-swiper.png" alt="1" width="420" height="360"/></Link>
              </SwiperSlide>
              <SwiperSlide className={scss.swiperSlide}>
                <Link href="sneakers"><Image src="/images/portfolio-swiper2.png" alt="2" width="420" height="360" /></Link>
              </SwiperSlide>
              <SwiperSlide className={scss.swiperSlide}>
                <Link href="coffee"><Image src="/images/portfolio-swiper3.png" alt="3" width="420" height="360"/></Link>
              </SwiperSlide>
              <SwiperSlide className={scss.swiperSlide}>
                <Link href="interior"><Image src="/images/portfolio-swiper4.png" alt="4" width="420" height="360"/></Link>
              </SwiperSlide>
              <SwiperSlide className={scss.swiperSlide}>
                <Link href="original"><Image src="/images/portfolio-swiper5.png" alt="5" width="420" height="360"/></Link>
              </SwiperSlide>
          </Swiper>

          <div id="button_prev" className={scss['swiper-button-prev']}></div>
          <div id="button_next" className={scss['swiper-button-next']}></div>
          
          <div id="pagination" className= {scss['swiper-pagination']}></div>

        </div>
      
      <div className={scss['works-button']}><Link href="worksunder"><input type="submit" value="もっと見る"/></Link></div>

      
      </section>
    
      
      
      <section id="js-contact" className={`${scss.contact}`}>
        <div className={scss.wrapper}>
          <h2 className={scss['section-title']}>
            <span className={scss.en}>Contact</span>
            <span className={scss.ja}>お問い合わせ</span>
          </h2>

          <div className={scss['contact-container']}>
            <div className={scss.contactButtonFlex}>
              <Link href="form"><div className={scss['contact-button']}><input type="submit" value="Contactページへ"/></div></Link>
              <Link href="Login/Login"><div className={scss.contactAdminButton}><input type="submit" value="管理者ページへ"/></div></Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className={`${scss.footer} ${scss.wrapper}`}>
        <p>Copyright©2022 KEN portfolio All rights reserved.</p>
      </div>
    
      </>
    </main> 
  </>
  )
}
