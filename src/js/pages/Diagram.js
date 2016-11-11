import React from "react";

import C3Chart from "c3-react";

import * as DiagramActions from "../actions/DiagramActions";
import DiagramStore from "../stores/DiagramStore";

export default class Diagram extends React.Component {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.state = {
            data: DiagramStore.getData(),
            type: 'line',
            options: {
                padding: {
                    top: 32,
                    bottom: 32,
                    left: 32,
                    right: 32
                },
                size: {
                    height: 600
                },
                //subchart: true,
                zoom: false,
                grid: {
                    x: false,
                    y: true
                },
                axisLabel: {
                    x: 'x-Achse',
                    y: 'y-Achse'
                }
            }
        };
    }

    componentWillMount() {
        DiagramStore.on("change", this.getData);
    }

    componentWillUnmount() {
        DiagramStore.removeListener("change", this.getData);
    }

    getData() {
        this.setState({data: DiagramStore.getData()});
    }

    loadData() {
        console.log("Diagram.loadData fired");
        DiagramActions.loadData();
    }

    render() {
        const {data, type, options} = this.state;
        return (
            <div>
                <C3Chart data={data} type={type} options={options}/>
                <button onClick={this.loadData.bind(this)}>Lade neue Daten</button>
            </div>
        );
    }
}
