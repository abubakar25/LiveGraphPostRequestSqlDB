import React, { useState, useContext, useEffect } from "react";
import { useHttpClient } from "../src/Hooks/http-hook";
import { AuthContext } from "../src/Hooks/auth-context";
import InputPoints from "./Components/InputPoints";
import PostDataForm from "./PostDataForm";
import ChartServer from "./Components/ChartServer";

function App() {
  // var fetchData = [];

  var fetchData;
  const [dataState, setDataState] = useState();
  const { sendRequest } = useHttpClient();
  const { token } = useContext(AuthContext);

  const getName = (state) => {
    const array = [...dataState];
    array.push(state);
    console.log(array);
    setDataState(array);
  };

  useEffect(async () => {
    try {
      fetchData = await sendRequest(
        "http://localhost:3001/ChartJsonArrayOfObject",
        "GET",
        null,
        {
          Authorization: "Bearer " + token,
        }
      );

      setDataState(fetchData);
      console.log(fetchData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {/* <PostDataForm /> */}

      <InputPoints getName={getName} />
      {dataState && <ChartServer dataState={dataState} />}
    </div>
  );
}

export default App;
