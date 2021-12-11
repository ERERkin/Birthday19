import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./gallery.css"
export default function Gallery() {
    
    let { id } = useParams();
    id = Number(id);

    function importAll(r) {
        return r.keys().map(r);
    }

    const allImages = importAll(require.context('../../assets/img', true, /\.(png|jpe?g|svg)$/));

    function chunkArray(array, chunk) {
        const newArray = [];
        for (let i = 0; i < array.length; i += chunk) {
            newArray.push(array.slice(i, i + chunk));
        }
        return newArray;
    }

    const res = chunkArray(allImages, 30);


    return (
        <div className="gallery__main">

               <div className="pages">
                {res.map((item, index)=>{
                    return <NavLink  key={index} className="btn btn-outline-primary" to={`/gallery/` + index} >{index + 1}</NavLink>
                })}
            </div>


            <div className="gallery">
                {res[id].map((item, index) => {
                    return <img className="gallery_img" key={index} src={item.default} alt="" />
                })}
            </div>

            <div className="pages-bottom pages">
                {res.map((item, index)=>{
                    return <NavLink className="btn btn-outline-primary" key={index} to={`/gallery/` + index} >{index + 1}</NavLink>
                })}
            </div>
        </div>
    )
}