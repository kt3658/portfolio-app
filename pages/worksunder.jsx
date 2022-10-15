import Image from "next/image";
import React, {useState} from "react";
import Link from 'next/link';
import scss from "../styles/sass/_worksunder.module.scss";
export default function Worksunder() {
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
            <li><a href="https://portfolio-project-mu-liard.vercel.app/#">Home</a></li>
            <li><a href="https://portfolio-project-mu-liard.vercel.app/#js-service">Service</a></li>
            <li><a href="https://portfolio-project-mu-liard.vercel.app/##js-about">About</a></li>
            <li><a href="https://portfolio-project-mu-liard.vercel.app/##js-works">Works</a></li>
            <li><a href="https://portfolio-project-mu-liard.vercel.app/##js-contact">Contact</a></li>  
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

      <div className={scss['worksunder-mainvisual']}>
        <div className={`${scss['worksunder-container']} ${scss.wrapper}`}>
          <div className={scss['worksunder-textbox']}>
            <h2 className={scss['worksunder-title']}>Works</h2>
          </div>
        </div>
      </div>
    
      
      <section id="js-worksunder" className={`${scss.wrapper} ${scss.worksunder}`}>
        <h2 className={scss['section-title']}>
          <span className={scss.en}>Works</span>
          <span className={scss.ja}>制作実績一覧</span>
        </h2>

        <ul className={scss['worksunder-block']}>
          <li className={scss['worksunder-list']}>
            <Link href="corporate">
            <Image className={scss['worksunder-image']} src="/images/portfolio-swiper.png" alt="works下層画像corporate" width="480" height="400"/>
            </Link>
          </li>
          <li className={scss['worksunder-list']}>
            <Link href="sneakers">
            <Image className={scss['worksunder-image']} src="/images/portfolio-swiper2.png" alt="works下層画像sneakers" width="480" height="400"/>
            </Link>
          </li>
          <li className={scss['worksunder-list']}>
            <Link href="coffee">
            <Image className={scss['worksunder-image']} src="/images/portfolio-swiper3.png" alt="works下層画像coffee" width="480" height="400"/>
            </Link>
          </li>
          <li className={scss['worksunder-list']}>
            <Link href="interior">
            <Image className={scss['worksunder-image']} src="/images/portfolio-swiper4.png" alt="works下層画像interior" width="480" height="400"/>
            </Link>
          </li>
          <li className={scss['worksunder-list']}>
            <Link href="original">
            <Image className={scss['worksunder-image']} src="/images/portfolio-swiper5.png" alt="works下層画像original" width="480" height="400"/>
            </Link>
          </li>
        </ul>
        
        <div className={scss['worksunder-pagebox']}>
          <p className={scss['worksunder-pagenation']}><Link href="#">1</Link></p>
          <p className={scss['worksunder-pagenation2']}><Link href="#">＞</Link></p>
        </div>
        <div className={scss['worksunder-button']}><Link href="index"><input type="submit" value="戻る"/></Link></div>
      </section>
      
      <div className={`${scss.footer} ${scss.wrapper}`}>
        <p>Copyright©2022 KEN portfolio All rights reserved.</p>
      </div>
      
      </>
    
    )
    }