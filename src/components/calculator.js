import Header from './header.js';
import Display from './display.js';
import ButtonContainer from './buttonContainer.js';

const Calculator = (props) => {
    return (
        <div className="container">
            <Header/>
            <Display display={props.display}/>
            <ButtonContainer onClick={props.onClick}/>
        </div>
    )
}

export default Calculator;
