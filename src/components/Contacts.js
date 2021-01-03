import React, { useState,useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../firebase";


const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('');
    useEffect( () => {
        fireDb.child('contacts').on('value', snapshot => {
            if(snapshot.val() !=null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    }, [])//similar to componentDidMount

    const addOrEdit = obj =>{
        if(currentId=='')
            fireDb.child('contacts').push(
                obj,
                err => {
                    if(err)
                    console.log(err)
                    else
                    setCurrentId('');
                }
            )
        else
        fireDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if(err)
                console.log(err)
                else
                setCurrentId('');
            })
    }



    const onDelete = key =>{
        if(window.confirm('Are you sure?')){
            fireDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                    console.log(err)
                    else
                    setCurrentId('');
                }
            )
        }
    }
    return (
        <>
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4 text-center" >Contact Register</h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-5">
            <ContactForm {...({addOrEdit, currentId, contactObjects})} />
        </div>
        <div className="col-md-7">
            <table className="table table-borderless table-stripped">
                <thead className="thead-light">
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(contactObjects).map(id=>{
                            return <tr key={id}>
                                <td>{contactObjects[id].fullName}</td>
                                <td>{contactObjects[id].mobile}</td>
                                <td>{contactObjects[id].email}</td>
                                <td>
                                    <a className="btn text-primary" onClick={()=>{setCurrentId(id)}}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </a>
                                    <a className="btn text-danger" onClick={()=>{onDelete(id)}}>
                                        <i className="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
    );
}
 
export default Contacts;