import { useEffect, useState } from "react";

export default function Actividad_9() {
  const [stateForm, setStateForm] = useState({
    nombre: "",
    email: "",
  });

  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [disabledInputs, setDisabledInputs] = useState(false);

  const { nombre, email } = stateForm;

  const onChange = (e) => {
    setStateForm({
      ...stateForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      alert("Debe ingresar el nombre del cliente");
      return;
    }
    if (email.trim() === "") {
      alert("Debe ingresar el email del cliente");
      return;
    }

    setDisabledInputs(true);
  };

  const [productos, setProductos] = useState({
    cantidad: 0,
    papa: {
      cantidad: 0,
    },
    cebolla: {
      cantidad: 0,
    },
    zapallo: {
      cantidad: 0,
    },
  });

  const añadirProducto = (producto) => {
    if (producto === "papa") {
      setProductos({
        ...productos,
        cantidad: productos.cantidad + 1,
        papa: {
          cantidad: productos.papa.cantidad + 1,
        },
      });
    }
    if (producto === "cebolla") {
      setProductos({
        ...productos,
        cantidad: productos.cantidad + 1,
        cebolla: {
          cantidad: productos.cebolla.cantidad + 1,
        },
      });
    }
    if (producto === "zapallo") {
      setProductos({
        ...productos,
        cantidad: productos.cantidad + 1,
        zapallo: {
          cantidad: productos.zapallo.cantidad + 1,
        },
      });
    }
  };

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const cerrarVenta = () => {
    setMostrarCarrito(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Cliente</label>
        <br />
        <input
          type="text"
          placeholder="nombre"
          disabled={disabledInputs}
          name="nombre"
          value={nombre}
          onChange={onChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="mail"
          name="email"
          disabled={disabledInputs}
          value={email}
          onChange={onChange}
        />
        <br />
        {!disabledInputs && <button type="submit">Iniciar venta</button>}
      </form>

      {disabledInputs && !mostrarCarrito && (
        <div>
          <label>Añadir productos</label>
          <br />
          <button onClick={() => añadirProducto("papa")}>Papa: $ 100</button>
          <button onClick={() => añadirProducto("cebolla")}>
            Cebolla: $ 200
          </button>
          <button onClick={() => añadirProducto("zapallo")}>
            Zapallo: $ 300
          </button>
        </div>
      )}

      {mostrarResumen && (
        <>
          <p>Resumen venta</p>
          <p>Cliente: {nombre}</p>
          <p>Correo: {email}</p>
          <p>Total a pagar</p>
          <p></p>
          <button
            type="button"
            onClick={() => {
              setMostrarResumen(false);
              setStateForm({
                nombre: "",
                email: "",
                cantidad: 0,
                precio: 0,
              });
            }}
          >
            Nueva venta
          </button>
        </>
      )}
      {productos.cantidad > 0 && !mostrarCarrito && (
        <div>
          <br />
          <label>Carro de compras: </label>
          <br />
          {productos.papa.cantidad > 0 && (
            <div>
              <label>Papas:</label>
              <p>Cantidad: {productos.papa.cantidad}</p>
              <p>Valor neto: {productos.papa.cantidad * 100}</p>
              <p>Iva: {productos.papa.cantidad * 100 * 0.19}</p>
              <p>Total: {productos.papa.cantidad * 100 * 1.19}</p>
            </div>
          )}
          {productos.cebolla.cantidad > 0 && (
            <div>
              <label>Cebolla:</label>
              <p>Cantidad: {productos.cebolla.cantidad}</p>
              <p>A pagar: {productos.cebolla.cantidad * 200}</p>
              <p>Iva: {productos.cebolla.cantidad * 200 * 0.19}</p>
              <p>Total: {productos.cebolla.cantidad * 200 * 1.19}</p>
            </div>
          )}
          {productos.zapallo.cantidad > 0 && (
            <div>
              <label>Zapallo:</label>
              <p>Cantidad: {productos.zapallo.cantidad}</p>
              <p>A pagar: {productos.zapallo.cantidad * 300}</p>
              <p>Iva: {productos.zapallo.cantidad * 300 * 0.19}</p>
              <p>Total: {productos.zapallo.cantidad * 300 * 1.19}</p>
            </div>
          )}
          <button onClick={() => cerrarVenta()}>Cerrar venta</button>
        </div>
      )}

      {mostrarCarrito && (
        <div>
          <label>
            Total a pagar:
            {productos.papa.cantidad * 100 * 1.19 +
              productos.cebolla.cantidad * 200 * 1.19 +
              productos.zapallo.cantidad * 300 * 1.19}
          </label>
        </div>
      )}
    </div>
  );
}
