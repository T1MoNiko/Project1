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
                    <ul>
                        <li className={styles.nav_btn}>О нас</li>
                    </ul>
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
            <div className={styles.varya}>
                <p>Варя я тебя люблю!!!!!</p>
                <img src="https://thypix.com/wp-content/uploads/herzbild-1.png" alt="" />
            </div>
            <p className={styles.footer}>
                Our contacts:
                +375-29-0000000
            </p>
        </>
            
        
      )
}

export default Home;