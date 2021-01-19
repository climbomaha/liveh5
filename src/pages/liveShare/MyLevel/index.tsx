import React, { useState, useEffect } from "react";
import "./index.less";
import bottom from "./img/bottom.jpg";
import * as util from "../../../common/util";

const axios = util.axiosCreate({ setLoading: () => {} });

const MyLevel = (props: any) => {
  let [location] = util.useUrl();
  let [detail, setDetail]: any = useState({});

  useEffect(() => {
    document.title = "我的等级";
    axios
      .post(
        "/front/user/myLevel",
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
  const {
    levelIconUrl,
    currentLevel,
    nextLevel,
    currentExperience,
    nextLevelExperience,
    currenLevelExperience,
  } = detail;
  if(!levelIconUrl) {
    return <div></div>
  }
  return (
    <div className="$_my_level">
      <img className="level_icon" src={levelIconUrl} />
      <p className="info">经验值：{currentExperience}</p>
      <p className="info">升级差：{nextLevelExperience - currentExperience}</p>
      <div className="bar">
        <div
          className="pro"
          style={{
            width: `${
              ((nextLevelExperience - currentExperience) / (
                nextLevelExperience - currenLevelExperience
              )) *
              100
            }%`,
          }}
        />
        <p className="left">Lv{currentLevel}</p>
        <p className="right">Lv{nextLevel}</p>
      </div>
      <img className="btm" src={bottom} />
    </div>
  );
};
export default MyLevel;
