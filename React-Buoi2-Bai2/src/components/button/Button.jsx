import "./Button.css"
export default function Button(props){
    console.log(props);
    return <button className={`btn btn-${props.type}`}>
        {props.children}
        </button>;
}