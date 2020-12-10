import { AgGridColumn, AgGridReact } from "@ag-grid-community/react";
import React from "react";
import grid from "../../api/grid";
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { AllModules, GetMainMenuItemsParams, Module, ModuleRegistry } from '@ag-grid-enterprise/all-modules';

ModuleRegistry.registerModules(AllModules);
export default class AgGridWrapper extends React.Component<{}, { rowData: any }> {
	private readonly modules: Module[] = AllModules;
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

	getMainMenuItems = (params: GetMainMenuItemsParams) => {
		return params.defaultItems;
	};

	render() {
		return (
			<div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
				<AgGridReact
					modules={this.modules}
					rowData={this.state.rowData}
					allowContextMenuWithControlKey={true}
					suppressContextMenu={false}
					getMainMenuItems={params => this.getMainMenuItems(params)}>
					<AgGridColumn field="make" sortable={true}></AgGridColumn>
					<AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
				</AgGridReact>
			</div>
		);
	}
}
