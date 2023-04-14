import styles from "./accountPage.module.css"

import { Link } from "react-router-dom";

const AccountPage = () => {
    return (
        <>
            <header>
                <div className={styles.cartNav}>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>  
                    </Link>
                    <p>Back</p>
                </div>
            </header>
            <section>
                <div className={styles.clientImgAndName}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>  
                    <div>
                        <img src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg" alt="" />   
                    </div>
                    <p>Name</p>
                </div>
                <div className={styles.accountWrapper}>
                    <div className={styles.accountInfo}>
                        <p>First Name</p>
                        <p className={styles.infoBox}>Anna</p>
                    </div>
                    <div className={styles.accountInfo}>
                        <p>Last Name</p>
                        <p className={styles.infoBox}>Mur</p>
                    </div>
                    <div className={styles.accountInfo}>
                        <p>Email</p>
                        <p className={styles.infoBox}>lenovot1990@gmail.com</p>
                    </div>
                    <div className={styles.accountInfo}>
                        <p>Phone Number</p>
                        <p className={styles.infoBox}>+375293375448</p>
                    </div>
                </div>
                <button className={styles.logOutBtn}>Log out</button>
            </section>
        </>
    )
}


export default AccountPage;