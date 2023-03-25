import Card from "../components/Card/Card"


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
        <div>
            {state ? state.map((item, i) => {
            return <Card key={i} imageUrl={item.imageUrl} title={item.title} price={item.price} />   
             }) : null}
        </div>
      )
}

export default Home;