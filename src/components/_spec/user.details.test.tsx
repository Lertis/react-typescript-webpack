import React from 'react';
import renderer from "react-test-renderer"
import { shallow } from 'enzyme';
import PersonDetail from '../person.info';
import { cloneDeep } from "lodash";
import { USER_INFO_1, USER_INFO_2 } from "./user.details.set";
import "./../../setupTests";

describe("PersonDetail Component", () => {
	it(`should be created with: with userDetails and nothingToShow as false`, () => {
		let component = renderer.create(
			<PersonDetail detail={cloneDeep(USER_INFO_1)} nothingToShow={false}></PersonDetail>,
		);
		let detailsComponent = component.toJSON();
		expect(detailsComponent).toMatchSnapshot();
	});

	it('[Method: anyUserDetails]', () => {
		const wrapper = shallow(<PersonDetail detail={cloneDeep(USER_INFO_1)} nothingToShow={false}></PersonDetail>);
		const instance = wrapper.instance();
		const res = (instance as any).anyUserDetails();
		expect(res).toMatchSnapshot();
	});

	it('componentWillReceiveProps', () => {
		const component = shallow(<PersonDetail detail={cloneDeep(USER_INFO_1)} nothingToShow={false}></PersonDetail>);
		component.setProps({
			detail: cloneDeep(USER_INFO_2)
		});
		expect(component).toMatchSnapshot();
		expect(component).toBeTruthy();
	})
});
