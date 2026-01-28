export default function StudentInfo(props){
    console.log(props); 
    
    return (<>
    <h1>{props.ht}</h1>
    <h1>{props.mssv}</h1>
    <h1>{props.lop}</h1>
    </>)
}