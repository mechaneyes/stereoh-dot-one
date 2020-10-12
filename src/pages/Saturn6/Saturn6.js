import React from "react";

import CarouselHero from "../../components/atoms/CarouselHero/CarouselHero";
// import EventInfo from "../../components/atoms/EventInfo/EventInfo";
import Button from "../../components/atoms/Button/Button";
import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "../../components/molecules/RelatedItems/RelatedItems.scss";
import "../../components/atoms/EventInfo/EventInfo.scss";
import "./Saturn6.scss";

// import Button from "../../components/atoms/Button/Button";
// import "./EventInfo.scss";
const imgPath = process.env.PUBLIC_URL + "/assets/";

const eventInfo = {
  title: "Saturn 6",
  coming: "Launching Friday, October 02",
  subHeadline: "Cybernetic techno factory for the robo-funk bots",
  description:
    "Stereoh is welcoming Heidi Sabertooth and R.Gamble to the inaugural Saturn6 party. They will be broadcasting an icy mix of no-wave, electro punk, and analog techno straight into the cavernous confines of the deep space cybernetic factory.",
  btnUrl: "https://space.stereoh.one/suJFdn4/saturn6-v21",
  btnTxt: "enter saturn 6",
  // btnTxt: "coming soon",
  targetBlank: "true",
  buttonUse: "enter-space",
};

const Saturn6 = () => {
  // let [isBefore, setBefore] = useState(true);

  document.title = "Stereoh | Saturn 6";

  // Countdown
  // // Set the date we're counting down to
  // var countDownDate = new Date("Oct 2, 2010 21:00:00").getTime();

  // // Update the count down every 1 second
  // var x = setInterval(function () {
  //   // Get today's date and time
  //   var now = new Date().getTime();

  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;

  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   if (document.getElementById("countdown") != null) {
  //     document.getElementById("countdown").innerHTML =
  //       hours + "h " + minutes + "m " + seconds + "s ";

  //     // If the count down is finished, write some text
  //     if (distance < 0) {
  //       clearInterval(x);
  //       setBefore(false)
  //     }
  //   }
  // }, 1000);

  return (
    <div className="single saturn6">
      <section className="event-hero">
        <img
          className="home-hero-img"
          src={imgPath + "saturn6_001.jpg"}
          alt="Bassline Basin hero"
        />
        <div className="gradient"></div>
      </section>
      <section className="copy-top">
        {/* <EventInfo {...eventInfo} /> */}
        <div className="event-info">
          <h1>{eventInfo.title}</h1>
          {/* <h2 className="disclaimer">{eventInfo.coming}</h2> */}
          <h5>{eventInfo.subHeadline}</h5>
          <div className="event-body">
            <p>{eventInfo.description}</p>
          </div>
          <div className="cta-container">
            {/* {(isBefore) ? <a className="hide-me"></a>  : <Link to="/octtwo"><button>Enter Saturn6</button></Link>}
            <div className={`count-container ${(isBefore) ? '' : 'hide-me'}`}>
              Launching in <div id="countdown"></div>
            </div> */}

            <Button
              buttonUse="enter-space"
              btnUrl={eventInfo.btnUrl}
              btnTxt={eventInfo.btnTxt}
              targetBlank={eventInfo.targetBlank}
            />
          </div>
        </div>
      </section>

      <CarouselHero headline="Saturn 6" />

      <img className="home-flyer" src={imgPath + "launch2020.10.02.jpg"} alt="flyer" />
      <img className="home-flyer" src={imgPath + "tutorial_01.jpg"} alt="faq 01" />
      <img className="home-flyer" src={imgPath + "tutorial_02.jpg"} alt="faq 02" />
      <img className="home-flyer" src={imgPath + "tutorial_03.jpg"} alt="faq 03" />

      <RelatedItems hide="saturn6" />
    </div>
  );
};

export default Saturn6;
