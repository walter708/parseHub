import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  console.log(url);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setData(null);
  //   setError(null);
  //   console.log("value");
  //   // const source = axios.CancelToken.source();
  //   const asyncRequest = async () => {
  //     try {
  //       const { data } = await axios.get(url);

  //       console.log({ data });
  //       data && setData(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log({ error });
  //       setIsLoading(false);

  //       setError("An error occurred");
  //     }
  //   };

  //   asyncRequest();
  //   // return () => {
  //   //   source.cancel();
  //   // };
  // }, [url]);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    async function fetchData() {
      const result = await axios.get(url);
      setData(result.data);
    }
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
