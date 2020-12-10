import { AgGridColumn, AgGridReact } from "@ag-grid-community/react";
import React from "react";
import grid from "../../api/grid";
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { AllCommunityModules, GetMainMenuItemsParams, GridApi, GridReadyEvent, Module, ModuleRegistry } from '@ag-grid-enterprise/all-modules';
import CurrencyRenderer from "./renderers/currency.renderer";

ModuleRegistry.registerModules(AllCommunityModules);

type StateProps = {
	modules: Module[];
	context: { componentParent: AgGridWrapper },
	defaultColDef: {
		editable: boolean;
		sortable: boolean;
		flex: number;
		minWidth: number;
		filter: boolean;
		resizable: true,
	},
	columnDefs: {
		colId: string;
		headerName: string;
		field: string;
		width: number;
	}[],
	frameworkComponents: any,
	rowData: {
		make: string;
		model: string;
		price: number
	}[];
}
export default class AgGridWrapper extends React.Component<{}, StateProps> {
	private gridApi: GridApi | null = null;
	constructor(props: {}) {
		super(props);
		this.state = {
			modules: AllCommunityModules,
			context: { componentParent: this },
			defaultColDef: {
				editable: true,
				sortable: true,
				flex: 1,
				minWidth: 100,
				filter: true,
				resizable: true,
			},
			columnDefs: [{
				colId: 'make',
				headerName: 'make',
				field: 'make',
				width: 250
			},
			{
				colId: 'model',
				headerName: 'model',
				field: 'model',
				width: 250
			},
			{
				colId: 'price',
				headerName: 'price',
				field: 'price',
				width: 250
			}],
			frameworkComponents: {
				currencyRenderer: CurrencyRenderer
			},
			rowData: [],
		};
	}

	onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
	};

	async componentDidMount() {
		const gridInfo$ = await grid.get(`rowData.json`);
		this.setState({ rowData: gridInfo$.data });
	}

	getMainMenuItems = (params: GetMainMenuItemsParams) => {
		return params.defaultItems;
	};

	render() {
		return (
			<div className="ag-theme-alpine" style={{ height: 800, width: 800 }}>
				<AgGridReact
					frameworkComponents={this.state.frameworkComponents}
					modules={this.state.modules}
					rowData={this.state.rowData}
					defaultColDef={this.state.defaultColDef}
					allowContextMenuWithControlKey={true}
					suppressContextMenu={false}
					getMainMenuItems={params => this.getMainMenuItems(params)}
					onGridReady={params => this.onGridReady(params)}>
					<AgGridColumn field="make" sortable={true}></AgGridColumn>
					<AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
					<AgGridColumn field="price" sortable={true} filter={true} cellRenderer={"currencyRenderer"}></AgGridColumn>
				</AgGridReact>
			</div>
		);
	}
}
