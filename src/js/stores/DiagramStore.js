import {
  EventEmitter
} from "events";

import dispatcher from "../dispatcher";

class DiagramStore extends EventEmitter {
  constructor() {
    super()
    this.data = [{
      key: 'DataSource1',
      values: [{
        "label": "0",
        "value": 100
      }, {
        "label": "1",
        "value": 300
      }, {
        "label": "2",
        "value": 300
      }, {
        "label": "3",
        "value": 400
      }, {
        "label": "4",
        "value": 300
      }, {
        "label": "5",
        "value": 300
      }, {
        "label": "6",
        "value": 200
      }, {
        "label": "7",
        "value": 300
      }, {
        "label": "8",
        "value": 500
      }, {
        "label": "9",
        "value": 300
      }]
    }];
  }

  getData() {
    return this.data;
  }

  handleActions(action) {
    switch (action.type) {
      case "RECEIVE_DIAGRAM_DATA":
        {
          this.data = action.data;
          this.emit("change");
          break;
        }
    }
  }

}

const diagramStore = new DiagramStore;
dispatcher.register(diagramStore.handleActions.bind(diagramStore));

export default diagramStore;
