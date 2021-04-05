const Sample = props => {
    
    
    return (
        <div>
            <button onClick={() => {
                props.setChips(props.chips + 10)
            }}>
                Add Chips
            </button>
            <button onClick={() => {
                props.setChips(props.chips - 10)
            }}>
                Subtract Chips
            </button>
            <button onClick={() => {
                props.setChips(5000)
            }}>
                Reset Chips
            </button>
        </div>
    )
}

export default Sample