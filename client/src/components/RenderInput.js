import React from "react";

const RenderInput = (field) => {
  const { input, id, placeholder, type } = field;

  return (
    <div className="render-input">
      <input
        {...input}
        id={id}
        className="input"
        placeholder={placeholder}
        type={type}
      />
      <div className="error-wrap">
        {field.meta.touched && field.meta.error && (
          <span className="error">{field.meta.error}</span>
        )}
      </div>
    </div>
  );
};

export default RenderInput;
