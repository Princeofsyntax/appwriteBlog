import React, { useId } from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* we get array from options so we perform loop operation using map; ALSO option may not contain any value so we perform conditional operations */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

// As select is made seperately so we have to use forward reference hook
// Another way to perform forward reference is provided below
export default React.forwardRef(Select)