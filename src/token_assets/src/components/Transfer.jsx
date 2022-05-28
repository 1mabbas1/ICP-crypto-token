import React, {useState} from "react";
import {token} from "../../../declarations/token";
import Principal from "/home/abbas/ic-projects/token/node_modules/@dfinity/principal/lib/cjs/index.js";



function Transfer() {

  const [recipientID, setId] = useState("")
  const [amount, setamount] = useState("")
  const [isDisabled, setisDisabled] = useState(false)
  const [feedback, setfeedback] = useState("")

  async function handleClick() {
    setisDisabled(true)
    const recipient = Principal.fromText(recipientID)
    const transferAmount = Number(amount)
    const result = await token.transfer(recipient, transferAmount);
    setfeedback(result)
    setisDisabled(formatDiagnosticsWithColorAndContext)

  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value = {recipientID}
                onChange = {(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value = {amount}
                onChange= {(e) => setamount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled = {isDisabled}>
            Transfer
          </button>
        </p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
