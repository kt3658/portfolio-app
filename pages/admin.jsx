import { useEffect,useState } from "react";

export default function Admin() {

  // const [actionCode, setActionCode] = useState('');

  // const [password, setPassword] = useState('');

  // const [mode, setMode] = useState('');

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const oobCode = queryParams.get('oobCode') || '';
  //   setMode(mode);
  //   setActionCode(oobCode);
  // }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   if(oobCode === '') return;// 取得できない場合処理終了

  //   firebase
  //     .auth()
  //     .verifyPasswordResetCode(actionCode)
  //     .then(() => {
  //       firebase
  //         .auth()
  //         .confirmPasswordReset(actionCode, password)
  //         .then(async (resp) => { console.log("success")
  //           // 成功。ログイン画面などを表示するコードを足す場所
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //     })
  // }
  return (
    <>
    <h2>管理者の名前 Ken</h2>
    <button
    onClick={handleSubmit} 
    >
    パスワードの変更
    </button>
    </>
  )

}