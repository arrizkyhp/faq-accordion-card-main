
const Content = ({ item, index, onClick, showAnswer, questionBold, ariaExpanded }) => {

    return (
      <div className="content__main">
        <div className="content__main__accordion" key={index}>
          <button className={`content__main__accordion__question ${questionBold}`} onClick={onClick} aria-expanded={ariaExpanded} aria-controls={`accordion${index+1}`}>
            {item.question}
          </button>
          <div className={`content__main__accordion__answer ${showAnswer}`} id={`accordion${index+1}`}>
            <p> {item.answer} </p>
          </div>
        </div>
      </div>
    );
}

export default Content;