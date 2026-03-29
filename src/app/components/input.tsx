import {tv} from "tailwind-variants";

const inputVariants = tv({
    base:"w-full rounded-sm bg-[#d8d2c3] p-2 text-sm outline-none placeholder:text-[#7c7567]"

})
const Input = () => {
    return (
        <div>
            <input  className={inputVariants()}
             placeholder="Search...">
            </input>
        </div>
    )
};

export default Input;