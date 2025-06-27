import axios from "axios";
import "./createProduct.css";
import { useState } from "react";

function CreateProduct({ off }) {
  const [namee, setNamee] = useState("");
  const [pricee, setPricee] = useState("");
  const [imagee, setImagee] = useState("");

  const handleCreate = async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/products",
        product
      );
      console.log("done?");
    } catch (error) {
      console.log(error);
    } finally {
      off(false);
    }
  };

  return (
    <>
      <div className="createProduct">
        <button
          onClick={() => {
            off((o) => (o = !o));
          }}
          className="OUT"
        >
          X
        </button>
        <div className="formThingie">
          <input
            value={namee}
            onChange={(e) => {
              setNamee(e.target.value);
            }}
            type="text"
            placeholder="do you have a name?"
          />
          <input
            value={pricee}
            onChange={(e) => {
              setPricee(e.target.value);
            }}
            type="number"
            placeholder="PRICE??"
          />
          <input
            value={imagee}
            onChange={(e) => {
              setImagee(e.target.value);
            }}
            type="text"
            placeholder="IMAGE!"
          />
          <button
            onClick={() => {
              handleCreate({ title: namee, price: pricee, image: imagee });
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
