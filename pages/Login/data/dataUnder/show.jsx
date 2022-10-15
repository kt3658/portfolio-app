import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import scss from "../../../../styles/sass/_show.module.scss";
export default function Show() {
  const router = useRouter();
  return (
  
  <>
    <div className={scss.showTitle}>
      <p className={scss.showText}>FormDataDetail</p>
    </div>
    
    <div className={scss.showContainer}>
      <div className={scss.showBox1}>
        <div className={scss.showNameContainer}>
          <span className={scss.showFurigana}>{router.query.furigana}</span>
          <div className={scss.showName}><input value={router.query.names} readOnly={true}/></div>
        </div>
      
        <div className={scss.showStatusContainer}>
          <p className={scss.showStatus}>進捗状況：{router.query.status}</p>
        </div>
      </div>
      
      <div className={scss.showBox2}>
        <p className={scss.showCompany}><input value={router.query.company} readOnly={true}/></p>
        <p className={scss.showEmail}><input value={router.query.email} readOnly={true}/></p>
        <p className={scss.showTel}><input value={router.query.tel} readOnly={true}/></p>
      </div>
      
      <div className={scss.showBox3}>
        <p>ご用件：{router.query.affair}</p>
        <p>事業形態：{router.query.corporatesStructure}</p>
      </div>
      
      <div className={scss.showBox4}>
        <p>お問い合わせ内容：<textarea value={router.query.inquiry} readOnly={true}/></p>
      </div>
      
      <div className={scss.showBox5}>
        <p>固有ID：{router.query.id}</p>
      </div>
      
      <div className={scss.showBox6}>
        <p>送信日：{router.query.createdAt}</p>
        <p>編集更新日：{router.query.updatedAt}</p>
      </div>
    </div>

      <Link href={{ pathname: "./edit", 
        query: { 
        id: router.query.id, names: router.query.names, furigana: router.query.furigana,
        company: router.query.company, email: router.query.email,tel: router.query.tel,
        affair: router.query.affair,corporatesStructure: router.query.corporatesStructure,inquiry: router.query.inquiry,updatedAt: router.query.updatedAt}}}>
        <div className={scss.showEditButton}>
          <button>
            編集
          </button>
        </div>
      </Link>
      
      <Link href="../data">
        <div className={scss.showBackButton}>
          <button 
              >
            戻る
          </button>
        </div>
      </Link>
    </>
  )
}