import './TextField.css'

const TextField = (props) => {
    
    const placeholderText = `${props.placeholder}...`;
    const onChangeValue = (event) => {
        props.onChange(event.target.value);
    } 

    return (
      <div className='text-field'>
          <label>{props.label}</label>
          <input value={props.value} onChange={onChangeValue} required={props.required} placeholder={placeholderText} type={props.type} />
      </div>
    );
}

export default TextField;