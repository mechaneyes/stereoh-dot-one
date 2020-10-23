import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// import "./Countdown.scss";

let Countdown = (props) => {
  let [isBefore, setBefore] = useState(true);

  // Countdown
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 18, 2030 20:00:00").getTime();
  // console.log('countDownDate', countDownDate)

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("countdown") != null) {
      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setBefore(false);
      }
    }
  }, 1000);
  return (
    <div className="cta-container">
      {isBefore ? (
        <a className="hide-me"></a>
      ) : (
        <Link to="/verification">
          <button>Enter Bassline Reactor</button>
        </Link>
      )}
      <div className={`count-container ${isBefore ? "" : "hide-me"}`}>
        Launching in <div id="countdown"></div>
        <p>Look for the link here at the time of the event</p>
      </div>
    </div>
  );
};

export default Countdown;
