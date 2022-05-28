import React, {useState} from "react";
import {Principal} from "@dfinity/principal";
import {token} from "../../../declarations/token";

function Balance() {

  const [inputValue, setinputValue] = useState("")
  const [balanceResult, setbalanceResult] = useState("")
  const [symbol, setsymbol] = useState("")
  const [isHidden, setisHidden] = useState(true);

  async function handleClick() {
    const principal = Principal.fromText(inputValue)
    const balance = await token.balanceOf(principal)
    
    setisHidden(false)
    setbalanceResult(balance.toLocaleString());
    setsymbol( await token.getSymbol())
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value = {inputValue}
          onChange = {(e)=> setinputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden = {isHidden}> This account has a balance of {balanceResult} {symbol}</p>
    </div>
  );
}

export default Balance;
