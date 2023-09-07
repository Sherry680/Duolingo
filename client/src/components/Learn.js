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
    const flagsContainer = document.querySelector('.flags');
    const flagwidth = flagsContainer.firstElementChild.clientWidth;
    const containerWidth = flagwidth * flagsContainer.children.length;
    const animationDuration = 50;

    flagsContainer.style.animationDuration = `${animationDuration}s`;

    const speed = containerWidth / (animationDuration * 60);
    const adjustAnimationSpeed = () =>{
        flagsContainer.style.animationDuration = `${animationDuration}s`;
        flagsContainer.style.animationTimingFunction = 'linear';
        flagsContainer.style.animationIterationCount = 'infinite';
        flagsContainer.style.animationPlayState = 'running';
    }
    const moveFlags = () => {
        adjustAnimationSpeed();
    }
    moveFlags()
    return (  
        <div className="hero">
            <Sidebar />
            <div className="main">
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
                        <img src="" alt="flag" />
                        <img src="" alt="flag" />
                        <img src="" alt="flag" />
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Learn;