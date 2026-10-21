import "./Section.css";
import DrageArea from "../DrageArea";

import Card from "../card/card";

function Section({
  title,
  taskArray,
  status,
  handleDelete,
  img,
  setActiveCard,
  onDrop,
}) {
  return (
    <div className="section">
      <div className="section-title">
        <h2>
          {img ? <img src={img} alt="" /> : null}
          {title}
        </h2>
      </div>
      <DrageArea onDrop={() => onDrop(status, 0)} />

      {taskArray.map((obj, index) => {
        return (
          obj.status == status && (
            <div key={index}>
              <Card
                text={obj.task}
                tags={obj.tags}
                key={index}
                index={index}
                handleDelete={handleDelete}
                setActiveCard={setActiveCard}
              />
              <DrageArea onDrop={() => onDrop(status, index + 1)} />
            </div>
          )
        );
      })}
    </div>
  );
}

export default Section;
