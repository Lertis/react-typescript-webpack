import { ICellRendererComp } from "@ag-grid-community/all-modules";
import { AgGridColumnProps } from "@ag-grid-community/react";
import React, { Component } from 'react';

export default class CurrencyRenderer extends Component<AgGridColumnProps, { value: number }> {
	constructor(props: any) {
		super(props);

		this.state = {
			value: props.value,
		};
	}

	formatValueToCurrency(currency: any, value: any) {
		return `${currency}: ${value.toFixed(2)}`;
	}

	// noinspection JSUnusedGlobalSymbols
	refresh(params: any) {
		if (params.value !== this.state.value) {
			this.setState({
				value: params.value,
			});
		}
		return true;
	}

	render() {
		return <span>{this.formatValueToCurrency('EUR', this.state.value)}</span>;
	}
}
