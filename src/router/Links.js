import { Link } from "react-router-dom"

export default function Links() {
  return (
    <div>
      <button className='btn__kr'>
        <Link to="/kr">korea</Link>
        </button> <br />
        <button className='btn__kr'>
        <Link to="/en">english</Link>
        </button>
    </div>
  )
}