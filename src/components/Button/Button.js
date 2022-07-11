import '../App.scss'

function Button({title, type, disabled=true, className}){
    return (
        <button disabled={disabled} type={type} className={className}>{title}</button>
    )
}

export default Button;