import React, { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import Link from "next/link";
  export default function Login() {
  
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && router.push("./data");
    });
    return () => unSub();
  });

  return (
    <div>
      <h1>{isLogin ? "Login" : "Register"}</h1>
      <br />
      <form>
        <input
          name="email"
          label="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
      <br />
      <form>
        <input
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <br />
      <button
        onClick={
          isLogin
            ? async () => {
                try {
                  await auth.signInWithEmailAndPassword(email, password);
                  router.push("./data");
                } catch (error) {
                  alert(error.message);
                }
              }
            : async () => {
                try {
                  await auth.createUserWithEmailAndPassword(email, password);
                  router.push("./data");
                } catch (error) {
                  alert(error.message);
                }
              }
        }
      >
        {isLogin ? "login" : "register"}
      </button>
      <br />
        <span onClick={() => setIsLogin(!isLogin)}>
          
        </span>
        <Link href="form"><button>前のページへ</button></Link>
    </div>
  );
};


