import React from "react";
import "./index.less";
import back from "./img/back.png";
import redpack from "./img/redpack.png";
import money from "./img/money.png";
import { useState, useEffect } from "react";
import { Tabs } from "zarm";
import * as util from "../../../common/util";
const axios = util.axiosCreate({ setLoading: () => {} });

const GussPrice = (props: any) => {
  let [location] = util.useUrl();
  let [detail, setDetail]: any = useState({});

  useEffect(() => {
    document.title = "我的等级";
    axios
      .post(
        "/front/user/myInviteCode",
        {},
        {
          headers: {
            token: location.query.t,
          },
        }
      )
      .then((ret: any) => {
        setDetail(ret.data);
      });
  }, []);
  if (!detail.list) {
    return <div></div>;
  }
  return (
    <div className="$_guess_price">
      <img className="back" src={back} />
      <div className="oper">
        <img className="redpack" src={redpack} />
        <img className="money" src={money} />
        {detail.list.map((item: any) => {
          return (
            <div className="item">
              <p className="num">{item.code}</p>
              {item.used ? (
                <p className="num_btn">已使用</p>
              ) : (
                <p className="num_btn to_copy"
                onClick={() => {
                  util.copyText(item.code, () => {
                    alert('复制成功')
                  })
                }}
                >复制</p>
              )}
            </div>
          );
        })}
        {detail.create ? (
          <div className="btn_active btn_text"> 获取邀请码 </div>
        ) : (
          <div className="btn_gray btn_text"> 获取邀请码 </div>
        )}
      </div>
      <div className="info">
        <p>活动规则</p>
        <p>
          1、只有拥有邀请码的 用户才能进入本平台； 2、每个邀请码只能使用一次；
        </p>
      </div>
    </div>
  );
};
export default GussPrice;
