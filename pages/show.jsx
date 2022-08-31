import React from "react";
import { useRouter } from "next/router";
export default function Show() {
  const router = useRouter();
  return (
    <>
    <p>Dataの詳細</p>
    <p>{router.query.id}</p>
    <p>{router.query.names}</p>
    <p>{router.query.company}</p>
    <p>{router.query.email}</p>
    <p>{router.query.tel}</p>
    <p>{router.query.affair}</p>
    <p>{router.query.corporatesStructure}</p>
    <p>{router.query.inquiry}</p>
    <p>{router.query.createdAt}</p>
    <p>{router.query.updatedAt}</p>
    <p>{router.query.status}</p>
    </>
  )
}