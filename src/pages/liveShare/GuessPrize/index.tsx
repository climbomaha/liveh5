import React from "react";
import "./index.less";
import back from "./img/back.png";
import redpack from "./img/redpack.png";
import money from "./img/money.png";
const GussPrice = (props: any) => {
  return (
    <div className="$_guess_price">
      <img className='back' src={back} />
      <div className="oper">
        <img className='redpack' src={redpack}/>
        <img className='money' src={money}/>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn to_copy">复制</p>
        </div>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn">已使用</p>
        </div>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn">已使用</p>
        </div>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn">已使用</p>
        </div>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn">已使用</p>
        </div>
        <div className="item">
          <p className="num">87997</p>
          <p className="num_btn">已使用</p>
        </div>

        <div className="btn_gray btn_text"> 获取邀请码 </div>
        {/* <div className='btn_active btn_text'> 获取邀请码 </div> */}
      </div>
      <div className='info'>
        <p>活动规则</p>
        <p>
          1、只有拥有邀请码的 用户才能进入本平台； 
          2、每个邀请码只能使用一次；</p>
      </div>
    </div>
  );
};
export default GussPrice;
