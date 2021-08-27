// desktop image
import WomanDesktop from 'assets/images/illustration-woman-online-desktop.svg';
import BoxDesktop from 'assets/images/illustration-box-desktop.svg';

// mobile image
import WomanMobile from "assets/images/illustration-woman-online-mobile.svg";

import Fade from "react-reveal/Fade";
import Content from 'components/Content';
import { useState } from "react";

const Container = ({ faq }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedFaq = faq.map((e, index) => {
      const showAnswer = index === activeIndex ? "show-answer" : "";
      const questionBold = index === activeIndex ? "question-bold" : "";
      const ariaExpanded = index === activeIndex ? "true" : "false";

      return (
         <Content
         showAnswer={showAnswer}
         questionBold={questionBold}
         ariaExpanded={ariaExpanded}
         item={e}
         index={index}
         key={index}
         onClick={() => {setActiveIndex(index)}}
         />
      )
    })

    return (
      <Fade bottom>
        <div className="container">
          <div className="illustration">
            <div className="illustration__desktop">
              <Fade bottom>
                <img className="illustration__desktop__box" src={BoxDesktop} alt="box" />

                <img className="illustration__desktop__woman" src={WomanDesktop} alt="woman online" />
              </Fade>
              {/* <img className="illustration__desktop__shadow" src={ShadowDesktop} alt="shadow" /> */}
            </div>

            <div className="illustration__mobile">
              <img className="illustration__mobile__woman" src={WomanMobile} alt="woman online" />
            </div>
          </div>
          <div className="content">
            <div className="content__header">
              <h1>FAQ</h1>
            </div>
            {renderedFaq}
          </div>
        </div>
      </Fade>
    );
}

export default Container