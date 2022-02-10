import { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);
  // TODO: Know if there are pending request in axios -- https://stackoverflow.com/questions/44670782/know-if-there-are-pending-request-in-axios
  const sendRequest = useCallback(
    async (url, method = "GET", data = null, headers = {}) => {
      setIsLoading(true);
      // https://medium.com/datadriveninvestor/aborting-cancelling-requests-with-fetch-or-axios-db2e93825a36
      // https://stackoverflow.com/questions/57382537/cancelling-previous-api-requests-with-axios
      const CancelToken = axios.CancelToken.source();
      activeHttpRequests.current.push(CancelToken);

      try {
        const response = await axios({
          url,
          method,
          data,
          headers,
          cancelToken: CancelToken.token,
          timeout: 5000,
        });
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== CancelToken
        );
        setIsLoading(false);
        return response.data;
      } catch (error) {
        // https://stackoverflow.com/a/51768316
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          setError(<h4>{error.response.data.message}</h4>);
        } else if (error.request) {
          // The request was made but no response was received
          // console.log(error.request);
          setError(<h4>Timeout error, could not connect with Server</h4>);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error =============", error.message);
        }
        // if (axios.isCancel(error)) {
        //   return "axios request cancelled";
        // }
        // activeHttpRequests.current = activeHttpRequests.current.filter(
        //   (reqCtrl) => reqCtrl !== CancelToken
        // );
        // console.log("dsadas phnch rha=======================");
        // setError(error.response.data.message);
        setIsLoading(false);
        // console.log("dsadas phnch rha");

        throw error;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach((abortCtrl) => {
        abortCtrl.cancel("axios request cancelled");
      });
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
