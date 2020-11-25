export interface IGeo {
	lat: string;
	lng: string;
}

export interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: IGeo;
}

export interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}

export const NO_INFO_USER_INFO: IUser = {
	id: 0,
	name: "",
	username: "",
	email: "",
	address: {
		street: "",
		suite: "",
		city: "",
		zipcode: "",
		geo: {
			lat: "",
			lng: ""
		}
	},
	phone: "",
	website: "",
	company: {
		name: "",
		catchPhrase: "",
		bs: "",
	}
};
