import classNames from "classnames";

function Button({ children, variant = 'default' }) {
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center": true,
            "bg-gray-100": variant === 'default',
            "bg-yellow-600 text-white": variant === 'warning',
            "bg-red-600 text-white": variant === 'danger',
            "bg-green-600 text-white": variant === 'success',
        })}>{children}</button>
    )
}

export default Button