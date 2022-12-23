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
                {
                  faq.map((article, index) => {
                    return(article.fields.priority === true) ? (
                      <FaqModel onToggle={() => handleToggle(index)} article={article} key={index} active={clicked === index}/>
                    ) : null
                  })
                }
            </div>
        </>
    )
}

export default FaqData