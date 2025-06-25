import { useEffect, useState } from "react";
import axios from "axios";
import "./productpage.css";

function Productpage({ navigate }) {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  const handleUpdate = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const updateProduct = async (id, product, index) => {
    try {
      const updatedProduct = await axios.put(
        `http://localhost:8080/api/products/${id}`,
        product
      );
      const updatedOriginals = [...originalProducts];
      updatedOriginals[index] = JSON.parse(
        JSON.stringify(updatedProduct.data.data)
      );
      setOriginalProducts(updatedOriginals);
    } catch (error) {
      console.log("Update failed: ", error);
    }
  };

  const deleteProduct = async (id, index) => {
    try {
      const deletedProduct = await axios.delete(
        `http://localhost:8080/api/products/${id}`
      );

      const updatedProducts = [...products];
      const updatedOriginals = [...originalProducts];

      updatedProducts.splice(index, 1);
      updatedOriginals.splice(index, 1);

      setProducts(updatedProducts);
      setOriginalProducts(updatedOriginals);
    } catch (error) {
      console.log("Update failed: ", error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedProducts = await axios.get(
          "http://localhost:8080/api/products"
        );
        setProducts(fetchedProducts?.data?.data);
        setOriginalProducts(
          JSON.parse(JSON.stringify(fetchedProducts?.data?.data))
        );
      } catch (error) {}
    };
    return fetch;
  }, []);

  return (
    <>
      <div className="page productPage">
        <h1>
          Products |<button>+</button>
        </h1>
        <div className="productList">
          {products.map((p, index) => {
            return (
              <>
                <div className="product">
                  <img src={p.image} alt={p.title} />
                  <div className="info">
                    <div>
                      <input
                        type="text"
                        value={p.title}
                        placeholder="Title"
                        onChange={(e) =>
                          handleUpdate(index, "title", e.target.value)
                        }
                      />
                      <button
                        onClick={() =>
                          handleUpdate(
                            index,
                            "title",
                            originalProducts[index].title
                          )
                        }
                      >
                        ↺
                      </button>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={p.image}
                        placeholder="Image"
                        onChange={(e) =>
                          handleUpdate(index, "image", e.target.value)
                        }
                      />
                      <button
                        onClick={() =>
                          handleUpdate(
                            index,
                            "image",
                            originalProducts[index].image
                          )
                        }
                      >
                        ↺
                      </button>
                    </div>
                    <div>
                      <input
                        type="number"
                        value={p.price}
                        placeholder="Price"
                        onChange={(e) =>
                          handleUpdate(index, "price", e.target.value)
                        }
                      />
                      <button
                        onClick={() =>
                          handleUpdate(
                            index,
                            "price",
                            originalProducts[index].price
                          )
                        }
                      >
                        ↺
                      </button>
                    </div>
                  </div>
                  <div className="updates">
                    <button
                      className="update"
                      onClick={() => {
                        updateProduct(p._id, p, index);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteProduct(p._id, index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          className="back"
          onClick={() => {
            navigate("../");
          }}
        >
          go back
        </button>
      </div>
    </>
  );
}

export default Productpage;
