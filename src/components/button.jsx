
export default function Button(props){
    return <div className={`orderButton hover:scale-110 transition-all text-center w-fit duration-300 mt-3 py-${props.py} px-4 text-white rounded-${props.rounded} bg-gradient-to-r from-primary to-secondary`}><button>{props.text}</button></div>
}