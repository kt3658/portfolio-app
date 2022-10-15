import Link from 'next/link';
import { db } from "../lib/firebase";
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';
import dayjs from 'dayjs';
import scss from "../styles/sass/_contact.module.scss";
import Head from 'next/head';
import React, {useState} from "react";

export default function Form() {
  const [customerName, setCustomerName] = useState("")
  const [furiganaName, setFuriganaName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [mail, setMail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [requirement, setRequirement] = useState("")
  const [businessForm, setBusinessForm] = useState("")
  const [message, setMessage] = useState("")
  const [recoilForms, setRecoilForms] = useRecoilState(formState);
  

  
  const handleVariation = e => setRequirement(e.target.value);

  const handleChange = e => setBusinessForm(e.target.value);

  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${customerName}さん、メッセージが送信されました`);

    setRecoilForms([
      ...recoilForms,
      {
        id: Number(recoilForms.length + 1),
        names: customerName,
        furigana: furiganaName,
        company: companyName,
        email: mail,
        tel: telephone,
        affair: requirement,
        corporatesStructure: businessForm,
        inquiry: message,
        status: "started",
        createdAt: dayjs().format('YYYY-MM-DD'),
        updatedAt: dayjs().format('YYYY-MM-DD'), 
      },
    ]);

    db.collection("forms").add({
      id: Number(recoilForms.length + 1),
      names: customerName,
      furigana: furiganaName,
      company: companyName,
      email: mail,
      tel: telephone,
      affair: requirement,
      corporatesStructure: businessForm,
      inquiry: message,
      status: "started",
      createdAt: dayjs().format('YYYY-MM-DD'),
      updatedAt: dayjs().format('YYYY-MM-DD'), 
    });

    setCustomerName("")
    setFuriganaName("")
    setCompanyName("")
    setMail("")
    setTelephone("")
    setRequirement("")
    setBusinessForm("")
    setMessage("")
    
  }



  return (
    <>
  
    <Head>
    <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta content="webポートフォリオサイトです。" name="description"/>
    <title>Ken | Web Portfolio</title>
    <link rel="shortcut icon" href="img/favicon.ico.png"/>
    <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css"/>
    <link rel="stylesheet" href="../styles/sass/_contact.module.scss"/>
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
            <li><a href="http://localhost:3000/#">Home</a></li>
            <li><a href="http://localhost:3000/#js-service">Service</a></li>
            <li><a href="http://localhost:3000/#js-about">About</a></li>
            <li><a href="http://localhost:3000/#js-works">Works</a></li>
            <li><a href="http://localhost:3000/#js-contact">Contact</a></li>  
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

  
  
    <section id="js-contact" className={`${scss.contact} ${scss.fadein} ${scss['internal-links']}`}>
        <div className={scss.wrapper}>
          <h2 className={scss['section-title']}>
            <span className={scss.en}>Contact</span>
            <span className={scss.ja}>お問い合わせ</span>
          </h2>
          <p className={scss.contactMessage}>当サイトにご訪問いただきありがとうございます。<br/>ご用件などがございましたら、下記フォームよりお気軽にお問い合わせください。</p>
    <div className={scss['contact-container']}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="names">
          <dt>氏名<span>*</span></dt>
          <input 
            type="text" 
            id="names"
            placeholder="山田太郎" 
            maxLength="11"
            name="customername"
            required="required"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="furigana">
          <dt>ふりがな<span>*</span></dt>
          
          <input 
            type="text" 
            id="furigana" 
            placeholder="やまだたろう"
            name="furigananame"
            required="required"
            value={furiganaName}
            onChange={(e) => setFuriganaName(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="company">
          <dt>会社・組織名<span>*</span></dt>
        
          <input 
            type="text" 
            id="company" 
            placeholder="山田株式会社"
            name="companyname"
            required="required"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            />
        </label>
      </div>
      
      <div>
        <label htmlFor="email">
          <dt>メールアドレス<span>*</span></dt>
          
          <input 
            type="email" 
            id="email" 
            placeholder="sample@sample.com"
            name="mail" 
            required="required"
            value={mail}
            onChange={(e) =>setMail(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="tel">
          <dt>電話番号<span>*</span></dt>
          <input 
            type="tel" 
            id="tel" 
            name="telephone"
            placeholder="090-0123-4567"
            required="required"
            pattern="\d{2,4}-\d{3,4}-\d{3,4}"
            value={telephone}
            onChange={(e) =>setTelephone(e.target.value)}
            />
        </label>
      </div>
      
      <div>
        
        <label>
          <dt>ご用件<span>*</span></dt>
          
          
          <input
            type="radio"
            value="料金について"
            required="required"
            checked={requirement=== "料金について"}
            onChange={handleVariation}
          />
          
          料金について
          
        </label>
        <label>
          
          <input
            type="radio"
            value="機能について"
            required="required"
            checked={requirement=== "機能について"}
            onChange={handleVariation}
          />
          機能について
          
        </label>

        
        <label>
          
          <input
            type="radio"
            value="制作のご依頼"
            required="required"
            checked={requirement === "制作のご依頼"}
            onChange={handleVariation}
          />
          制作のご依頼
          
        </label>
        
        <label>
          
          <input
            type="radio"
            value="その他"
            required="required"
            checked={requirement === "その他"}
            onChange={handleVariation}
          />
          その他
        </label>
        
      </div>
      
      <div>
        <label>
        <dt>事業形態<span>*</span></dt>
          <input
            type="radio"
            value="BtoB(法人向け)"
            required="required"
            checked={businessForm === 'BtoB(法人向け)'}
            onChange={handleChange}
          />
          BtoB(法人向け)
        </label>
        <label>
          <input
            type="radio"
            value="BtoC(生活者向け)"
            required="required"
            checked={businessForm === 'BtoC(生活者向け)'}
            onChange={handleChange}
          />
          BtoC(生活者向け)
        </label>
        <label>
          <input
            type="radio"
            value="その他"
            required="required"
            checked={businessForm === 'その他'}
            onChange={handleChange}
          />
          その他
        </label>
      </div>
      
      <div>
        <label htmlFor="inquiry">
          <dt>お問い合わせ内容<span>*</span></dt>
          <textarea 
            type="text" 
            id="message"
            maxLength="100"
            placeholder="お気軽にご相談ください。"
            required="required" 
            name="inquiry" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </label>
      </div>
        
      
          <div className={scss.contactButton}><input type="submit" value="送信する"/></div>    
          </form>
        </div>
      </div>
    </section>
    
    
    <div className={`${scss.footer} ${scss.wrapper}`}>
      <p>Copyright©2022 KEN portfolio All rights reserved.</p>
    </div>
  </>
  )
}
