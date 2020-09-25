

function getUrl(path: any) {
    let targets = {
        norm: (targetPath: string) => {
            return (args: any) => {
                let queryUrl = ''
                Object.keys(args).map((key: any) => {
                    queryUrl += `${key}=${encodeURIComponent(args[key])}&`
                })
                if (queryUrl) {
                    queryUrl = '?' + queryUrl.slice(0, queryUrl.length - 1);
                }
                return targetPath + queryUrl

            }
        }
    }
    let proxy = new Proxy(targets, {
        get(trapTarget, key, receiver) {
            return Reflect.get(trapTarget, 'norm', receiver)(path[key])
        }
    })
    return proxy
}


export default getUrl