
import './Card.css'
import Tag from '../Tag/Tag'


const Card = ({text, tags})=>{
     return(
        <>
            <div className='Section-Card'>
            <h4>{text}</h4>
            <div className='Section-Card-Tag'>
            <div id='tag'>
              {tags.map((tag) => {
                 return <Tag name={tag} />;
              })} 
        
            </div>    
            <div>
             <p>delete icon</p>
                {/* <img src="fluent-mdl2:delete" alt="" />  */}
            </div>
            </div>
         </div>
        </>
     )
}

export default Card;