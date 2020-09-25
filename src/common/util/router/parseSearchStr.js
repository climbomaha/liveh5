
// 解析url查询字符串
export default function parseSearchStr(searchStr) {
    const ret = {}
    if (searchStr) {
        searchStr.replace('?', '').split('&')
            .forEach(item => {
                const arr = item.split('=')
                ret[arr[0]] = arr[1]
            })
    }

    return ret
}