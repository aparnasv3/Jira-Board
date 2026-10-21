import './Tag.css'
import {tagStyle ,tagMap} from '../../constants/constant'
const Tag= (props)=>{

 const {name, SelectedTag, select}= props;
const key = tagMap[name];
return(
<>
<button 
   type='button'
    className='tag-btn' 
   onClick={()=> SelectedTag(name)} 
   style={select?tagStyle[key]:{}}>
{name}
</button>
{/* ithe tagFun he call krt ahot je ki prop ni al ahe v ty madhe as argument name mahnje tag ch nav send krt ahot */}

</>
)
}
export default Tag;