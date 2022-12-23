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
            <div className='flex flex-col gap-3 px-10 md:px-32 lg:px-64 xl:px-96 w-full'>
                {faq.map((article, index) => <FaqModel onToggle={() => handleToggle(index)} article={article} key={index} active={clicked === index}/>)}
            </div>
        </>
    )
}

export default FaqData