import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "./state/index"
const Shop = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="container my-4 mx-auto">
        <h2 className="mb-3">Your bank balance</h2>
        <button className="btn btn-primary me-2 fs-4" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>--</button>
        Buy this item
        <button className="btn btn-primary ms-2 fs-4" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
      </div>
    </>
  );
};

export default Shop;
