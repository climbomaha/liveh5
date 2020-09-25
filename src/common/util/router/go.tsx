import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
const parseSearchStr = (searchStr: any) => {
    const ret: any = {}
    if (searchStr) {
        searchStr.replace('?', '').split('&')
            .forEach((item: any) => {
                const arr = item.split('=')
                ret[arr[0]] = decodeURIComponent(arr[1])
            })
    }
    return ret
}

const go = (path: string = '/', query: any = {}, isReplace: boolean) => {
    let history = useHistory();
    let queryUrl = ''
    Object.keys(query).map((key: any) => {
        queryUrl += `${key}=${encodeURIComponent(query[key])}&`
    })
    if (queryUrl) {
        queryUrl = '?' + queryUrl.slice(0, queryUrl.length - 1);
    }
    if (isReplace) {
        history.replace(path + queryUrl);
    } else {
        history.push(path + queryUrl);
    }
}

export default go
