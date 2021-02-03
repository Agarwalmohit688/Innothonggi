import React,{useState} from 'react'


function SingleFaq({key,item}) {
    const [close,setClose] = useState(false)
    return (
        <div className="quesBox">
        <h1 className="ques" onClick={()=>setClose(!close)} key={key}>{item.question}</h1>
        {close ?  <p className="ans" >{item.answer}</p> :null }
        


       </div>
    )
}

export default SingleFaq
