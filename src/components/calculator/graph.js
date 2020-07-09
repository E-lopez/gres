import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme  } from 'victory';
import calcStyles from "../../style/calculator.module.css"

function Graph(props)  {
    const [toGraph, setGraph] = useState([  {x: "", y: 8}, {x: "", y: 5}, 
                                            {x: "", y: 4}, {x: "", y: 9},
                                            {x: "", y: 1}, {x: "", y: 7},
                                            {x: "", y: 6}, {x: "", y: 3},])

    useEffect(() => {
        var data = props.data
        var temp = []

        Object.keys(data).map((index, i) => {
            return temp.push({x: index, y: parseInt(data[index])})
        })

        setGraph(temp)
    }, [props.data])
  
    return (
      <div className={calcStyles.graphWrap}>
          <VictoryChart 
                alignment="center" 
                domainPadding={20} 
                theme={VictoryTheme.material} 
                width={600} 
                height={400}>
            <VictoryAxis 
                label="Tipo"
                style={{axisLabel: { padding: 30 }}}  
            />
            <VictoryAxis
            dependentAxis
            label="Volumen em m3"
                style={{
                    ticks: {padding: -10},
                axisLabel: { padding: 50 }
                }} 
            tickFormat={(x) => (`${x}m3`)}
            />
            <VictoryBar data={toGraph} />
          </VictoryChart>
      </div>
    );
};

export default Graph;