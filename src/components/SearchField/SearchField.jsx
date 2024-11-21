import "./SearchField.css"

export default function SearchField({onChange}){
    return(
        <input type ="text" placeholder = "Search" onChange={onChange} />
    )
}