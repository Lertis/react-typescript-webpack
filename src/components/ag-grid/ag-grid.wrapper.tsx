import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import grid from "../../api/grid";
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class AgGridWrapper extends React.Component<{}, { rowData: any }> {
	constructor(props: {}) {
		super(props);
		this.state = {
			rowData: []
		};
	}

	async componentDidMount() {
		const gridInfo$ = await grid.get(`rowData.json`);
		this.setState({ rowData: gridInfo$.data });
	}

	render() {
		return (
			<div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
				<AgGridReact
					rowData={this.state.rowData}>
					<AgGridColumn field="make" sortable={true}></AgGridColumn>
					<AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
				</AgGridReact>
			</div>
		);
	}
}
