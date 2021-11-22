const Calculadora = () => {

    const[pantalla, setPantalla] = React.useState(0);
    //Arreglo donde almacenar los numeros introducidos
    const[numeros, setNumeros] = React.useState([]);

    const concatenar = (boton) => {
        //Agregar el numero presionado a un arreglo
        setNumeros(numeros => [...numeros, boton]);
        console.log(numeros);

        //Si pantalla es 0 (Estado inicial), cambiar el 0 por el numero presionado
        if (pantalla == 0)
            setPantalla(boton);
        else { //Si fue presionado un numero ya, agregar a la pantalla
            setPantalla(pantalla + boton);
        }
        
    }

    const resultado = () => {
        //
    }
    
    return(
        <section className="d-flex justify-content-center container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-white">Calculadora React</h1>
                    <hr className="bg-white" />
                    <div className="mx-auto calculadoraFondo">
                        <div className="mx-auto calculadoraPantalla text-end">
                            <p class="pantallaResultado text-white">{pantalla}</p>
                        </div>

                        <div className="mx-auto botones">
                            <button onClick={() => concatenar("1")} className="boton">
                                <p className="lead centrar-numero">1</p>
                            </button>
                            <button onClick={() => concatenar("2")} className="boton">
                                <p className="lead centrar-numero">2</p>
                            </button>
                            <button onClick={() => concatenar("3")} className="boton">
                                <p className="lead centrar-numero">3</p>
                            </button>
                            <button onClick={() => concatenar("4")} className="boton">
                                <p className="lead centrar-numero">4</p>
                            </button>
                            <button onClick={() => concatenar("5")} className="boton">
                                <p className="lead centrar-numero">5</p>
                            </button>
                            <button onClick={() => concatenar("6")} className="boton">
                                <p className="lead centrar-numero">6</p>
                            </button>
                            <button onClick={() => concatenar("7")} className="boton">
                                <p className="lead centrar-numero">7</p>
                            </button>
                            <button onClick={() => concatenar("8")} className="boton">
                                <p className="lead centrar-numero">8</p>
                            </button>
                            <button onClick={() => concatenar("9")} className="boton">
                                <p className="lead centrar-numero">9</p>
                            </button>
                            <button onClick={() => concatenar("+")} className="boton">
                                <p className="lead centrar-numero">+</p>
                            </button>
                            <button onClick={() => concatenar("-")} className="boton">
                                <p className="lead centrar-numero">-</p>
                            </button>
                            <button onClick={() => concatenar("0")} className="boton">
                                <p className="lead centrar-numero">0</p>
                            </button>
                            <button onClick={() => concatenar("/")} className="boton">
                                <p className="lead centrar-numero">/</p>
                            </button>
                            <button onClick={() => concatenar("*")} className="boton">
                                <p className="lead centrar-numero">*</p>
                            </button>
                            <button onClick={() => concatenar("=")} className="boton">
                                <p className="lead centrar-numero">=</p>
                            </button>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}