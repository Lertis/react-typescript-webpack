import axios from "axios";
const BASE_URL = `https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/`;

export default axios.create({ baseURL: BASE_URL });
