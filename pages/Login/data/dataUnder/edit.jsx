import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { formState } from '../../../../component/atom';
import { db } from "../../../../lib/firebase";
import dayjs from 'dayjs';
import scss from "../../../../styles/sass/_edit.module.scss";
import Head from 'next/head';


export default function Edit() {
  const router = useRouter();
  const [newCustomerName, setNewCustomerName] = useState(router.query.names);
  const [newFuriganaName, setNewFuriganaName] = useState(router.query.furigana);
  const [newCompanyName, setNewCompanyName] = useState(router.query.company);
  const [newMail, setNewMail] = useState(router.query.email);
  const [newTelephone, setNewTelephone] = useState(router.query.tel);
  const [newRequirement, setNewRequirement] = useState(router.query.affair);
  const [newBusinessForm, setNewBusinessForm] = useState(router.query.corporatesStructure);
  const [newMessage, setNewMessage] = useState(router.query.inquiry);
  const [newUpdate, setNewUpdate] = useState(dayjs().format('YYYY-MM-DD'));
  const [editId, setEditId] = useState(router.query.id);
  const [recoilForms, setRecoilForms] = useRecoilState(formState);
  
  const handleEditNamesChange = (e) => {
    setNewCustomerName(e.target.value);
  };

  const handleEditFuriganaChange = (e) => {
    setNewFuriganaName(e.target.value);
  };

  const handleEditCompanyChange = (e) => {
    setNewCompanyName(e.target.value);
  };

  const handleEditMailChange = (e) => {
    setNewMail(e.target.value);
  };

  const handleEditTelephoneChange = (e) => {
    setNewTelephone(e.target.value);
  };

  const handleVariation = (e) => {
    setNewRequirement(e.target.value);
  };

  const handleBusinessChange = (e) => setNewBusinessForm(e.target.value);

  const handleEditMessageChange = (e) => setNewMessage(e.target.value);


  const handleEditForm = () => {
    const newArray = recoilForms.map((form) =>{
      if (form.id === editId) {
        db.collection("forms")
          .doc(form.id)
          .set({ names: newCustomerName,furigana: newFuriganaName,
            company: newCompanyName,email: newMail,tel: newTelephone,
            affair: newRequirement,corporatesStructure: newBusinessForm,
            inquiry: newMessage,updatedAt:newUpdate }, { merge: true });

        return { ...form, names: newCustomerName,furigana: newFuriganaName,
          company: newCompanyName,email: newMail,tel: newTelephone,
          affair: newRequirement,corporatesStructure: newBusinessForm,
          inquiry: newMessage,updatedAt: newUpdate};
      } else {
        return form;
      }
    });

    setRecoilForms(newArray);
    setNewCustomerName("");
    setNewCustomerName("");
    setNewCompanyName("");
    setNewMail("");
    setNewTelephone(""),
    setNewRequirement("");
    setNewBusinessForm("");
    setNewMessage("");
    setNewUpdate("");
    setEditId();
  };
  return (
  <>
    <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <div className={scss.editTitleContainer}>
      <p className={scss.editTitle}>FormDataEdit</p>
    </div>
    <div className={scss.container}>
      <div className={scss.editBox}>
        
        <div className={scss.editContainer}>
          <dt className={scss.editNameTitle}>氏名</dt>
          
          <input
            className={scss.editNameData}
            type="text"
            maxLength="11"
            label="新しいタイトル"
            placeholder="山田太郎"
            value={newCustomerName}
            onChange={handleEditNamesChange}
          />
        </div>
        
        <div className={scss.editContainer}>
          <dt className={scss.editNameTitle}>ふりがな</dt>
          <input 
            className={scss.editNameData}
            type="text"
            label="新しいタイトル"
            placeholder="やまだたろう"
            value={newFuriganaName}
            onChange={handleEditFuriganaChange}  
          />
        </div>
      </div>
      
      <div className={scss.editBox1}>
        <div className={scss.editContainer1}>
          <span>
          <dt className={scss.editCompanyTitle}>会社・組織名</dt>
          
          <input 
            className={scss.editCompanyData}
            type="text"
            label="新しいタイトル"
            placeholder="山田株式会社"
            value={newCompanyName}
            onChange={handleEditCompanyChange}  
          />
          </span>
        </div>
      </div>
        
      <div className={scss.editBox2}>
        <div className={scss.editContainer2}>
          <dt className={scss.editNameTitle}>メールアドレス</dt>
          <input
            className={scss.editPhoneData} 
            type="text"
            label="新しいタイトル"
            placeholder="aa@aa.com"
            value={newMail}
            onChange={handleEditMailChange}  
          />
        </div>
        
        <div className={scss.editContainer2}>
          <dt className={scss.editNameTitle}>電話番号</dt>
          <input
            className={scss.editPhoneData} 
            type="text"
            label="新しいタイトル"
            placeholder="090-0123-4567"
            value={newTelephone}
            onChange={handleEditTelephoneChange}  
          />
        </div>
      </div>

      <div className={scss.editBox3}>
        <label>
          ご用件：
          <input
            type="radio"
            value="料金について"
            required="required"
            checked={newRequirement=== "料金について"}
            onChange={handleVariation}
          />
          料金について
        </label>
        <label>
          <input
            type="radio"
            value="機能について"
            required="required"
            checked={newRequirement=== "機能について"}
            onChange={handleVariation}
          />
          機能について
        </label>
        <label>
          <input
            type="radio"
            value="制作のご依頼"
            required="required"
            checked={newRequirement === "制作のご依頼"}
            onChange={handleVariation}
          />
          制作のご依頼
        </label>
        <label>
          <input
            type="radio"
            value="その他"
            required="required"
            checked={newRequirement === "その他"}
            onChange={handleVariation}
          />
          その他
        </label>
      </div>
      <div className={scss.editBox4}>
        <label>
          事業形態：
          <input
            type="radio"
            value="BtoB(法人向け)"
            required="required"
            checked={newBusinessForm === 'BtoB(法人向け)'}
            onChange={handleBusinessChange}
          />
          BtoB(法人向け)
        </label>
        <label>
          <input
            type="radio"
            value="BtoC(生活者向け)"
            required="required"
            checked={newBusinessForm === 'BtoC(生活者向け)'}
            onChange={handleBusinessChange}
          />
          BtoC(生活者向け)
        </label>
        <label>
          <input
            type="radio"
            value="その他"
            required="required"
            checked={newBusinessForm === 'その他'}
            onChange={handleBusinessChange}
          />
          その他
        </label>
      </div>
      <div className={scss.editBox5}>
        <dt className={scss.editMessageText}>お問い合わせ内容</dt>
        <textarea
            className={scss.editLargeBox}
            type="text"
            maxLength="100"
            label="新しいタイトル"
            placeholder="よろしくお願いします"
            value={newMessage}
            onChange={handleEditMessageChange}  
          />
        </div>
        <Link href={{ pathname: "../data", query: { names: newCustomerName, furigana: newFuriganaName,company: newCompanyName, email: newMail,affair: newRequirement,corporatesStructure: newBusinessForm,updatedAt: newUpdate } }}>
          <div className={scss.editButton}>
            <button 
              onClick={handleEditForm}>
                編集を保存
            </button>
          </div>
        </Link>
        <div className={scss.backButton}>
          <Link href="../data">
            <button 
              >
                前のページに戻る
            </button>
          </Link>
        </div>
      </div>
    </>
  )



}