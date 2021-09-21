import Tippy, { TippyProps } from "@tippyjs/react";
import { forwardRef } from "react";
import "./tooltip.css";

type Props = TippyProps;

const container = document.getElementById("portal");
if (container === null) throw Error(`#portal is null`);

// https://www.nngroup.com/articles/timing-exposing-content/
const timing: TippyProps = {
	delay: [500, 300],
	duration: [100, 100],
};

export const TooltipSource = (
	props: Pick<TippyProps, "singleton">
): JSX.Element => (
	<Tippy
		{...timing}
		appendTo={container}
		moveTransition="transform 300ms ease-out"
		{...props}
	/>
);

export const Tooltip = forwardRef<Element, Props>(
	(props, ref): JSX.Element => (
		<Tippy
			{...timing}
			arrow={false}
			offset={[0, 8]}
			appendTo={container}
			ref={ref}
			{...props}
		/>
	)
);