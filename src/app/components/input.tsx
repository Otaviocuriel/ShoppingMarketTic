import {tv} from "tailwind-variants";
import type { ChangeEventHandler } from "react";

const inputVariants = tv({
    base:"w-full rounded-lg border border-[#cfc8b7] bg-[#f6f2e6] px-4 py-2.5 text-sm text-[#2f2f2f] outline-none transition focus:border-[#8d866f] focus:ring-2 focus:ring-[#8d866f]/20 placeholder:text-[#8b846f]"

});

type InputProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({onChange}: InputProps) => {
    return (
        <div>
            <input
              onChange={onChange}
              className={inputVariants()}
              placeholder="Search..."
            />
        </div>
    )
};

export default Input;