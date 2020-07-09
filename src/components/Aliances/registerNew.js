import React, { useState, useEffect } from "react"
import { Col, Row, Toast, Modal, Button } from "react-bootstrap"
import formStyles from "../../style/form.module.css"
import useFirebase from '../../utils/useFirebase';


function RegisterNew() {
    const [state, setState] = useState({name:"", lastName:"", cel:"", cel2:"",city:"", hood:"",email:"",verification:"",pickups:0,pickupCapacity:"",trucks:0,truckCapacity:"",vans:0,vanCapacity:"",other:0,otherName:"",otherCapacity:"",pin:false,terms:false});
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const firebase = useFirebase();
    
    useEffect(() => {
    if (!firebase) return;
    return firebase.auth().onAuthStateChanged((user) => {
        console.log('User:', user);
    });
    }, [firebase]);

    function handleSubmit(e){
        e.preventDefault() 
          console.log("SUBMIT", state);
      }

    function handleNameChange(e){
        setState({ ...state, [e.target.name]: e.target.value})
    }

    function handleEmailVerification(e){
        if(e.target.value !== state.email) {
            setState({ ...state, [e.target.name]: ""})
            setShow(true)
        } 
    }

    function handleCheckbox(e){
        setState({ ...state, [e.target.name]: e.target.checked})
        console.log("HEY", state);
    }

    const handleShow = () => setShowModal(!showModal);

    return (
    <>
      <form onSubmit={handleSubmit} className={formStyles.mainForm}>
        <Col style={{marginTop:"2rem", borderTop:"dashed 1px #777", paddingTop:"1rem", textAlign:"center"}}>
            <Col>
                <label>
                Nombres*
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleNameChange}
                />
                </label>
                <label>
                Apellidos*
                <input
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleNameChange}
                />
                </label>
            </Col>

            <Col xs={12}>
                <label>
                Celular:
                <input
                    type="phone"
                    name="cel"
                    value={state.cel}
                    onChange={handleNameChange}
                />
                </label>
                <label>
                Celular alternativo:
                <input
                    type="phone"
                    name="cel2"
                    value={state.cel2}
                    onChange={handleNameChange}
                />
                </label>
            </Col>

            <Col xs={12}>
                <label>
                ciudad:
                <input
                    type="text"
                    name="city"
                    value={state.city}
                    onChange={handleNameChange}
                />
                </label>
                <label>
                Barrio/localidad:
                <input
                    type="text"
                    name="hood"
                    value={state.hood}
                    onChange={handleNameChange}
                />
                </label>
            </Col>

            <Col xs={12}>
                <label>
                e-mail*
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleNameChange}                   
                />
                </label>
                <label>
                verificar e-mail*
                <input
                    type="text"
                    name="verification"
                    value={state.verification}
                    onChange={handleNameChange}
                    onBlur={handleEmailVerification}
                />
                <Row>
                    <Col xs={12}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Body>Las direcciones de Email no coinciden...</Toast.Body>
                    </Toast>
                    </Col>
                </Row>
                </label>
            </Col>
        </Col>

        <Col style={{marginTop:"2rem", borderTop:"dashed 1px #777", paddingTop:"1rem", textAlign:"center"}}>
        <p>Información Técnica</p>
        <table style={{width:"100%"}} className={formStyles.tab}>
            <tbody>
            <tr>
                <th>Cantidad*</th>
                <th>Tipo de vehículo*</th>
                <th>Capacidad aprox* <small>(m3)</small></th>
            </tr>
            <tr>
                <td>
                    <input
                    type="number"
                    name="pickups"
                    value={state.pickups}
                    onChange={handleNameChange}
                    />
                </td>
                <td>Camioneta PickUp</td>
                <td>
                    <input
                    type="number"
                    name="pickupCapacity"
                    value={state.pickupCapacity}
                    onChange={handleNameChange}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                    type="number"
                    name="trucks"
                    value={state.trucks}
                    onChange={handleNameChange}
                    />
                </td>
                <td>Volqueta</td>
                <td>
                    <input
                        type="number"
                        name="truckCapacity"
                        value={state.truckCapacity}
                        onChange={handleNameChange}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                    type="number"
                    name="vans"
                    value={state.vans}
                    onChange={handleNameChange}
                    />
                </td>
                <td>Furgón</td>
                <td>
                    <input
                        type="number"
                        name="vanCapacity"
                        value={state.vanCapacity}
                        onChange={handleNameChange}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <input
                    type="number"
                    name="other"
                    value={state.other}
                    onChange={handleNameChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        name="otherName"
                        placeholder={" Otro"}
                        value={state.otherName}
                        onChange={handleNameChange}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="otherCapacity"
                        value={state.otherCapacity}
                        onChange={handleNameChange}
                    />
                </td>
            </tr>
            </tbody>
            </table>
        </Col>

        <Col style={{marginTop:"2rem", borderTop:"dashed 1px #777", paddingTop:"1rem", textAlign:"center"}}>
            <p>Información Ambiental</p>
            <Col xs={12} style={{margin:"1rem"}}>
                <label>
                    Cuenta con Licencia o PIN ambiental vigente
                    <input
                        type="checkbox"
                        name="pin"
                        value={state.pin}
                        onChange={handleCheckbox}
                    />
                </label>
                <label>
                    He leído y acepto los 
                    <a onClick={handleShow}
                    style={{cursor:"pointer", color:"#087F8C"}}
                    > términos y condiciones
                    </a>
                    <input
                        type="checkbox"
                        name="terms"
                        value={state.terms}
                        onChange={handleCheckbox}
                    />
                </label>
                <Modal show={showModal} onHide={handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Política de uso de información</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Carreta</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" size="sm" onClick={handleShow} variant="light">
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
            <Col>
                <p>Suba fotografías recientes de sus vehículos</p>
                <input type="file" />
            </Col>
        </Col>
        
        <Col className={formStyles.submit}>
            <button type="submit">Submit</button>
        </Col>
      </form>
    </>
    )
}

export default RegisterNew;