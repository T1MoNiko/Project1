import styles from './style.module.css'


const Card = (imageUrl, title, price) => {
    return(
         <div className = {styles.cardContainer}>
             <img src = {imageUrl} alt = ""/>
             <title>{title}</title>
              <p>{price}</p>

         </div>

    )  
}

export default Card;