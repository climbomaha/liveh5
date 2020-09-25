
import parseSearchStr from "./parseSearchStr";

const getSearchParams = (history) => {
    return parseSearchStr(history.location.search);
}

export default getSearchParams