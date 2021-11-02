import React from 'react';

const BackgroundContainer = (props) => {
    return (
             <div className="container-fluid d-flex  justify-content-center align-items-center millionaireConteiner">
                {props.children}
            </div>
    )
}

export default BackgroundContainer;
