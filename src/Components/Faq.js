import React,{useState} from 'react'
import FaqData from './FaqData'
import SingleFaq from "../Components/SingleFaq"

function Faq() {
    const [questions,Setquestions] = useState(FaqData)

    return (
        <div className="faqs">
        <h1 className="faq-head">Frequently Asked Questions (FAQ's)</h1>

        {questions.map((item)=>{
            return <SingleFaq key={item.id} item ={item}/>
        })}

        

            
        </div>
    )
}

export default Faq
