import { React, useState ,useEffect,} from "react"
import axios from 'axios'

const Price=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(" https://api.coinpapriaa.com/v1/tickers")
        .then((res)=>{setData(res.data)})
    },[])

  return (
    <div>
        {data.map((item)=>{
           return(
            <>
            {item.Price}
            </>
           )
        })}
    </div>
  )

}
export default Price
