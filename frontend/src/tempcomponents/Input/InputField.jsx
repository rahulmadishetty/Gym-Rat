import React from 'react';
import { Field } from 'react-final-form';
 
const InputField = ({ name, placeholder, validate, type, dataId }) => {
    return (
        <>
            <Field name={name} validate={validate}>
                {({ input, meta }) => (
                    <div className='d-flex flex-column col-8 my-2'>
                        <input
                            {...input}
                            type={type}
                            placeholder={placeholder}
                            className='p-2 '
                            data-id={dataId}
                        />
                        {meta.error && meta.touched && <span className='error text-start'>{meta.error}</span>}
                    </div>
                )}
            </Field>
        </>
    );
};
 
export default InputField;