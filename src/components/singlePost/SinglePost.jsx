import './singlePost.css'
import postCoverImage from '../../Images/cover1.png'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src={postCoverImage} alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
            <i className='singlePostIcon fa-regular fa-trash-can'></i>
          </div>
        </h1>

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author : <b>Rahul</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vero
          fugiat corrupti, inventore porro unde placeat, aspernatur nam ipsum
          nesciunt magni culpa debitis! Ipsum, praesentium dolor voluptatibus
          alias molestiae quae. Hic rerum incidunt necessitatibus quod quibusdam
          vitae, iste temporibus expedita, officia, sunt nam optio minus
          molestiae nostrum in explicabo veniam exercitationem? Quo ducimus
          reiciendis, quis excepturi magnam ex! Hic, ab. Iure totam quae
          suscipit minima officia sequi temporibus ducimus, magni quam hic
          mollitia vitae cumque ut animi, recusandae officiis repudiandae
          soluta! Placeat accusamus ipsum saepe nisi, explicabo temporibus
          numquam magnam? Unde corrupti quo sapiente distinctio tempore rem illo
          exercitationem obcaecati iste et ut esse reiciendis architecto
          incidunt, voluptas ab sequi, totam repudiandae id dolor adipisci odio!
          Repellat facere rerum molestias? Quibusdam, eligendi iste pariatur est
          hic officiis ipsum sapiente sint praesentium quo id dolore sed
          temporibus! Similique hic, vel perspiciatis est rem enim voluptatibus
          maxime saepe labore odio inventore commodi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deleniti cupiditate temporibus aliquid
          consectetur asperiores at neque quidem voluptates inventore dolores
          maxime delectus similique iure, consequuntur repudiandae soluta minus
          adipisci quo! Iusto debitis mollitia non explicabo temporibus,
          similique quaerat necessitatibus tenetur veniam cupiditate architecto
          sunt quam saepe molestiae, obcaecati illo nulla iure eum! Natus quas
          minus et alias cum non necessitatibus. Minus suscipit eveniet rerum
          tenetur ipsum praesentium iste doloribus sequi, et porro obcaecati
          nesciunt alias corrupti dolores omnis aspernatur ipsa accusantium
          repellendus architecto laudantium placeat debitis odit sit magni? Ea?
          Inventore dolorem voluptatem earum numquam voluptatum aperiam,
          nesciunt quos neque ut esse eveniet incidunt sit, sint ducimus atque.
          Quidem provident eveniet atque repudiandae tempore quaerat esse magnam
          nobis culpa magni? Nesciunt maxime magnam labore, sequi quaerat
          obcaecati eligendi vero similique. Magni, enim ullam? Possimus illo
          sint delectus obcaecati a nemo voluptas quos, ipsum blanditiis
          doloribus mollitia assumenda culpa similique sunt! Maxime illo
          nesciunt repudiandae consectetur itaque? Ipsa rerum assumenda
          molestiae omnis voluptas quidem explicabo quaerat ducimus odit
          tempora, a illo modi ex necessitatibus. Molestiae tempora numquam
          inventore consequatur aspernatur laboriosam? Obcaecati cum, asperiores
          illum est dolor consectetur at labore? Fugit, dicta, labore, rerum
          quibusdam voluptatem distinctio cum quidem architecto consectetur
          ratione quaerat voluptatum dolorem deleniti animi iure magnam eligendi
          recusandae. Tenetur aspernatur velit quod, vel ipsa sunt corporis
          molestias accusamus. Minima mollitia quo voluptates, ad nostrum culpa
          consequuntur in perspiciatis quibusdam doloremque non excepturi
          distinctio repellendus eos, cumque deserunt sapiente!
        </p>
      </div>
    </div>
  )
}
