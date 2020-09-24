import axiosCreate from "./axiosCreate";

const setGlobalLoading = () => {};
const removeLoading = () => {};
let xhrNum = 0;
const fixLoading = (loading: any) => {
  if (loading) {
    xhrNum++;
  } else {
    xhrNum--;
  }
  if (xhrNum > 0) {
    setGlobalLoading();
  } else {
    removeLoading();
  }
};

const aimsAxiosLoading = axiosCreate({
  setLoading: fixLoading,
});

export default aimsAxiosLoading;
