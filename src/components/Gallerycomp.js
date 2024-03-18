import React, { Component } from 'react';
import {Button, Col, Card, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popupinformation from './Popupinformation';

export const cardsData = [
        { 
            imgSrc: 'https://media.gettyimages.com/id/1212006391/es/foto/programador-inform%C3%A1tico-que-trabaja-en-un-nuevo-programa-de-software.jpg?s=1024x1024&w=gi&k=20&c=TjfB99tXFD7LeM31RX3t1Ompd-D1leQRakYq7AMAn0Y=',
            title: 'SINGLETON',
            text: 'Concepto: El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia. Se utiliza cuando se necesita exactamente una instancia de una clase en todo el programa. Ejemplo propio: En un sistema de gestión de usuarios, la clase UserManager podría ser un singleton para garantizar que solo haya una instancia en ejecución. Esto es útil para acceder a los datos del usuario desde cualquier parte del sistema y para evitar conflictos en la gestión de usuarios'
            
        },
        { 
            imgSrc: 'https://img.itmastersmag.com/wp-content/uploads/2023/10/05191402/Patrones-de-diseno-1280x720.jpg',
            title: 'FACTORY',
            text: 'Concepto: El patrón Factory se utiliza para la creación de objetos sin exponer la lógica de creación. Proporciona una interfaz para crear objetos de un tipo determinado sin especificar su clase concreta. Ejemplo propio: En un juego de simulación de granja, una fábrica de animales podría crear diferentes tipos de animales como vacas, pollos o cerdos, cada uno implementando la interfaz Animal. La fábrica recibe un parámetro indicando el tipo de animal a crear y devuelve una instancia del animal correspondiente..',
            
        },
        { 
            imgSrc: 'https://media.gettyimages.com/id/616902766/es/foto/dedicado-de-desarrollo-de-software.jpg?s=1024x1024&w=gi&k=20&c=2_j9e4fOkmLgSD4wFyKB_tPtoVPCBQ_dqVd0N1ypMwI=',
            title: 'OBSERVER',
            text: 'Concepto: El patrón Observer establece una relación uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, todos los dependientes son notificados y actualizados automáticamente. Ejemplo propio: En un sistema de gestión de inventario, un objeto Inventory podría ser el sujeto observado. Varias clases, como StockUpdater y InventoryLogger, podrían registrarse como observadores del inventario para recibir notificaciones cuando se añadan o retiren elementos del inventario.',
          
        },
        { 
            imgSrc: 'https://images.law.com/contrib/content/uploads/sites/397/2023/05/Big-data-technology_2-767x633.jpg',
            title: 'STRATEGY',
            text: 'Concepto: El patrón Strategy define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilizan. Ejemplo propio: En un sistema de navegación, diferentes algoritmos de enrutamiento como "Ruta más corta", "Ruta más rápida" o "Evitar peajes" pueden ser implementados como estrategias. El usuario puede seleccionar la estrategia de enrutamiento deseada, y el sistema utilizará el algoritmo correspondiente para calcular la ruta.',
           
        },
        { 
            imgSrc: 'https://media.gettyimages.com/id/599104836/es/foto/aumentar-sus-esfuerzos-para-maximizar-su-%C3%A9xito.jpg?s=1024x1024&w=gi&k=20&c=Fm3nboY-nbjkHF99IGpLZjEhiBobxgNmYTiawrV10gk=',
            title: 'TEMPLATE METHOD',
            text: 'Concepto: El patrón Template Method define el esqueleto de un algoritmo en una operación, delegando algunos pasos a las subclases. Permite que las subclases proporcionen implementaciones específicas para ciertos pasos del algoritmo. Ejemplo propio: En un juego de aventuras, la clase base Character podría tener un método explore() que define el flujo general de exploración, pero delega a las subclases (Warrior, Wizard, Rogue, etc.) la implementación específica de cómo interactuar con ciertos elementos del entorno, como puertas, trampas o enemigos. Esto permite que cada tipo de personaje tenga su propio comportamiento de exploración único.',
        },
        // Agrega más objetos para más tarjetas según sea necesario
    ];

class componentName extends Component {
    render() {
        return (
            <div class="album">
               <div className="ovlay-nat">
             <OverlayTrigger 
                placement="bottom" 
                overlay={<Tooltip id="button-tooltip-2" >Natalia Pinto</Tooltip>}
                >
                {({ ref, ...triggerHandler }) => (
                    <Button
                    variant="light"
                    {...triggerHandler}
                    className="d-inline-flex align-items-center"
                    >
                    <Image
                        ref={ref}
                        width="40"
                        height="40"
                        roundedCircle
                        src="https://media-bog2-1.cdn.whatsapp.net/v/t61.24694-24/428451781_367561272857442_3235785932410469080_n.jpg?ccb=11-4&oh=01_AdSyRXJFfw72mCBtR8j1h0Moq4eENJAmnaVIDypZeOa_CQ&oe=66037AE7&_nc_sid=e6ed6c&_nc_cat=109"
                    />
                    <span className="ms-1">Arquitectura de Software</span>
                    </Button>
                )}
             </OverlayTrigger>
             </div>
             <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4">
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" width="300" height="300" src={card.imgSrc} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text></Card.Text>
                                <Popupinformation title={card.title} text={card.text} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
        
        </div>
        </div>

        );
    }
}



export default componentName;