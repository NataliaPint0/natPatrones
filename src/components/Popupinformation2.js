import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Popupinformation2() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload(); // Recargar la página al cerrar el popup
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Click para ver!
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press escape key.2222222
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
  
export default Popupinformation2;