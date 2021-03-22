export interface post {
	id: string;
	created_at: string;
	updated_at: string;
	promoted_at: null;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: null;
	alt_url:string;
	urls:Url;
	links:Link;
	categories:[];
	likes:number;
	liked_by_user:boolean;
	current_user_collection:[];
	sponsership:SponserShip
}
interface Url {
	raw:string;
	full:string;
	regular:string;
	small:string;
	thumb:string;
}
interface Link{
	self:string;
	html:string;
	download:string;
	download_location:string;
}
interface SponserShip {
	impression_urls:[];
	tagline:string;
	tag_url:string;
	sponser:Sponser;
	user:User;
}
interface Sponser {
	id:string;
	updated_at:string;
	user_name:string;
	name:string;
	first_name:string;
	last_name:null;
	twitter_username:string;
	portfolio_url:string;
	bio:string;
	location:null;
	links:LinkProfile;
	profile_image:Profile;
	instagram_username:string;
	total_collections:number;
	total_likes:number;
	total_photos:number;
	accepted_tos:boolean;
}
interface LinkProfile{
	self:string;
	html:string;
	photos:string;
	likes:string;
	portfolio:string;
	following:string;
	followers:string;
}
interface Profile{
	small:string;
	medium:string;
	large:string;
}
interface User {
	id:string;
	updated_at:string;
	username:string;
	name:string;
	first_name:string;
	last_name:string;
	twitter_username:string;
	portfolio_url:string;
	bio:string;
	location:null;
	links:LinkProfile
	profile_image:Profile;
	instagram_username:string;
	total_collections:number;
	total_likes:number;
	total_photos:number;
	accepted_tos:boolean;
}