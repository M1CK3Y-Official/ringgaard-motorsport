import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
 
export default function NotFound() {
  return (
    <div className='errorPage'>
      <h1 className='title'>404</h1>
      
      <div className='message'>
        <p>Siden kunne ikke findes</p>
        
        <Link href='/' className='link'><FaArrowLeft className='icon'/>&nbsp;Tilbage til forsiden</Link>
      </div>
    </div>
  )
}