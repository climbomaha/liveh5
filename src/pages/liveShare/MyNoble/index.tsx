import React, { useEffect } from "react";
import "./index.less";
import back from "./img/back.jpg";

const MyNoble = (props: any) => {
  
  useEffect(() => {
    document.title = "我的贵族";
  },[])
  return (
    <div className="$_my_noble">
      <img className="back" src={back} />
      
    </div>
  );
};
export default MyNoble;
