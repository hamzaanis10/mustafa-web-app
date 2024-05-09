import React, { useState } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import './add-more-item.css';



export default function AddMoreItems() {
  const [value, setValue] = useState<number>();

  return (
    <div className="card flex justify-content-center w-4rem m-auto" id="add-more-item">
      <InputNumber
        value={value}
        onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)}
        showButtons
        buttonLayout="horizontal"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        min={0}
      />
    </div>
  );
}
