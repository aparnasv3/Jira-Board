import "./Card.css";
import Tag from "../Tag/Tag";
import { deleteImg } from "../../assets/images";

const Card = ({ text, tags, handleDelete, index, setActiveCard }) => {
  return (
    <section
      draggable
      onDragStart={() => {
        return setActiveCard(index);
      }}
      onDragEnd={() => {
        return setActiveCard(null);
      }}
    >
      <div className="Section-Card">
        <h4>{text}</h4>
        <div className="Section-Card-Tag">
          <div id="tag">
            {tags.map((tag, index) => {
              return <Tag name={tag} key={index} />;
            })}
          </div>
          <div className="deleteImg" onClick={() => handleDelete(index)}>
            <img src={deleteImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
