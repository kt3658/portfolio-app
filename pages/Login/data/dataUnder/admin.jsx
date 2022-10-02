
import Image from "next/image";
import scss from "../../../../styles/sass/_admin.module.scss";
import { auth } from "../../../../lib/firebase";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Admin() {
  const router = useRouter();
  
  return (
    <>
    <div className={scss.adminContainer}>
    <div className={scss.adminBox}>
    <Image className={scss.adminImage} src="/images/kkrn_icon_user_2.png" width="200" height="200"/>
    
    <p className={scss.adminName}>Administrator-name: KEN</p>
    <p
    className={scss.adminLogout}
    onClick={async () => {
      try {
        await auth.signOut();
        router.push("../../Login");
      } catch (error) {
        alert(error.message);
      }
    }}
    
  >
  ログアウト
    
    </p>
    <Link href="../data">
    <p className={scss.adminBack}>前のページに戻る</p>
    </Link>
    </div>
    </div>
    </>
  )

}