import './post.css'
import postImage from '../../Images/dummyPostImg.jpg'
import { Link } from 'react-router-dom'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={postImage} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>music</span>
          <span className='postCat'>life</span>
        </div>
        <Link className='link' to={'/post/${post._id}'}>
          <span className='postTitle'>Lorem ipsum dolor sit</span>
        </Link>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas
        excepturi illum modi animi laborum, at ullam non voluptas vel dolorum
        corrupti nisi quae ut consequatur vero, corporis accusamus! Dolores!
        Tempore aliquam molestias veritatis tenetur temporibus facere dicta,
        debitis eius quis est, amet quae ut. Debitis consequuntur neque culpa
        odit ullam vitae ab voluptate possimus numquam excepturi amet, harum
        nemo! Sequi tempora labore rerum quidem, facere accusantium laboriosam
        neque porro commodi temporibus quis beatae dolorum minus! Qui deserunt
        quam earum in itaque ad, odit blanditiis at porro nihil voluptatibus ex!
      </p>
    </div>
  )
}
