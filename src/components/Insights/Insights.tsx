import React, { useEffect } from "react";
import { Categories } from "./Categories/Categories";
import { TopInfo } from "./TopInfo/TopInfo";

type Props = {
	setNav: (value: boolean) => void;
};

export const Insights = ({ setNav }: Props) => {
	useEffect(() => {
		setNav(false);
	}, []);

	return (
		<div>
			<TopInfo />
			<Categories />
		</div>
	);
};
