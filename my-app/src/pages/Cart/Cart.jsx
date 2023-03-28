import styles from './cart.module.css'

import { useSelector } from 'react-redux'
import { CartCard } from '../../components/cartCard/CartCard'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { products } = useSelector(store => store.CartReducer)
    console.log(products)
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
                <h1 className={styles.cartTitle}>Your Cart</h1>
                {products.length ? 
                <div className={styles.cartContainer}>
                    <div className={styles.cartProducts}>
                        {products.map(item => <CartCard title={item.title} imageUrl={item.imageUrl} id={item.id} price={item.price} />)}
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.info}>
                            <h2>Order Information</h2>
                            <p>Number Of Products:</p>
                            <p>Delivery:</p>
                            <p>Discount:</p>
                            <p>Products price:</p>
                        </div>
                        <div>
                            <p>Total:</p>
                        </div>
                        <div>
                            <p>Checkout</p>
                        </div>
                    </div>
                </div>
                :
                <h1 className={styles.cartEmpty}>There is nothing in your cart<br/>😑</h1>}
            </section>
        </>
    )
}
export default Cart;