import { Link } from "react-router-dom"

export default function Links() {
  return (
    <>
    <div className="btn_kr">
      <a><Link to="/kr">korea</Link></a>
    </div> 

    <br />

    <div className="btn_en">
      <a><Link to="/en">english</Link></a>
    </div>
    </>
    
  )
}

{/* <section className="skills section" id="skills">
<h2 className="section__title">정호의 포트폴리오 사이트에 오신 것을 환영합니다 !<br/>
welcome to jungho's portfolio site !</h2>
<span className="section__subtitle">언어를 선택하여 주세요. <br/>
chose languages</span>
<div className="skills__container container grid">
</div>


<div class="intro">
<div class="loader">
<div class="box">
<div className="btn_kr">
<Link to="/kr">korea</Link>
</div>
<div class="loader6"></div>
<div className="btn_en">
<Link to="/en">english</Link>
</div>
</div>
</div>
</div>
</section> */}