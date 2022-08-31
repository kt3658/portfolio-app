import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';
import { db } from "../lib/firebase";

export default function Edit() {
  const router = useRouter();
  const [newCustomerName, setNewCustomerName] = useState(router.query.names);
  const [newFuriganaName, setNewFuriganaName] = useState(router.query.furigana);
  const [newCompanyName, setNewCompanyName] = useState(router.query.company)
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


  const handleEditForm = () => {
    const newArray = recoilForms.map((form) =>{
      if (form.id === editId) {
        db.collection("forms")
          .doc(form.id)
          .set({ names: newCustomerName,furigana: newFuriganaName,company: newCompanyName}, { merge: true });

        return { ...form, names: newCustomerName,furigana: newFuriganaName,company:newCompanyName};
      } else {
        return form;
      }
    });

    setRecoilForms(newArray);
    setNewCustomerName("");
    setNewCustomerName("");
    setNewCompanyName("");
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
        <Link href={{ pathname: "/data", query: { names: newCustomerName, furigana: newFuriganaName,company: newCompanyName } }}>
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