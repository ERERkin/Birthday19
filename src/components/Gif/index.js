import "./gif.css"; 

export default function Gif() {

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/gif', true, /\.(|MOV|mp4|gif)$/));
    console.log(images[0].default);
    return (
        <div className="gif__container">
            {images.map((item, index)=>{
                return <img className="gif" key={index} src={item.default} alt="Lol" />
            })}
        </div>
    )
}