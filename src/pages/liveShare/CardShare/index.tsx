import React from "react";
import "./index.less";

import numPng from "./num.png";
import { useState, useEffect } from "react";
import { Tabs } from "zarm";
import * as util from "../../../common/util";
import { ENV_IS_WX } from "../../../common/util/env";
import goPng from "./go.png";
const axios = util.axiosCreate({ setLoading: () => {} });

const CardShare = (props: any) => {
  let [location] = util.useUrl();
  let [detail, setDetail]: any = useState({});

  let [goMask, setGoMask] = useState(false);
  useEffect(() => {
    axios
      .post(
        "/front/home/sharePage",
        {
          userId: 1536,
        },
        {
          headers: {
            token: location.query.t,
          },
        }
      )
      .then((ret: any) => {
        setDetail(ret.data);
        document.title = ret.data.title;
      });
  }, []);

  const { appUrl, navUrl,coverUrl, nickName, inviteCode, title, watchCount } = detail;
  return (
    <div className="$_cardshare">
      {goMask && (
        <div onClick={() => {
          setGoMask(false)
        }} className="gomask">
          <img src={goPng} />
        </div>
      )}
      <div
        style={{
          backgroundImage: `url(${coverUrl})`,
        }}
        className="card"
      >
        <div className="name">
          <div
            style={{
              backgroundImage: `url(${coverUrl})`,
            }}
            className="name_card"
          />
          <p className="nick">{nickName}</p>
          <p className="num">
            <img src={numPng} />
            {watchCount}
          </p>
        </div>
      </div>
      <div className="btns">
        <div
          style={{
            margin: "auto",
            marginTop: "3.2rem",
            marginBottom: "1.7rem",
          }}
          onClick={() => {
            if (ENV_IS_WX) {
              setGoMask(true);
            } else {
              window.location.href = navUrl;
            }
          }}
        >
          在APP中打开他的直播
        </div>
        <div
          onClick={() => {
            if (ENV_IS_WX) {
              setGoMask(true);
            } else {
              window.location.href = appUrl;
            }
          }}
          style={{
            margin: "auto",
          }}
          className="btnb"
        >
          没有下载？立即下载皮皮猴
        </div>
      </div>
      <p className="code">邀请码：{inviteCode || "-"}</p>
      <p
        onClick={() => {
          util.copyText(inviteCode, () => {
            alert("复制成功");
          });
        }}
        className="tocopy"
      >
        一键复制
      </p>
    </div>
  );
};
export default CardShare;
