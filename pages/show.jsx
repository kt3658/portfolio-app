import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
export default function Show() {
  const router = useRouter();
  return (
    <>
    <p>Dataの詳細</p>
    <p>{router.query.id}</p>
    <p>{router.query.names}</p>
    <p>{router.query.furigana}</p>
    <p>{router.query.company}</p>
    <p>{router.query.email}</p>
    <p>{router.query.tel}</p>
    <p>{router.query.affair}</p>
    <p>{router.query.corporatesStructure}</p>
    <p>{router.query.inquiry}</p>
    <p>{router.query.createdAt}</p>
    <p>{router.query.updatedAt}</p>
    <p>{router.query.status}</p>

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