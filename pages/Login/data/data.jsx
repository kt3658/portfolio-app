import { db } from "../../../lib/firebase";
import { useEffect, useState, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import { formState } from "../../../component/atom";
import { auth } from "../../../lib/firebase";
import React from "react";
import Link from "next/link";
import dayjs from 'dayjs';
import { useRouter } from "next/router";
import scss from "../../../styles/sass/_data.module.scss";
import Image from "next/image";

export default function Data() {
  const router = useRouter();

  const [recoilForms, setRecoilForms] = useRecoilState(formState);
  const [filteredForms, setFilteredForms] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [user, setUser] = useState("");
  
  useEffect(()=> {
    const unSub = auth.onAuthStateChanged((user)=> {
      !user && router.push("../../Login/Login");
    });
    return ()=> unSub();
  })


  useEffect(() => {
    const unSub = db.collection("forms").onSnapshot((snapshot) => {
      setRecoilForms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          names: doc.data().names,
          furigana: doc.data().furigana,
          company: doc.data().company,
          email: doc.data().email,
          tel: doc.data().tel,
          affair: doc.data().affair,
          corporatesStructure: doc.data().corporatesStructure,
          inquiry:doc.data().inquiry,
          status:doc.data().status,
          createdAt: doc.data().createdAt,
          updatedAt: doc.data().updatedAt,
        }))
      );
    });
    return () => unSub();
  }, []);

  // 削除

  const handleDeleteForm = (targetForm) => {
    const filteredforms = recoilForms.filter((form) => form !== targetForm)
    setRecoilForms(filteredforms);
    setFilteredForms(filteredforms);

    db.collection("forms").doc(targetForm.id).delete();
  };

  // 対象のformのステータスを更新した、新しいformリストの配列を作成

  const handleStatusChange = (targetForm, e) => {
    const newArray = recoilForms.map((form) => {
      if (form.id === targetForm.id)  {
        db.collection("forms")
        .doc(form.id)
        .set({status: e.target.value}, {merge: true});

        return { ...form, status: e.target.value};
      } else {
        return form;
      }
    });

    setRecoilForms(newArray);
    setFilteredForms(newArray);
  };

  // フィルター

  useEffect(() => {
    const filteringForms = () => {
      switch (filter) {
        case "notStarted":
          setFilteredForms(
            recoilForms.filter((form) => form.status === "notStarted")
          );
          break;

        case "doing":
          setFilteredForms(
            recoilForms.filter((form) => form.status === "doing")
          );
          break;
        case "done":
          setFilteredForms(
            recoilForms.filter((form) => form.status === "done"));
          break;

        default:
          setFilteredForms(recoilForms);
      }
    };
    filteringForms();
  }, [filter, recoilForms]);
  

  
  // 日付を昇順にソートする場合
  
  const sortFormByDate = (e) => {
    setSort(e.target.value)

  if (e.target.value === "asc") {
    setFilteredForms(filteredForms.slice().sort((a, b) => dayjs(a.createdAt,('YYYY-MM-DD')) - dayjs(b.createdAt,('YYYY-MM-DD'))))
  } else {
    setFilteredForms(filteredForms.slice().sort((a, b) => dayjs(b.createdAt,('YYYY-MM-DD')) - dayjs(a.createdAt,('YYYY-MM-DD'))))
  }

}

