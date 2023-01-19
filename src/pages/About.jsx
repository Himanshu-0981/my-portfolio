import mainImg from '../assets/main_img.png'

const About = () => {
    return (
        <>
             <div className='flex items-center'>
               <div>
               <img src={mainImg} alt="img"/>
               </div>
               <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis repellat voluptate sed.</p>
               </div>
             </div>
        </>
    )
}

export default About;