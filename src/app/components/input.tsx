import {tv} from "tailwind-variants";
import type { ChangeEventHandler } from "react";

const inputVariants = tv({
    base:"w-full rounded-sm bg-[#d8d2c3] p-2 text-sm outline-none placeholder:text-[#7c7567]"

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