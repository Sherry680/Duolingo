import Sidebar from "./sidebar";
import german from '../images/49716.jpg';
import prof from '../images/User-icon.png';
import spanish from '../images/spanish culture.jpg';

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
                profImag={prof}
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
                    <Card title="Spanish" source={german} />
                    <Card title="German" source={spanish}/>
                    <Card title="Spanish" source={german} />
                    <Card title="German" source={spanish}/>
                    <Card title="Spanish" source={german} />
                    <Card title="German" source={spanish}/>
                    <Card title="Spanish" source={german} />
                    <Card title="German" source={spanish}/>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;