import PropTypes from "prop-types"

function DivInput({ classUsed, forLabel, label, type, required,onChange,value}) {
    return (
        type !== "checkbox" ? <div className={classUsed}>
            <label htmlFor={forLabel}>{label}</label>
            <input onChange={onChange} type={type} id={forLabel} required={required} value={value}/>
        </div> :
           <div className={classUsed}>
            <input type={type} id={forLabel} required={required} value={value}/>
            <label htmlFor={forLabel}>{label}</label>
        </div>
    )
};

DivInput.propTypes = {
    classUsed: PropTypes.string,
    forLabel: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,

};

DivInput.defaultProps = {
    classUsed: "",
    forLabel: "username",
    label: "Username",
    type: "text",
    required: false,
};

export default DivInput