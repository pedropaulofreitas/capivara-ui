import React, { useContext } from "react";
import classNames from "classnames/bind";

const ModalContext = React.createContext({
  onClose: () => {},
});

export const useModalContext = () => {
  return useContext(ModalContext);
};

interface IModal {
  active?: boolean;
  onClose: () => void;
  title?: string;
  close?: boolean;
  button?: React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({
  children,
  active,
  onClose,
  title,
  close = true,
  button,
  ...rest
}) => {
  if (!active) {
    return null;
  }

  const ModalClasses = classNames({
    modal: true,
    "is-active": !!active,
  });

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div {...rest} className={ModalClasses}>
        <div
          role="presentation"
          className="modal-background"
          onClick={onClose}
        />
        <div className="modal-card">
          {(title || close) && (
            <header className="modal-card-head is-flex">
              {title && <p className="modal-card-title">{title}</p>}
              {close && (
                <button
                  className="delete"
                  aria-label="close"
                  onClick={onClose}
                />
              )}
            </header>
          )}
          <section className="modal-card-body">{children}</section>
          {button && <footer className="modal-card-foot">{button}</footer>}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

export default Modal;
