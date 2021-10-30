import { useState } from 'react';

const Header = () => {
    const [ theme, setTheme ] = useState(0);

    const toggle = () => {
        const currentTheme = (theme + 1) % 3;
        if(currentTheme === 0) {
            document.documentElement.setAttribute("data-theme", "theme1");
        }else if(currentTheme === 1) {
            document.documentElement.setAttribute("data-theme", "theme2");
        }else {
            document.documentElement.setAttribute("data-theme", "theme3");
        }
        setTheme(currentTheme);
    }

    return(
        <header>
            <div className="title">calc</div>
            <div className="themeContainer">
                <div>
                    THEME
                </div>
                <div className="selectTheme">
                    <div className="themeNumbers">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                    <div className="themeDisplay">
                        <div id="theme1" onClick={toggle}></div>
                        <div id="theme2" onClick={toggle}></div>
                        <div id="theme3" onClick={toggle}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
