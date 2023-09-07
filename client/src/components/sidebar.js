

const Sidebar = ({profImag, name, username, native, learning, streak}) => {
    return ( 
        <div className="sidebar">
            <div className="profile_card">
                <img src={profImag} alt="profile" />
                <ul className="details"> 
                    <li>{name}</li>
                    <li><strong>@</strong>{username}</li>
                    <li><strong>Native:</strong> {native}</li>
                    <li><strong>Learning:</strong> {learning}</li>
                    <li><strong>Streak</strong> {streak} Days</li>
                </ul>
            </div>
            <div className="rest">
                <div className="languages">
                    <h3>My Languages</h3>
                    <ul>
                        <li>Germany</li>
                        <li>Finnish</li>
                    </ul>
                </div>
                <button>Log Out</button>
            </div>
        </div>
     );
}
 
export default Sidebar;