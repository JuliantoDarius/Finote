import Head from "next/head";
import Image from "next/image";
import loginBackground from "../../public/assets/img/login-background.png";
import balanceIcon from "../../public/assets/img/balance-icon.png";
import { motion as M } from "framer-motion";
import styles from "./Login.module.css";

const Login = () => {
   return (
      <>
         <Head>
            <title>Login | Finote</title>
         </Head>

         <M.section
            className={styles["login-section"]}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <div className={styles["login-bg-container"]}>
               <Image
                  src={loginBackground}
                  alt="Login"
                  className="animate-moving"
               />
            </div>
            <form className={styles["form-container"]}>
               <h1>LOGIN</h1>
               <div className={styles["login-icon-container"]}>
                  <Image
                     src={balanceIcon}
                     alt="Finote Icon"
                     className={styles["login-icon"]}
                  />
               </div>

               <div className={styles["input-container"]}>
                  <input
                     type="text"
                     name="txtUsername"
                     id="txtUsername"
                     placeholder="username"
                     className={styles["float-text-input"]}
                  />
                  <label
                     htmlFor="txtUsername"
                     className={styles["float-label"]}
                  >
                     Username
                  </label>
               </div>

               <div className={styles["input-container"]}>
                  <input
                     type="password"
                     name="txtPassword"
                     id="txtPassword"
                     placeholder="password"
                     className={styles["float-text-input"]}
                  />
                  <label
                     htmlFor="txtPassword"
                     className={styles["float-label"]}
                  >
                     Password
                  </label>
               </div>

               <div className={styles["input-container"]}>
                  <input
                     type="submit"
                     value="Masuk"
                     className={styles["login-btn"]}
                  />
               </div>
            </form>
         </M.section>
      </>
   );
};

export default Login;
