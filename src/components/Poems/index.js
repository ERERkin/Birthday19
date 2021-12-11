
import "./poems.css"; 
import { poems } from "../../assets/poems";

export default function Poems() {

    return (
        <div className="poems__container">
            {poems.map((item, index) => {
                return <div key={index} className="poems">{item}</div>
            })}
        </div>
    )
}