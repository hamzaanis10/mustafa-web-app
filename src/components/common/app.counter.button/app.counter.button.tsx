import React, { useState } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import './app.counter.button.css';



export default function AppCounterButton(props: any) {
  const { cartProduct } = props;
  const [value, setValue] = useState<number>();

  return (
    <div className="card pt-2 pb-2 flex justify-content-center w-4rem m-auto" id="add-more-item">
      <InputNumber
        value={cartProduct && cartProduct.get('product') &&  cartProduct.get('product').get('quantity')}
        //onValueChange={(e: InputNumberValueChangeEvent) => setValue(e?.value)}
        showButtons
        buttonLayout="horizontal"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        min={0}
        useGrouping={false}
      />
    </div>
  );
}
