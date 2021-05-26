import React from "react";
import { Categories } from "./Categories/Categories";
import { Clients } from "./Clients/Clients";
import { Video } from "./Video/Video";
type Props = {
	setNav: (value: boolean) => void;
};
export const Work = ({ setNav }: Props) => {
	setNav(false);

	return (
		<div>
			<Video />
			<Clients />
			<Categories />
		</div>
	);
};
