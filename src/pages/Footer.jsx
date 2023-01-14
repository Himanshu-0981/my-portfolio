import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub , AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='flex  '>
            <div className='flex  text-2xl text-[#142a36]'>
                <FaLinkedin />
                <AiFillGithub />
                <AiOutlineTwitter />              
            </div>
        </div>
    )
}

export default Footer