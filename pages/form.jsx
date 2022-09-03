import Link from 'next/link';
import React, { useState } from 'react'
import { db } from "../lib/firebase";
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';
import dayjs from 'dayjs';

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
  // const [formStatus, setFormStatus] = useState("")

  
  const handleVariation = e => setRequirement(e.target.value);

  const handleChange = e => setBusinessForm(e.target.value);

  // const handleStatus = e => setFormStatus(e.target.value);


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
    <h1> お問合せフォーム </h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="names">
          氏名：
          <input 
            type="text" 
            id="names" 
            name="customername"
            required="required"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="furigana">
          ふりがな：
          <input 
            type="text" 
            id="furigana" 
            name="furigananame"
            required="required"
            value={furiganaName}
            onChange={(e) => setFuriganaName(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="company">
          会社・組織名：
          <input 
            type="text" 
            id="company" 
            name="companyname"
            required="required"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            />
        </label>
      </div>
      
      <div>
        <label htmlFor="email">
          メールアドレス：
          <input 
            type="email" 
            id="email" 
            name="mail" 
            required="required"
            value={mail}
            onChange={(e) =>setMail(e.target.value)}
            />
        </label>
      </div>

      <div>
        <label htmlFor="tel">
          電話番号：
          <input 
            type="tel" 
            id="tel" 
            name="telephone"
            required="required"
            pattern="\d{2,4}-\d{3,4}-\d{3,4}"
            value={telephone}
            onChange={(e) =>setTelephone(e.target.value)}
            />
        </label>
      </div>
      
      <div>
        <label>
          ご用件：
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
          事業形態：
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
          お問い合わせ内容：
          <textarea 
            type="text" 
            id="message"
            required="required" 
            name="inquiry" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </label>
      </div>
        
      
        <button 
          type="submit"
          >送信
          </button>
          
          <Link href="./data">
          <button 
          type="text"
          >管理画面へ
          </button>
          </Link>
        
    </form>
  </>
  )
}
