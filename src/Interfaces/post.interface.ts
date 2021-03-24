export interface IPost {
	id: string;
	created_at: string;
	updated_at: string;
	promoted_at: null;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: null;
	alt_description:string;
	urls:IUrl;
	links:ILink;
	categories:[];
	likes:number;
	liked_by_user:boolean;
	current_user_collection:[];
	sponsership:ISponserShip;
	user:IUser;
}
interface IUrl {
	raw:string;
	full:string;
	regular:string;
	small:string;
	thumb:string;
}
interface ILink{
	self:string;
	html:string;
	download:string;
	download_location:string;
}
interface ISponserShip {
	impression_urls:[];
	tagline:string;
	tag_url:string;
	sponser:ISponser;
}
interface ISponser {	
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
	links:ILinkProfile;
	profile_image:IProfile;
	instagram_username:string;
	total_collections:number;
	total_likes:number;
	total_photos:number;
	accepted_tos:boolean;
	for_hire:boolean;
}
interface ILinkProfile{
	self:string;
	html:string;
	photos:string;
	likes:string;
	portfolio:string;
	following:string;
	followers:string;
}
interface IProfile{
	small:string;
	medium:string;
	large:string;
}
interface IUser {
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
	links:ILinkProfile
	profile_image:IProfile;
	instagram_username:string;
	total_collections:number;
	total_likes:number;
	total_photos:number;
	accepted_tos:boolean;
	for_hire:boolean;
}