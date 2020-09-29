import React, { useEffect } from "react";
import startBridge from "../../common/util/bridge";
const TestBridge = (props: any) => {
  return (
    <div>
      <button
        onClick={() => {
          startBridge("getData", {
            type: "userInfo",
          }).then((ret) => {
            alert(JSON.stringify(ret));
          });
        }}
      >
        测试getData userInfo
      </button>
      <br />
      <button
        onClick={() => {
          startBridge("getData", {
            type: "device",
          }).then((ret) => {
            alert(JSON.stringify(ret));
          });
        }}
      >
        测试getData device
      </button>
    </div>
  );
};

export default TestBridge;
