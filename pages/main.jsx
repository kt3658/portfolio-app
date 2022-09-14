import Image from "next/image";
import scss from "../styles/sass/_main.module.scss";
import Head from 'next/head';

export default function Main() {

  return (
<>
<main>
      <>
      <Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta content="webポートフォリオサイトです。" name="description"/>
    <title>Ken | Web Portfolio</title>
    <link rel="shortcut icon" href="img/favicon.ico.png"/>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"/>
    <link rel="stylesheet" href="../styles/sass/_main.module.scss"/>
    <link rel="stylesheet" href="css/style.min.css"/> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.css"/>  
  </Head>
  
  
    <section id="js-header" className="header">
      <div className="wrapper header-container">
        <h1 className="site-title">
          <a href="#">KEN PORTFOLIO</a>
        </h1>

        <nav className="header-nav" id="js-header-nav">
          <ul className="header-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#js-service">Service</a></li>
            <li><a href="#js-about">About</a></li>
            <li><a href="#js-works">Works</a></li>
            <li><a href="#js-contact">Contact</a></li>  
          </ul>
        </nav>
        
        <div className="header-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <div id="js-header-mask" className="header-mask">
        </div>
      </div>
    </section>


      <div className={scss.mainvisual}>
        <div className={`${scss['mainvisual-container']}${scss.wrapper}`}>
          <Image src="/images/mainvisual.png" alt="メインモックアップ" width="612" height="380"/>
          <div className={scss['mainvisual-textunit']}>
            <h2 className={scss['mainvisual-title']}>KEN<br/>PORTFOLIO</h2>
            <p className={scss['mainvisual-text']}>傾聴を重視し、お客様のご満足のいくサイトをお作り出来るよう心掛けています。</p>
          </div>
        </div>
      </div>
      
    
      <section id="js-service" className={`${scss.service}${scss.wrapper}${scss.fadein}${scss['internal-links']}`}>
        <h2 className={scss['section-title']}>
          <span className={scss.en}>Service</span>
          <span className={scss.ja}>出来ること</span>
        </h2>
        
        <ul className={`${scss['service-container']} ${scss.slidebottom} ${scss.show}`}>
          <li className={`${scss['service-list']}${scss.hide}`}>
            <Image className={scss['service-image']} src="/images/service-01.svg" alt="カンプ再現" width="152" height="120"/>
            <h3 className={scss['service-title']}>コーディング</h3>
            <p className={scss['service-text']}>デザインカンプを正確に再現致<br/>します。<br/>
              レスポンシブデザインにより,<br/>スマートフォンやタブレットに<br/>対応させることが出来ます。</p>
          </li>
          <li className={`${scss['service-list']}${scss.hide}`}>
            <Image className={scss['service-image']} src="/images/service-02.svg" alt="アニメーション" width="152" height="120"/>
            <h3 className={scss['service-title']}>アニメーション</h3>
            <p className={scss['service-text']}>サイトにアニメーションを使っ<br/>て動きをつけます。<br/>
              スクロールに応じたアニメー<br/>ション,ハンバーガーメニュー,<br/>アコーディオンなど実装可能で<br/>す。</p>
          </li>
          
          <li className={`${scss['service-list']}${scss.hide}`}>
            <Image className={scss['service-image']} src="/images/service-03.svg" alt="WordPress構築" width="152" height="120"/>
            <h3 className={scss['service-title']}>WordPress構築</h3>
            <p className={scss['service-text']}>WordPressでオリジナルテーマ<br/>を作成致します。<br/>
              既存サイトのWordPress化も可<br/>能です。<br/>また,状況に応じてカスタムフィ<br/>ールドなども扱います。</p>
          </li>
          
        </ul>
      </section>
      

      <section id="js-about" className={`${scss.about} ${scss.fadein} ${scss['internal-links']}`}>
        <div className={scss.wrapper}>
          <h2 className={scss['section-title']}>
            <span className={scss.en}>About</span>
            <span className={scss.ja}>私について</span>
          </h2>

          <div className={scss['about-container']}>
            <Image className={scss['about-image']} src="/images/about-01.jpg" alt="私の似顔絵" width="320" height="400"/>
            <div className={scss['about-textunit']}>
              <p className={scss['about-name']}>名前：KEN</p>
              <p className={scss['about-text']}>福岡県出身の35歳。事務職で働く傍ら、web制作をしています。
                (デザインは専門外です。)<br/>
                コードを書く楽しさから、学習・創作に打ち込むようになりました。<br/>
                お困りの方を助けることの出来る存在でありたいです。よろしくお願い致します。
              </p>
              <h4 className={scss['about-qa']}>Q＆A</h4>

              <div className="accordion-container js-accordion">
                <div className="js-accordion-trigger">
                  <div className="accordion-tab">
                    趣味は？
                  </div>
                  <div className="accordion-content ">
                    <p>・読書・街巡り・旅行・音楽鑑賞・ゲームなど。</p>
                  </div>
                </div>
                <div className="js-accordion-trigger">
                  <div className="accordion-tab">
                    長所は？
                  </div>
                  <div className="accordion-content">
                    <p>・集中力があります。・知的好奇心が強いです。</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section id="js-works" className="works wrapper fadein internal-links">
        <h2 className={scss['section-title']}>
          <span className={scss.en}>Works</span>
          <span className={scss.ja}>制作実績</span>
        </h2>
        
        <div className="swiper-container">
        <div className="swiper">
          
          <div className="swiper-wrapper">
        
              <div className="swiper-slide"><a href="/corporate/"><Image src="/images/portfolio-swiper.png" alt="スライド１" width="420" height="360"/></a></div>
              <div className="swiper-slide"><a href="/sneakers/"><Image src="/images/portfolio-swiper2.png" alt="スライド2" width="420" height="360"/></a></div>
              <div className="swiper-slide"><a href="/coffee/"><Image src="/images/portfolio-swiper3.png" alt="スライド3" width="420" height="360"/></a></div>
              <div className="swiper-slide"><a href="/interior/"><Image src="/images/portfolio-swiper4.png" alt="スライド4" width="420" height="360"/></a></div>
              <div className="swiper-slide"><a href="/original/"><Image src="/images/portfolio-swiper5.png" alt="スライド4" width="420" height="360"/></a></div>
          </div>
          </div>
  
          
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      <div className="works-button"><a href="/works/"><input type="submit" value="もっと見る"/></a></div>

      
      </section>
      
      
      <section id="js-contact" className="contact fadein internal-links">
        <div className="wrapper">
          <h2 className="section-title">
            <span className="en">Contact</span>
            <span className="ja">お問い合わせ</span>
          </h2>

          <div className="contact-container">
            <dl>
              <dt><label htmlFor="name">お名前<span>*</span></label></dt>
              <dd><input type="text" id="name" name="your-name" placeholder="山田太郎"/></dd>
              <dt><label htmlFor="email">メールアドレス<span>*</span></label></dt>
              <dd><input type="email" id="email" name="your-email" placeholder="test@gmail.com"/></dd>
              <dt><label htmlFor="message">お問い合わせ<span>*</span></label></dt>
              <dd><textarea id="message" name="your-message" placeholder="お気軽にご相談ください。"></textarea></dd>
              </dl>
              <div className="contact-button"><input type="submit" value="送信する"/></div>
            
          </div>
        </div>
      </section>
      
      <section className="footer wrapper">
      <p>Copyright©2022 KEN portfolio All rights reserved.</p>
      </section>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.min.js"></script>
      <script src="/js/main.js"></script>
      </>
    </main>
    
    </>
  )
}
