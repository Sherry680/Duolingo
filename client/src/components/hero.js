import Sidebar from "./sidebar";



function Card ({title, source}){
    return(
        <div className="card">
            <img src={source} alt="hero card" />
            <h4>{title}</h4>
        </div>
    );
}

const Hero = () => {
    return ( 
        <div className="hero">
            <Sidebar
                profImag=""
                name="John Doe"
                username="johny"
                native="Swahili"
                learning="Finnish"
                streak="25"
            />
            <div className="main">
                <form action="/">
                    <input type="text" value="Search" />
                    <button type="submit">Search</button>
                </form>
                <div className="cards">
                    <Card title="Spanish" />
                    <Card title="German" />
                    <Card title="French" />
                    <Card title="Polish" />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;