import './DisplayFields.css';

const UpperSection = ({ roll }) => {

    const upperFields = ['aces', 'twos', 'threes', 'fours', 'fives', 'sixes'];

    return (
        <div className='upper-section'>

            {
                upperFields.map((field, i) => <div
                    className="field-container"
                    key={i}>
                    <label>
                        <img src={`img/d${i + 1}.png`} alt='img'/>
                    </label>
                    <div className={`field ${field}`}>{roll[field] !== 0 && roll[field]}</div>
                </div>)
            }

        </div>
    )
}

export default UpperSection