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