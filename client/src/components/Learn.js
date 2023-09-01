import Sidebar from "./sidebar";



function LearnCard ({thumbNail, title}) {
    return(
        <div className="card">
            <img src={thumbNail} alt="thumb" />
            <h3>{title}</h3>
        </div>
    );
}

const Learn = () => {
    return (  
        <div className="hero">
            <Sidebar />
            <h2>Welcome to Mellow Talk</h2>
            <div className="cards">
                <LearnCard title="Topic 1" />
                <LearnCard title="Topic 2" />
                <LearnCard title="Topic 3" />
                <LearnCard title="Topic 4" />
                <LearnCard title= "Topic 5" />
                <button>Go to Section 2</button>
            </div>
            <div className="buy_more">
                <h4>Buy More courses </h4>
                <div className="flags">
                    <img src="" alt="flag" />
                    <img src="" alt="flag" />
                    <img src="" alt="flag" />
                    <img src="" alt="flag" />
                </div>
            </div>

        </div>
    );
}
 
export default Learn;