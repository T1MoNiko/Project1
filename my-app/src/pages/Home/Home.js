import styles from "./home.module.css"

import Card from "../../components/Card/Card"

import axios from "axios"
import { useState } from "react"

const Home = () => {
    const [state, setState] = useState()

    async function Response() {
       const { data } = await axios.get("/products.json")
       setState(data)
    }
    Response()
    return (
        <>
            <header>
                <div className={styles.logo}></div>
                <nav>
                    <img src="img/logoWeb.png" alt="" />
                    <div className={styles.btnsContainer}>
                        <ul>
                            <li className={styles.nav_btn}>Catalog</li>
                            <li className={styles.nav_btn}>About us</li>
                            <li className={styles.accountAndCartContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                <h1 className={styles.title}>The Best Sneakers</h1>
                <p>
                    Our company has been making quality sneakers for many years, 
                    so we advise you to buy something for yourself.
                    Absolutely all our sneakers are made of incredibly high quality fabric.
                    Very soft inside. All customers are satisfied.
                </p>
                <button>Buy now</button>
            </header>
            <div className={styles.productsContainer}>
                {state ? state.map((item, i) => {
                return <Card key={i} imageUrl={item.imageUrl} title={item.title} price={item.price} />   
                }) : null}
            </div>
            
            <footer>
                <div className={styles.contacts} >
                    <h2 >Our contacts</h2>
                         <p> +375290000000</p>
                         <p> +375291000000</p>
                </div>
                <div className={styles.brends}>
                     <h2 >Brends</h2>
                        <p>Bershka</p>
                         <p>Balenciaga</p>
                         <p>Nike</p>
                         <p>Louis Vuitton</p>
                     
                </div>
            </footer>
        </>
            
        
      )
}

export default Home;