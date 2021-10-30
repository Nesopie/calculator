const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.type}>{props.value}</button>
    );
}

const ButtonContainer = (props) => {
    return (
        <div className="buttonContainer">
            <Button onClick={props.onClick} type="number" value="7"/>
            <Button onClick={props.onClick} type="number" value="8"/>
            <Button onClick={props.onClick} type="number" value="9"/>
            <Button onClick={props.onClick} type="delete" value="DEL"/>
            <Button onClick={props.onClick} type="number" value="4"/>
            <Button onClick={props.onClick} type="number" value="5"/>
            <Button onClick={props.onClick} type="number" value="6"/>
            <Button onClick={props.onClick} type="operator" value="+"/>
            <Button onClick={props.onClick} type="number" value="1"/>
            <Button onClick={props.onClick} type="number" value="2"/>
            <Button onClick={props.onClick} type="number" value="3"/>
            <Button onClick={props.onClick} type="operator" value="-"/>
            <Button onClick={props.onClick} type="decimal" value="."/>
            <Button onClick={props.onClick} type="number" value="0"/>
            <Button onClick={props.onClick} type="operator" value="/"/>
            <Button onClick={props.onClick} type="operator" value="x"/>
            <Button onClick={props.onClick} type="reset" value="RESET"/>
            <Button onClick={props.onClick} type="submit" value="="/>
        </div>
    )
}

export default ButtonContainer;
