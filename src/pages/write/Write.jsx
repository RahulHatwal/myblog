import './write.css'
import dummyPublishImg from '../../Images/dummyPublishImg.jpg'

export default function Write() {
  return (
    <div className='write'>
      <img src={dummyPublishImg} alt='' className='writeImg' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-light fa-plus'></i>
          </label>
          <input type='file' id='fileInput' />
          <input
            type='text'
            className='writeInput'
            placeholder='Title'
            autoFocus={true}
          />
        </div>

        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
