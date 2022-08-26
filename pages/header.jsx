import Head from 'next/head';

export default function Header() {

  return (
  <>
  <Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta content="webポートフォリオサイトです。" name="description"/>
    <title>Ken | Web Portfolio</title>
    <link rel="shortcut icon" href="img/favicon.ico.png"/>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/style.min.css"/> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.css"/>  
  </Head>
  
  
    <Header id="js-header" className="header">
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
    </Header>
    </>
    )
  }
