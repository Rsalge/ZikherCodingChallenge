import React from "react";
import getToken from "../photos/getToken.png";
import getTokenEmpty from "../photos/getTokenEmpty.png";
import scopes from "../photos/scopes.png";

const TokenDirections = () => {
  return (
    <div>
      <h4>Follow the below instructions to obtain a Spotify Access Token</h4>
      <div>
        <div classname="instructions">
          1. Follow this{" "}
          <a href="https://beta.developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset=">
            link
          </a>
        </div>
        <div classname="instructions">
          <p>2. Scoll down and select Get Token</p>
          <img src={getTokenEmpty} style={{ maxWidth: "60vw" }} />
        </div>
        <div classname="instructions">
          <p>3. Then select "Request Token", no scopes are required</p>
          <img src={scopes} style={{ maxWidth: "60vw" }} />
        </div>
        <div classname="instructions">
          <p>4. Copy the generated Access Token</p>
          <img src={getToken} style={{ maxWidth: "60vw" }} />
        </div>
        <div classname="instructions">
          <p>
            5. Navigate back to this app and paste the token above and Submit
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenDirections;
