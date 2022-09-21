import { db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';
import { auth } from "../lib/firebase";
import React from "react";
import Link from "next/link";
import dayjs from 'dayjs';
import { useRouter } from "next/router";
import scss from "../styles/sass/_data.module.scss";
import Image from "next/image";

export default function Data() {
  const router = useRouter();

  const [recoilForms, setRecoilForms] = useRecoilState(formState);
  const [filteredForms, setFilteredForms] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  
  
  useEffect(()=> {
    const unSub = auth.onAuthStateChanged((user)=> {
      !user && router.push("./Login");
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




  return (
    <>
    <div className={scss.dataTitle}>
      <div>
        <p className={scss.dataText}>DATA ADMINISTRATOR</p>
      </div>
      <div className={scss.dataRight}>
        <Link href="admin">
          <p className={scss.dataAdmin}>
            <Image src="/images/kkrn_icon_user_2.png" width="100" height="100"/>
          </p>
        </Link>
        <div className={scss.dataLogoutButton}>
          <button
            
            onClick={async () => {
              try {
                await auth.signOut();
                router.push("./Login");
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
    
    
    <div>
      
      
      <select
        value={sort}
        onChange={(e) => sortFormByDate(e)}>
        <option>作成日でソート</option>
        <option value="asc">昇順</option>
        <option value="desk">降順</option>
      </select>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
        <option value="all">全て</option>
        <option value="notStarted">未対応</option>
        <option value="doing">対応中</option>
        <option value="done">対応済み</option>
      </select>
      
      <div class={scss.dataName}>
        <span className={scss.dataIDTitle}>固有ID</span>
        <span className={scss.dataNameTitle}>氏名</span>
        <span className={scss.dataFuriganaTitle}>ふりがな</span>
        <span className={scss.dataCompanyTitle}>会社・組織名</span>
        <span className={scss.dataMailTitle}>メールアドレス</span>
        <span className={scss.dataAffairTitle}>ご用件</span>
        <span className={scss.dataCorporatesStructureTitle}>事業形態</span>
        <br />
        <div className={scss.dataUnderName}>
          <span className={scss.dataInquiryTitle}>お問い合わせ内容</span>
          <span className={scss.dataStatusTitle}>対応状況</span>
          <span className={scss.dataDateTitle}>送信日</span>
          <span className={scss.dataEditDateTitle}>編集更新日</span>
        </div>
      </div>


      { !filteredForms.length ?
          <p>
            formが登録されていません
          </p>  
            :
          <ul> 
        {filteredForms?.map((form) =>(
          <li key={form.id}>
            
            <Link href = {{ pathname: "/show", 
            query: { 
            id: form.id, names: form.names, furigana: form.furigana,
            company: form.company,email: form.email,tel: form.tel,affair:form.affair,
            corporatesStructure: form.corporatesStructure,inquiry: form.inquiry,createdAt:form.createdAt,
            updatedAt: form.updatedAt,status: form.status }}}>
            <span>{form.id}</span></Link>
            <span>{form.names}</span>
            <span>{form.furigana}</span>
            <span>{form.company}</span>
            <span>{form.email}</span>
            <span>{form.tel}</span>
            <span>{form.affair}</span>
            <span>{form.corporatesStructure}</span>
            <span>{form.inquiry}</span>
            
            <select 
                value={form.status}
                onChange={(e) => handleStatusChange(form,e)}
                >
                <option value="notStarted">未対応</option>
                <option value="doing">対応中</option>
                <option value="done">対応済み</option>  
            </select>
            <span>{form.createdAt}</span>
            <span>{form.updatedAt}</span>
            <button
              onClick={() => handleDeleteForm(form)}
              >削除
            </button>
            
            <Link href={{ pathname: "/edit", 
            query: { 
            id: form.id, names: form.names, furigana: form.furigana,
            company: form.company, email: form.email,tel: form.tel,
            affair: form.affair,corporatesStructure: form.corporatesStructure,inquiry: form.inquiry,updatedAt: form.updatedAt}}}>
            <button>
              編集
            </button>
            </Link>
          </li>
          ))
        }
      </ul>
      } 
      </div>
    </>
  )

}