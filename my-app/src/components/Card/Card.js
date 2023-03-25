import styles from './style.module.css'


const Card = ({imageUrl, title, price}) => {
    return(
      <div>
       <img src={imageUrl} alt="" />
       <p>{title}</p>
       <p>{price}$</p>
     </div>
    )
}

export default Card;