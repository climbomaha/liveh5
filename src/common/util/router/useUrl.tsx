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
export const useUrl = (): [any, (path: string, query: any, isReplace?: boolean) => void, any] => {
    let history = useHistory();
    let pathName = history.location.pathname;
    
    
    const toNext = (path: string = pathName, query: any = {}, isReplace?: boolean) => {
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
    let location = { ...history.location };
    let thisQuery = parseSearchStr(history.location.search);
    Object.assign(location, {
        query: thisQuery,
    })

    const toUpdate = (query: any = {}, isPush?: boolean) => {
        toNext(undefined, Object.assign({}, thisQuery, query), !isPush)
    }
    


    return [location, toNext, toUpdate]
}

