import dispatcher from "../dispatcher";
import axios from "axios";

export function loadData() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  console.log("Fordere Daten an");
  dispatcher.dispatch({
    type: "FETCH_DIAGRAM_DATA"
  });
  axios.get("http://localhost:80/randomData/1d/").then((returnData) => {
    console.log("Daten geladen!", returnData.data);
    dispatcher.dispatch({
      type: "RECEIVE_DIAGRAM_DATA",
      data: [{
        source: 'DataSource1',
        values: returnData.data
      }]
    });
  })
}
