import './Button.css'

// eslint-disable-next-line react/prop-types
function Button ({ children }) {
    return (
        <button className='gradient-button'>
            {children}
        </button>
    )
}

export default Button