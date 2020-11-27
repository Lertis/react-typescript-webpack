import React from 'react';
import renderer from "react-test-renderer"
import PersonDetail from '../person.info';

let USER_INFO = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
			lat: "-37.3159",
			lng: "81.1496"
		}
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
	company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
	}
}

describe("PersonDetail Component", () => {
	test("should be created", () => {
		let component = renderer.create(
			<PersonDetail detail={USER_INFO} nothingToShow={false}></PersonDetail>,
		);
		let detailsComponent = component.toJSON();
		expect(detailsComponent).toMatchSnapshot();
	});
});
