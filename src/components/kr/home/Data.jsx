import React, { useState, useEffect } from 'react';
import "./home.css";
import { homeKr } from '../../../assets/content_kr';

const Data = () => {
    const txt = homeKr.txt;
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
          setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
          setCount(Count + 1); // 개수 만큼 체크 
      }, 100);
      if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
          clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      }
      return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  })  
          
    return (
        <div className="home__data">
            <h1 className='home__intro'>{ Text }</h1>
            <h1 className="home__title">{homeKr.title}
            <svg class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  stroke='gray'
                  stroke-width = "0.5"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none" >
                    <path fill="yellow" d="M17.09,2.82a8,8,0,0,0-6.68-1.66A8,8,0,0,0,4.14,7.48a8.07,8.07,0,0,0,1.72,6.65A4.54,4.54,0,0,1,7,17v3a3,3,0,0,0,3,3h4a3,3,0,0,0,3-3V17.19A5.17,5.17,0,0,1,18.22,14a8,8,0,0,0-1.13-11.2ZM15,20a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V19h6Zm1.67-7.24A7.13,7.13,0,0,0,15,17H13V14a1,1,0,0,0-2,0v3H9a6.5,6.5,0,0,0-1.6-4.16,6,6,0,0,1,3.39-9.72A6,6,0,0,1,18,9,5.89,5.89,0,0,1,16.67,12.76Z"/>
                </svg>
            </h1>
            <h3 className="home__subtitle">{homeKr.subtitle}</h3>
            <p className="home__description">
            {homeKr.description}
            </p>
            <a href="#contact" className="button button--flex">
                {homeKr.button}
                <svg class="button__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#fff" d="M21.15,2.86a2.89,2.89,0,0,0-3-.71L4,6.88a2.9,2.9,0,0,0-.12,5.47l5.24,2h0a.93.93,0,0,1,.53.52l2,5.25A2.87,2.87,0,0,0,14.36,22h.07a2.88,2.88,0,0,0,2.69-2L21.85,5.83A2.89,2.89,0,0,0,21.15,2.86ZM20,5.2,15.22,19.38a.88.88,0,0,1-.84.62.92.92,0,0,1-.87-.58l-2-5.25a2.91,2.91,0,0,0-1.67-1.68l-5.25-2A.9.9,0,0,1,4,9.62a.88.88,0,0,1,.62-.84L18.8,4.05A.91.91,0,0,1,20,5.2Z"></path>
                </svg>
            </a>
        </div>
    )
}

export default Data