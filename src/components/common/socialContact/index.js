import React from 'react';
import { SocialData } from "../../data/social";
import "./socialContact.css";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="socialContact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      }
      )
      }
    </div>
  );
}

export default SocialContact;