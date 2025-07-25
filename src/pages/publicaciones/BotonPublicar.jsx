import { useRef, useEffect } from "react";
import FormularioPublicaciones from "../../components/publicacion/FormularioPublicaciones";
import estilos from "./BotonPublicar.module.css";
import clsx from "clsx";

const BotonPublicar = ({ setNuevoDato }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Inicializa el modal de Bootstrap
    if (window.bootstrap && modalRef.current) {
      new window.bootstrap.Modal(modalRef.current);
    }
  }, []);

  const abrirModal = () => {
    if (window.bootstrap && modalRef.current) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(
        modalRef.current
      );
      modal.show();
    }
  };

  return (
    <>
      <div
        role="button"
        onClick={abrirModal}
        className={clsx(
          "form-control",
          "text-muted",
          "rounded-pill",
          estilos["boton-fake"]
        )}
      >
        ¿Quieres publicar algo? Haz click aquí
      </div>

      {/* Modal Bootstrap */}
      <div
        className="modal fade"
        tabIndex="-1"
        ref={modalRef}
        id="modalPublicar"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Crear Publicación</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              <FormularioPublicaciones setNuevoDato={setNuevoDato}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotonPublicar;