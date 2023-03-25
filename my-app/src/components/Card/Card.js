import styles from './style.module.css'


const Card = ({imageUrl, title, price}) => {
    return(
      <div className={styles.cardContainer}>
       <img src={imageUrl} alt="" />
<<<<<<< HEAD
       <p className={styles.titleCard}>{title}</p>
=======
       <p>{title}</p> 
       
>>>>>>> 0cbe9a373b7cc4ebe93bf8c39f29fe3b5c06ec0f
       <p>{price}$</p>
     </div>
    )
}

export default Card;