import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';
import { db } from "../lib/firebase";
import dayjs from 'dayjs';

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
    <div>
    <p className="text-4xl bg-pink-300 text-center p-6 font-sans">Formの編集</p>
    </div>
      <div className="md:flex  mt-10 md:justify-center text-center">
        <input
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newCustomerName}
          onChange={handleEditNamesChange}
          
        />
        <input 
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newFuriganaName}
          onChange={handleEditFuriganaChange}  
        />
        <input 
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newCompanyName}
          onChange={handleEditCompanyChange}  
        />
        <input 
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newMail}
          onChange={handleEditMailChange}  
        />
        <input 
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newTelephone}
          onChange={handleEditTelephoneChange}  
        />
        <div>
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
      <div>
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
      <input 
          type="text"
          label="新しいタイトル"
          placeholder="Formを編集"
          value={newMessage}
          onChange={handleEditMessageChange}  
        />
        <Link href={{ pathname: "/data", query: { names: newCustomerName, furigana: newFuriganaName,company: newCompanyName, email: newMail,affair: newRequirement,corporatesStructure: newBusinessForm,updatedAt: newUpdate } }}>
          <button 
      
            onClick={handleEditForm}>
              編集を保存
          </button>
        </Link>
        <Link href="./data">
          <button 
            >
              キャンセル
          </button>
        </Link>
      </div>
      </>
  )



}