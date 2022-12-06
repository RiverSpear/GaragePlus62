import React, {useState} from 'react'
import FaqModel from './FaqModel'

export const FaqData = ({faq}) => {

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
    return (
        <>
            <div className='flex flex-col gap-3 w-full'>
                {faq.slice(0,5).map((article, index) => <FaqModel onToggle={() => handleToggle(index)} article={article} key={index} active={clicked === index}/>)}
            </div>
        </>
    )
}

export default FaqData