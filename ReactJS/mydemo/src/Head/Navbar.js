import '../Css/Blueprintjs.css'
const Navbar = () => {
    return <nav class="bp3-navbar bp3-dark">
        <div class="myStyle">
            <div class="bp3-navbar-group bp3-align-left">
            <div class="bp3-navbar-heading">REACT</div>
            </div>
            <div class="bp3-navbar-group bp3-align-left myNav">
                <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
                <button class="bp3-button bp3-minimal bp3-icon-log-in">Login</button>
                <button class="bp3-button bp3-minimal bp3-icon-time">Time</button>
                <span class="bp3-navbar-divider"></span>
                <button class="bp3-button bp3-minimal bp3-icon-user"></button>
                <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
                <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
            </div>
        </div>
    </nav>
}
export default Navbar;