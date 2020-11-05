import React from "react";
import { Link } from "react-router-dom";

import RelatedItems from "../../components/molecules/RelatedItems/RelatedItems";
import "./CheatSheet.scss";

const CheetSheet = () => {
  document.title = "Stereoh | Cheat Sheet";

  return (
    <div className="single cheat-sheet">
      <section className="cheat-hero">
        {/* <img
          className="home-hero-img"
          src={"/assets/barclays.jpg"}
          alt="neonPlatform hero"
        /> */}
        <video className="video-bg" autoPlay muted loop>
          <source src="/assets/kingBat_0.1.1.mp4" type="video/mp4" />
        </video>
        <div className="cheat-hero-content">
          <h1>Cheat Sheet</h1>
          <p className="cheat-hero-subheadline">
            Interaction and navigation might not be the most intuitive to
            visitors. Below are some of the typical ways you can use to get
            around and interact with the app and others, as well as some more common
            issues people face the first time they enter one of our spaces. Have
            a look and enjoy exploring. There's more to discover inside.
          </p>
        </div>
        {/* <div className="gradient"></div> */}
      </section>

      <section className="the-cheats">
        <article>
          <h2>Platform Options</h2>
          <p>
            The experience is best on a desktop browser. But you can access this
            party via Chrome, Firefox, Edge, Safari on PC, Mac, iOS, Android or
            various VR headsets. Once inside you can just share the URL to
            invite friends.
          </p>
        </article>
        <article>
          <h2>Moving (PC/Mac)</h2>
          <p>
            Move through space using a combination of the{" "}
            <span className="ephasis">W, A, S, D (or arrow)</span> keyboard keys{" "}
            <span className="ephasis">and your mouse</span>.
          </p>
          <div className="wasd">
            <img
              className="wasd-img"
              src={"/assets/faq/wasd.png"}
              alt="illustration of wasd keys"
            />
            <ul>
              <li>
                <p>
                  <span className="ephasis">W:</span> Move Forward
                </p>
              </li>
              <li>
                <p>
                  <span className="ephasis">S:</span> Move Backward
                </p>
              </li>
              <li>
                <p>
                  <span className="ephasis">A:</span> Slide Left
                </p>
              </li>
              <li>
                <p>
                  <span className="ephasis">W:</span> Slide Right
                </p>
              </li>
              <li>
                <p>
                  <span className="ephasis">Left Mouse Button:</span> Look
                  Around
                </p>
              </li>
              <li>
                <p>
                  <span className="ephasis">Right Mouse Button:</span> Teleport
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <h2>Moving (Touch Screen / Mobile)</h2>
          <ul>
            <li>
              <p>Move: pinch (zoom)</p>
            </li>
            <li>
              <p>Rotate: drag single finger</p>
            </li>
            <li>
              <p>Extra menu: 2-finger tap</p>
            </li>
          </ul>
        </article>
        <article>
          <h2>Interacting</h2>
          <ul>
            <li>
              <p>
                You can talk to others (test your mic on loading screen) or send
                messages at the bottom of the screen
              </p>
            </li>
            <li>
              <p>
                The closer you are to someone the louder you’ll hear them, same
                with music - just like IRL!
              </p>
            </li>
            <li>
              <p>
                You can adjust music volume by pointing at the screen and
                clicking on “+ / -”{" "}
              </p>
            </li>
            <li>
              <p>
                You can create items via “magic wand” button on top of the
                screen, drag them with left mouse button
              </p>
            </li>
            <li>
              <p>
                You can take photos and short videos with a virtual camera via
                camera button on top center-right
              </p>
            </li>
          </ul>
        </article>
        <article>
          <h2>Avatars</h2>
          <p>
            Change your name and avatar appearance from menu in the upper left
            (multiple pages to choose from).
          </p>
        </article>
        <article>
          <h2>Webcams + Screen Sharing</h2>
          <p>
            You can share your webcam stream or do a screen-share by clicking on
            the leftmost camera button on top of the screen.
          </p>
          <p>
            Full list of controls and shortcuts:{" "}
            <a href="https://hubs.mozilla.com/docs/hubs-controls.html">
              https://hubs.mozilla.com/docs/hubs-controls.html
            </a>
          </p>

          <img
            className="interface"
            src={"/assets/faq/interface.png"}
            alt="interface"
          />
        </article>
        <article style={{ paddingTop: 20 + "px" }}>
          <h2>Mic Not Working?</h2>
          <p>
            In Chrome click on the lock to the left of address bar and check
            that microphone is allowed. This works almost the same way in Safari
            and Firefox. If it says denied or not allowed with an x next to it
            click on x to delete this setting. Reload the page and make sure to
            allow mic on the popup that appears when you select the mic.
          </p>
          <img
            className="interface"
            src={"/assets/faq/mic.png"}
            alt="interface"
          />
        </article>
      </section>

      {/* <RelatedItems relThree="true" /> */}
    </div>
  );
};

export default CheetSheet;
