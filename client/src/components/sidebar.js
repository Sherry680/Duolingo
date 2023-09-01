

const Sidebar = ({profImag, name, username, native, learning, streak}) => {
    return ( 
        <div className="sidebar">
            <img src={profImag} alt="profile" />
            <div className="details">
                <ul>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>Native: {native}</li>
                    <li>Learning: {learning}</li>
                    <li>Streak {streak} Days</li>
                </ul>
            </div>
            <div className="languages">
                <h3>My Languages</h3>
                <ul>
                    <li>Germany</li>
                    <li>Finnish</li>
                </ul>
            </div>
            <button>Log Out</button>
        </div>
     );
}
 
export default Sidebar;