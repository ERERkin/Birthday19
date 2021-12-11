import "./video.css"; 

export default function Video() {

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/video', true, /\.(|MOV|mp4)$/));
    return (
        <div className="video__container">
            {images.map((item, index)=>{
                return <video className="video" key={index} src={item.default} controls/>
            })}
        </div>
    )
}