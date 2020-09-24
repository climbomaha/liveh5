import React, { useState } from "react";
import aimsAxiosLoading from "../aimsAxiosLoading";

export interface AxiosDataConfig {
  type: "get" | "post";
}

export default function useAxiosData(
  initData: any = {},
  api: string,
  axiosFunc: any = aimsAxiosLoading,
  config?: AxiosDataConfig
): [any, any, any] {
  let [axiosData, setAxiosData] = useState(initData);
  const { type } = config || {
    type: "get",
  };

  let updateAxiosData = (params = {}, callback: any, onError: any) => {
    if (type === "get") {
      axiosFunc
        .get(api, {
          params: params,
        })
        .then((ret: any) => {
          if (callback) {
            callback(ret);
          } else {
            console.log();
            setAxiosData(ret.data);
          }
          //callback && callback(ret)
        }, onError);
    }

    if (type === "post") {
      axiosFunc.post(api, params).then((ret: any) => {
        if (callback) {
          callback(ret);
        } else {
          setAxiosData(ret.data);
        }
        //callback && callback(ret)
      }, onError);
    }
  };
  return [axiosData, updateAxiosData, setAxiosData];
}
