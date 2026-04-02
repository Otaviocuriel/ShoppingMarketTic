import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants"

const ListVariant = tv({
	variants: {
		variant: {
			primary: "flex rounded-md px-1 py-4 text-sm capitalize text-gray-700 hover:bg-gray-200"
		},
		
	},
	defaultVariants: {
			variant: "primary"
		},
});

type ListProps = ComponentProps<"li"> & VariantProps<typeof ListVariant>;


const List = ({children, className, onClick, variant, ...props}: ListProps) => {
	const ListClass = twMerge(ListVariant({variant}), className)

	return (
	 <li className={ListClass} onClick={onClick} {...props}>
		{children}
	</li>
	);
}

export default List;