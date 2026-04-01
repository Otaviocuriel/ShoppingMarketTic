import { useEffect, type RefObject } from "react";

export const useClickOutside = (
	ref: RefObject<HTMLElement>,	
	handler: (Params: unknown) => void,
) =>{
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);

		}
	}, [ref, handler]);
};
