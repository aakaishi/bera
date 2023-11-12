import './ComboBox.css';

const ComboBox = (props) => {
  return (
    <div className='combobox'>
      <label>{props.label}</label>
      <select required={props.required}
              value={props.value}
              onChange={event => props.onChangeValue(event.target.value)}>
        <option value=""></option>
        {props.userType.map(type => {
          return <option key={type}>{type}</option>
        })}
      </select>
    </div>
  );
}

export default ComboBox;