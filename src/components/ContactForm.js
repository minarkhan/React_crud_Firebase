import React, { useState, useEffect } from "react";


const ContactForm = (props) => {
    const initialFileValues ={
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [values, setValues] = useState(initialFileValues);

    useEffect(()=>{
        if(props.currentId=='')
        setValues({
            ...initialFileValues
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
    },[props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }
    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
    }
    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" type="text" name="fullName"  placeholder="Full Name" 
                value={values.fullName}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input onChange={handleInputChange} className="form-control" type="text" name="mobile" value={values.mobile} placeholder="Mobile"/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input onChange={handleInputChange} className="form-control" type="text" name="email" value={values.email} placeholder="Email"/>
                </div>


            </div>
            <div className="form-group">
                <textarea onChange={handleInputChange} className="form-control" type="text" name="address" value={values.address} placeholder="Address"></textarea>
                
            </div>
            <div className="form-group">
                <input className="btn btn-primary" type="submit" name="submit" value={props.currentId==''? "Save":"Update"}/>
                
            </div>
        </form>
     );
}
 
export default ContactForm;