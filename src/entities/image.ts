interface Urls {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
}

interface Links {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

interface Links2 {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

interface ProfileImage {
	small: string;
	medium: string;
	large: string;
}

interface User {
	id: string;
	updated_at: Date;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: string;
	portfolio_url: string;
	bio: string;
	location: string;
	links: Links2;
	profile_image: ProfileImage;
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
}

interface Type {
	slug: string;
	pretty_slug: string;
}

interface Category {
	slug: string;
	pretty_slug: string;
}

interface Subcategory {
	slug: string;
	pretty_slug: string;
}

interface Ancestry {
	type: Type;
	category: Category;
	subcategory: Subcategory;
}

interface Urls2 {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
}

interface Links3 {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

interface Links4 {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

export interface ProfileImage2 {
	small: string;
	medium: string;
	large: string;
}

interface User2 {
	id: string;
	updated_at: Date;
	username: string;
	name: string;
	first_name: string;
	last_name: string;
	twitter_username: string;
	portfolio_url: string;
	bio: string;
	location: string;
	links: Links4;
	profile_image: ProfileImage2;
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
}

interface CoverPhoto {
	id: string;
	created_at: Date;
	updated_at: Date;
	promoted_at?: Date;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string;
	alt_description: string;
	urls: Urls2;
	links: Links3;
	categories: any[];
	likes: number;
	liked_by_user: boolean;
	current_user_collections: any[];
	sponsorship?: any;
	user: User2;
}

interface Source {
	ancestry: Ancestry;
	title: string;
	subtitle: string;
	description: string;
	meta_title: string;
	meta_description: string;
	cover_photo: CoverPhoto;
}

interface Tag {
	type: string;
	title: string;
	source: Source;
}

export interface IImage {
	id: string;
	created_at: Date;
	updated_at: Date;
	promoted_at?: Date;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string;
	alt_description: string;
	urls: Urls;
	links: Links;
	categories: any[];
	likes: number;
	liked_by_user: boolean;
	current_user_collections: any[];
	sponsorship?: any;
	user: User;
	tags: Tag[];
}
