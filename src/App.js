import './App.css';
import Menu from "./components/menu/Menu";
import Secondmenu from "./components/secondmenu/Secondmenu";
import Contract from "./components/contract/Сontract";
import Social from "./components/social/Social";
import Email from "./components/email/Email";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Secondmenu/>
            <Contract/>
            <Social/>
            <Email/>
        </div>
    );
}

export default App;
