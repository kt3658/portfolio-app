import Image from "next/image";
import React from "react";
import Link from 'next/link';
import scss from "../styles/sass/_secondlayer.module.scss";
export default function Corporate() {
  
  return (
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
            <Image src="/images/portfolio-swiper.png" alt="詳細ページ画像" width="1040" height="884"/>
          </div>
        </Link>
          <div className={scss['secondlayer-container']}>
            <dt>概要</dt>
            <dd>コーポレイトサイト</dd>
            <dt>使用スキル</dt>
            <dd>HTML,CSS,Sass</dd>
            <dt>制作範囲</dt>
            <dd>デザインカンプからのコーディング,スマホ対応</dd>
            <dt>工夫した点</dt>
            <dd>画像とテキストをずらしての表示<br/>
            ヘッダーのお問い合わせボタン<br/>
            NEWS部分
            </dd>
          </div>
          <div className={scss['secondlayer-button']}><Link href="worksunder"><input type="submit" value="制作実績に戻る"/></Link></div>
      </section>
      
      <div className={`${scss.footer} ${scss.wrapper}`}>
        <p>Copyright©2022 KEN portfolio All rights reserved.</p>
      </div>
    </main> 
  )

}