useLayoutEffect(() => {
  const unSub = auth.onAuthStateChanged((user) => {
    setUser(user);
    !user && router.push("../../Login/Login");
  });
  return () => unSub();
});



  return (
    <>
    {user && ( 
    <>
    <div className={scss.dataTitle}>
      <div>
        <p className={scss.dataText}>DAT ADMINISTRATOR</p>
      </div>
      <div className={scss.dataRight}>
        <Link href="./dataUnder/admin">
          <p className={scss.dataAdmin}>
            <Image src="/images/kkrn_icon_user_2.png" width="100" height="100"/>
          </p>
        </Link>
        <div className={scss.dataLogoutButton}>
          <button
            
            onClick={async () => {
              try {
                await auth.signOut();
                router.push("../../Login/Login");
              } catch (error) {
                alert(error.message);
              }
            }}
            
            >
            LogOut
          </button>
        </div>
      </div>
    </div>
    
    
    <div className={scss.dataContainer}>
      
      <span className={scss.dataSortButton}>
        <select
          value={sort}
          onChange={(e) => sortFormByDate(e)}>
          <option>送信日でソート</option>
          <option value="asc">昇順</option>
          <option value="desk">降順</option>
        </select>
      </span>

      <span className={scss.dataStatusButton}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option value="all">全て</option>
          <option value="notStarted">未対応</option>
          <option value="doing">対応中</option>
          <option value="done">対応済み</option>
        </select>
      </span>
      
      <div className={scss.dataName}>
        <span className={scss.dataIDTitle}>固有ID</span>
        <span className={scss.dataNameTitle}>氏名</span>
        <span className={scss.dataCompanyTitle}>会社・組織名</span>
        <span className={scss.dataMailTitle}>メールアドレス</span>
        <span className={scss.dataTelTitle}>電話番号</span>
        <span className={scss.dataAffairTitle}>ご用件</span>
        <span className={scss.dataCorporatesStructureTitle}>事業形態</span>
        <span className={scss.dataInquiryTitle}>お問い合わせ内容</span>
        <span className={scss.dataStatusTitle}>対応状況</span>
        <span className={scss.dataDateTitle}>送信日</span>
      </div>


      { !filteredForms.length ?
          <p>
            formが登録されていません
          </p>  
            :
          <ul className={scss.dataForms}> 
        {filteredForms.map((form) =>(
          <li className={scss.dataList} key={form.id}>
            
            <Link href = {{ pathname: "./dataUnder/show", 
            query: { 
            id: form.id, names: form.names, furigana: form.furigana,
            company: form.company,email: form.email,tel: form.tel,affair:form.affair,
            corporatesStructure: form.corporatesStructure,inquiry: form.inquiry,createdAt:form.createdAt,
            updatedAt: form.updatedAt,status: form.status }}}>
            <span className={scss.dataIDForm}>{form.id}</span></Link>
            <span className={scss.dataNameForm}>{form.names}</span>
            <span className={scss.dataCompanyForm}>{form.company}</span>
            <span className={scss.dataMailForm}>{form.email}</span>
            <span className={scss.dataTelForm}>{form.tel}</span>
            <span className={scss.dataAffairForm}>{form.affair}</span>
            <span className={scss.dataCorporatesStructureForm}>{form.corporatesStructure}</span>
            <span className={scss.dataInquiryForm}>{form.inquiry}</span>
            
            <span className={scss.dataStatusForm}>
            <select
                value={form.status}
                onChange={(e) => handleStatusChange(form,e)}
                >
                <option value="notStarted">未対応</option>
                <option value="doing">対応中</option>
                <option value="done">対応済み</option>  
            </select>
            </span>
            <span className={scss.dataDateForm}>{form.createdAt}</span>
            <span className={scss.dataDeleteButton}>
              <button 
                onClick={() => handleDeleteForm(form)}
                >削除
              </button>
            </span>
            
            
            <Link href={{ pathname: "./dataUnder/edit", 
              query: { 
              id: form.id, names: form.names, furigana: form.furigana,
              company: form.company, email: form.email,tel: form.tel,
              affair: form.affair,corporatesStructure: form.corporatesStructure,inquiry: form.inquiry,updatedAt: form.updatedAt}}}>
              <span className={scss.dataEditButton}>
                <button>
                  編集
                </button>
              </span>
            </Link>
          </li>
          ))
        }
      </ul>
      } 
      </div>
      </>
    )}
    </>  
  )

}