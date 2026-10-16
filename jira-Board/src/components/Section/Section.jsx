import './Section.css';

import Card from '../card/card';

function Section({title, taskArray, status}){

    return(
    <div className='section' >
         <h2>{title}</h2>
          {taskArray.map((obj)=>{
             return(
                obj.status == status && <Card text={obj.task} tags={obj.tags} /> 
             )
         })} 
        
    </div>
    
    )
}

export default Section;