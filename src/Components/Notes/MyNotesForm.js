import React,{useState} from 'react';

function MyNotesForm(props) {

    // Object Destructuring - ES6
    const{formSubmitFunc} = props;

    // State variables to make form inputs as controlled components
    const[title,setTitle] = useState('');

    const[body,setBody] = useState('');

    // Event handler as callback function - 1 
    const handleTitle = function(e){
        const inputValue = e.target.value;

        // Invoke State function
        setTitle(inputValue)
    }

    // Event handler as callback function - 2 
    const handleBody = function(e){
        const inputValue = e.target.value;

        // Invoke State function
        setBody(inputValue)
    }

    // To store form errors in Object
    const[formErrors,setFormErros] = useState({});

    // To track errors in Component
    const findErrors = {};

    // Form Validation
    const runFormValidation = function(){

        // For Title
        if(title.trim().length === 0){
            // Object operations creating new property along with value
            findErrors['title'] = 'title cannot be blank';
        }
    }

    // Save button
    const handleSave = function(e){
        // To stop page to reload
        e.preventDefault();

        // Invoke form validation
        runFormValidation();

        if(Object.keys(findErrors).length === 0){
            // Invoke State function
            setFormErros({});

            // User Inputs
            const notesDataTwo = {
                title : title,
                body:body
            }

            // Invoke function
            formSubmitFunc(notesDataTwo);

            // To reset form
            setTitle('');
            setBody('');

        }else{
            console.log(findErrors);

            // Invoke State function
            setFormErros(findErrors);
        }
    }

    return (
        <>

            <h2 className='text-success text-capitalize'>
                add note 
            </h2>

            <form>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="text"
                        className='form-control'
                        placeholder='Title'
                        value={title}
                        onChange={handleTitle}
                    /> 

                    {/* Conditional Rendering Simple...if */}

                    {
                        formErrors.title && <span className='text-danger'> {formErrors.title} </span>
                    }

                </div>

                {/* 2 */}
                <div className="form-group">

                    <textarea 
                        className='form-control'
                        placeholder='Body'
                        value={body}
                        onChange={handleBody}
                    ></textarea>

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>

            </form>
            
        </>
    )
}

export default MyNotesForm;