import React, {useState} from "react";
import {token, canisterId, createActor} from "../../../declarations/token";
import {AuthClient} from "@dfinity/auth-client";


function Faucet() {

  const [isDisabled, setisDisabled] = useState(false)
  const [buttonText, setbuttonText] = useState("Claim")

  async function handleClick(event) {
    setisDisabled(true)

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    const authenticatedCansiter = await createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    
    setbuttonText(await authenticatedCansiter.payOut())

  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Playmakr tokens here! Claim 1000 PLAY token to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled = {isDisabled}>
        {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
