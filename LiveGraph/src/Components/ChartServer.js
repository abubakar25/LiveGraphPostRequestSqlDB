import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function ChartServer(props) {
  console.log(props.dataState);

  const [state, setState] = useState({
    chartOptions: {
      series: [
        {
          data: props.dataState,
        },
      ],
    },
  });

  useEffect(() => {
    setState({
      chartOptions: {
        series: [
          {
            //   data: [
            //     { x: 1, y: 3 },
            //     { x: 2, y: 3 },
            //     { x: 5, y: 12 },
            //   ],
            data: props.dataState,
          },
        ],
      },
    });
  }, [props.dataState]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={state.chartOptions} />
    </div>
  );
}

export default ChartServer;
