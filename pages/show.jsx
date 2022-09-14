import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
export default function Show() {
  const router = useRouter();
  return (
    <>
    <p>Formデータの詳細</p>
    <p>固有ID：{router.query.id}</p>
    <h2>{router.query.names}</h2>
    <p>{router.query.furigana}</p>
    <p>{router.query.company}</p>
    <p>{router.query.email}</p>
    <p>{router.query.tel}</p>
    <p>ご用件：{router.query.affair}</p>
    <p>事業形態：{router.query.corporatesStructure}</p>
    <p>お問い合わせ内容：{router.query.inquiry}</p>
    <p>送信日：{router.query.createdAt}</p>
    <p>編集更新日：{router.query.updatedAt}</p>
    <p>進捗状況：{router.query.status}</p>

      <Link href={{ pathname: "/edit", 
        query: { 
        id: router.query.id, names: router.query.names, furigana: router.query.furigana,
        company: router.query.company, email: router.query.email,tel: router.query.tel,
        affair: router.query.affair,corporatesStructure: router.query.corporatesStructure,inquiry: router.query.inquiry,updatedAt: router.query.updatedAt}}}>
        <button>
          編集
        </button>
      </Link>
      <Link href="./data">
        <button 
            >
          戻る
        </button>
      </Link>
    </>
  )
}