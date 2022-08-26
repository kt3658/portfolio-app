import { db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { formState } from '../component/atom';

export default function Data() {

  const [recoilForms, setRecoilForms] = useRecoilState(formState);
  // const [formStatus, setFormStatus] = useState("notstarted");

  // const handleStatusChange = e => setFormStatus(e.target.value);

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
          // status:doc.data().status,
        }))
      );
    });
    return () => unSub();
  }, []);

  return (
    <>
      <ul>
        {recoilForms.map(form => (
          <li key={form.id}>
            <span>{form.id}</span>
            <span>{form.names}</span>
            <span>{form.furigana}</span>
            <span>{form.company}</span>
            <span>{form.email}</span>
            <span>{form.tel}</span>
            <span>{form.affair}</span>
            <span>{form.corporatesStructure}</span>
            <span>{form.inquiry}</span>
            {/* <select
                value={form.status}
              >
                <option value="notStarted">未対応</option>
                <option value="doing">対応中</option>
                <option value="done">対応済</option>
                onChange={(e) => handleStatusChange(e.target.value)}
            </select> */}
          </li>
        ))}
      </ul>
    </>
  )

}