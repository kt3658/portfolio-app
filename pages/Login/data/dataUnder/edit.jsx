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
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <div className={scss.editTitleContainer}>
      <p className={scss.editTitle}>FormDataEdit</p>
    </div>
    <div className={scss.container}>
      <div className={scss.editBox}>
        
        <div className={scss.editContainer}>
          <dt className={scss.editNameTitle}>??????</dt>
          
          <input
            className={scss.editNameData}
            type="text"
            maxLength="11"
            label="?????????????????????"
            placeholder="????????????"
            value={newCustomerName}
            onChange={handleEditNamesChange}
          />
        </div>
        
        <div className={scss.editContainer}>
          <dt className={scss.editNameTitle}>????????????</dt>
          <input 
            className={scss.editNameData}
            type="text"
            label="?????????????????????"
            placeholder="??????????????????"
            value={newFuriganaName}
            onChange={handleEditFuriganaChange}  
          />
        </div>
      </div>
      
      <div className={scss.editBox1}>
        <div className={scss.editContainer1}>
          <span>
          <dt className={scss.editCompanyTitle}>??????????????????</dt>
          
          <input 
            className={scss.editCompanyData}
            type="text"
            label="?????????????????????"
            placeholder="??????????????????"
            value={newCompanyName}
            onChange={handleEditCompanyChange}  
          />
          </span>
        </div>
      </div>
        
      <div className={scss.editBox2}>
        <div className={scss.editContainer2}>
          <dt className={scss.editNameTitle}>?????????????????????</dt>
          <input
            className={scss.editPhoneData} 
            type="text"
            label="?????????????????????"
            placeholder="aa@aa.com"
            value={newMail}
            onChange={handleEditMailChange}  
          />
        </div>
        
        <div className={scss.editContainer2}>
          <dt className={scss.editNameTitle}>????????????</dt>
          <input
            className={scss.editPhoneData} 
            type="text"
            label="?????????????????????"
            placeholder="090-0123-4567"
            value={newTelephone}
            onChange={handleEditTelephoneChange}  
          />
        </div>
      </div>

      <div className={scss.editBox3}>
        <label>
          ????????????
          <input
            type="radio"
            value="??????????????????"
            required="required"
            checked={newRequirement=== "??????????????????"}
            onChange={handleVariation}
          />
          ??????????????????
        </label>
        <label>
          <input
            type="radio"
            value="??????????????????"
            required="required"
            checked={newRequirement=== "??????????????????"}
            onChange={handleVariation}
          />
          ??????????????????
        </label>
        <label>
          <input
            type="radio"
            value="??????????????????"
            required="required"
            checked={newRequirement === "??????????????????"}
            onChange={handleVariation}
          />
          ??????????????????
        </label>
        <label>
          <input
            type="radio"
            value="?????????"
            required="required"
            checked={newRequirement === "?????????"}
            onChange={handleVariation}
          />
          ?????????
        </label>
      </div>
      <div className={scss.editBox4}>
        <label>
          ???????????????
          <input
            type="radio"
            value="BtoB(????????????)"
            required="required"
            checked={newBusinessForm === 'BtoB(????????????)'}
            onChange={handleBusinessChange}
          />
          BtoB(????????????)
        </label>
        <label>
          <input
            type="radio"
            value="BtoC(???????????????)"
            required="required"
            checked={newBusinessForm === 'BtoC(???????????????)'}
            onChange={handleBusinessChange}
          />
          BtoC(???????????????)
        </label>
        <label>
          <input
            type="radio"
            value="?????????"
            required="required"
            checked={newBusinessForm === '?????????'}
            onChange={handleBusinessChange}
          />
          ?????????
        </label>
      </div>
      <div className={scss.editBox5}>
        <dt className={scss.editMessageText}>????????????????????????</dt>
        <textarea
            className={scss.editLargeBox}
            type="text"
            maxLength="100"
            label="?????????????????????"
            placeholder="??????????????????????????????"
            value={newMessage}
            onChange={handleEditMessageChange}  
          />
        </div>
        <Link href={{ pathname: "../data", query: { names: newCustomerName, furigana: newFuriganaName,company: newCompanyName, email: newMail,affair: newRequirement,corporatesStructure: newBusinessForm,updatedAt: newUpdate } }}>
          <div className={scss.editButton}>
            <button 
              onClick={handleEditForm}>
                ???????????????
            </button>
          </div>
        </Link>
        <div className={scss.backButton}>
          <Link href="../data">
            <button 
              >
                ????????????????????????
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}