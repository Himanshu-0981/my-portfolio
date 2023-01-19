import mainImg from '../assets/main_pic.png'

const Img = (props) => {
    const {src} = props
    return (
        <>
              <div className='hidden sm:block sm:ml-14'>
                <img src={`${src}`} alt="img" />
            </div>
        </>
    )
}

export default Img