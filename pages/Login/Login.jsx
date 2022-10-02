import React, { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";
import Link from "next/link";
import scss from "../../styles/sass/_login.module.scss";

  export default function Login() {
  
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && router.push("./data/data");
    });
    return () => unSub();
  });

  return (
  
    <div className={scss.Login}>
      <div className={scss.LoginTriangle}></div>
      <h1 className={scss.LoginTitle}>{isLogin ? "ログイン" : "Register"}</h1>
      <br />
      <div className={scss.LoginContainer}>
        <form>
        <p>
        <input
          name="email"
          label="E-mail"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        </p>
        </form>
      <br />
        <form>
        <p>
        <input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </p>
        </form>
      <br />
      
      <p>
      <button
        className={scss.LoginButton}
        onClick={
          isLogin
            ? async () => {
                try {
                  await auth.signInWithEmailAndPassword(email, password);
                  router.push("./data/data");
                } catch (error) {
                  alert(error.message);
                }
              }
            : async () => {
                try {
                  await auth.createUserWithEmailAndPassword(email, password);
                  router.push("./data/data");
                } catch (error) {
                  alert(error.message);
                }
              }
        }
      >
        {isLogin ? "LOGIN" : "register"}
      </button>
      </p>
      <br />
        <span onClick={() => setIsLogin(!isLogin)}>
          
        </span>
        <Link href="../form"><p><button
        className={scss.LoginBack}
        >前のページへ</button></p></Link>
        </div>
    </div>
  );
};


