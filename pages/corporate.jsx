import Image from "next/image";
import React,{useState} from "react";
import Link from 'next/link';
import scss from "../styles/sass/_secondlayer.module.scss";
export default function Corporate() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
  <>
  <section id="js-header" className={scss.header}>
    <div className={`${scss.wrapper}  ${scss['header-container']}`}>
      <h1 className={scss['site-title']}>
        <a href="#">KEN PORTFOLIO</a>
      </h1>

      <nav className={scss['header-nav']} id="js-header-nav">
        <ul className={scss['header-ul']}>
          <li><a href="https://portfolio-app-one-omega.vercel.app/#">Home</a></li>
          <li><a href="https://portfolio-app-one-omega.vercel.app/#js-service">Service</a></li>
          <li><a href="https://portfolio-app-one-omega.vercel.app/#js-about">About</a></li>
          <li><a href="https://portfolio-app-one-omega.vercel.app/#s-works">Works</a></li>
          <li><a href="https://portfolio-app-one-omega.vercel.app/#js-contact">Contact</a></li>  
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
          <Link href="https://portfolio-app-one-omega.vercel.app/#">
            <a>
              <p className={scss.mainTitle}>Home</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://portfolio-app-one-omega.vercel.app/#js-service">
            <a>
              <p className={scss.mainTitle}>Service</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://portfolio-app-one-omega.vercel.app/#js-about">
            <a>
              <p className={scss.mainTitle}>About</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://portfolio-app-one-omega.vercel.app/#js-works">
            <a>
              <p className={scss.mainTitle}>Works</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://portfolio-app-one-omega.vercel.app/#js-contact">
            <a>
              <p className={scss.mainTitle}>Contact</p>   
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</section>




    <main>
      <div className={scss['secondlayer-mainvisual']} style={{'backgroundImage':'url(/images/corporate-main.jpg)'}}>
        <div className={`${scss['worksunder-container']} ${scss.wrapper}`}>
          <div className={scss['worksunder-textbox']}>
            <h2 className={scss['worksunder-title']}>Corporate</h2>
          </div>
        </div>
      </div>
      


      <section id="js-secondlayer" className={`${scss.secondlayer} ${scss.wrapper}`}>
        <Link href="https://kt3658.github.io/codestep-corporate/">
          <div className={scss['secondlayer-image']}>
            <Image src="/images/portfolio-swiper.png" alt="?????????????????????" width="1040" height="884"/>
          </div>
        </Link>
          <div className={scss['secondlayer-container']}>
            <dt>??????</dt>
            <dd>???????????????????????????</dd>
            <dt>???????????????</dt>
            <dd>HTML,CSS,Sass</dd>
            <dt>????????????</dt>
            <dd>????????????????????????????????????????????????,???????????????</dd>
            <dt>???????????????</dt>
            <dd>?????????????????????????????????????????????<br/>
            ??????????????????????????????????????????<br/>
            NEWS??????
            </dd>
          </div>
          <div className={scss['secondlayer-button']}><Link href="worksunder"><input type="submit" value="?????????????????????"/></Link></div>
      </section>
      
      <div className={`${scss.footer} ${scss.wrapper}`}>
        <p>Copyright??2022 KEN portfolio All rights reserved.</p>
      </div>
    </main> 
  </>
  )
}