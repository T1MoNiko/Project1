import styles from "./registration.module.css"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { createAccount } from "../../redux/regSlice"

const Registration = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        check: false,
        account: true,
        imageUrl: "./img/iconAccountImgEmpty.png"
    })
    
    const dispatch = useDispatch()
    console.log(state)
    
    
    
    const updateValue = (event) => {
            if (event.target.name === "email") {
                setState(prev => {return {...prev, email: event.target.value}})
            } else if (event.target.name === "password") {
                setState(prev => {return {...prev, password: event.target.value}})
            } else if (event.target.name === "checkbox") {
                setState(prev => {return {...prev, check: event.target.checked}})
            } else if (event.target.name === "firstName") {
                setState(prev => {return {...prev, firstName: event.target.value}})
            } else if (event.target.name === "lastName") {
                setState(prev => {return {...prev, lastName: event.target.value}})
            } else {
                console.log('err')
            }
    
    }

    return (
        <section className={styles.regContainer}>
            <div className={styles.regBox}>
                <h1>Registration</h1>
                <input type="text" 
                       placeholder="First Name"
                       name="firstName"
                       onChange={(e) => updateValue(e)}
                       />
                <input type="text" 
                       placeholder="Last Name"
                       name="lastName"
                       onChange={(e) => updateValue(e)}
                       />
                <input type="text" 
                       placeholder="Email"
                       name="email"
                       onChange={(e) => updateValue(e)}
                       />
                <input type="text" 
                       placeholder="Phone Number"
                       name="phone"
                       onChange={(e) => updateValue(e)}
                       />
                <input type="text" 
                       placeholder="Password"
                       name="password"
                       onChange={(e) => updateValue(e)}
                       />
                <button onClick={() => dispatch(createAccount(state))} disabled>REGISTER</button>
            </div>
        </section>
    )
}

export default Registration;