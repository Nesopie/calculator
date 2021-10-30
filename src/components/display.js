const Display = (props) => {
    return (
        <div className="display">
            <div>
                {props.display === "0" ? "" : props.display}
            </div>
        </div>
    )
}

export default Display;
