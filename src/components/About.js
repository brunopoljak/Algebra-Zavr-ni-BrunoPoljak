import "./Chat.css";
import phone from "./mobile_friendly_FILL0_wght400_GRAD0_opsz48.svg";
import computer from "./ux.png";
const About = () => {
  return (
    <div className="wrap">
      <div className="wrap-one">
        <h1>Acess on your mobile app and your PC</h1>
      </div>
      <div className="wrapper">
        <div className="wrapper-one">
          <img src={phone} width="200" height="200" />
          <h1>Mobile app</h1>
          <p>
            Our app is an encrypted messaging service for instant messaging,
            voice, and video calls. The instant messaging function includes
            sending text, voice notes, images, videos, and other files.
            Communication may be one-to-one between users, or for group
            messaging.
          </p>
        </div>
        <div className="wrapper-two">
          <img src={computer} width="200" height="200" />
          <h1>On your Pc</h1>
          <p>
            Our app is an encrypted messaging service for instant messaging,
            voice, and video calls. The instant messaging function includes
            sending text, voice notes, images, videos, and other files.
            Communication may be one-to-one between users, or for group
            messaging.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
