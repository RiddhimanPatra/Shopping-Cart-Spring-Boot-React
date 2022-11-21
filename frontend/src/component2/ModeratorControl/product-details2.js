import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import moderatorproductservice from "../../services/ProductService/moderatorproductservice";

const ModProductList = () => {
  const [allProduct, setAllProduct] = useState([]);

  const init = () => {
    moderatorproductservice
      .getAll()
      .then((response) => {
        console.log("Printing product data", response.data);
        setAllProduct(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container">
      <h3>List of Products</h3>
      <hr />
      <div>
        <Link to="/mod/addproduct" className="btn btn-primary mb-2">
          Add Product
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Product Name</th>
              <th> Category</th>
              <th> Price</th>
              <th> Description</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {allProduct.map((product) => (
              <tr key={product.id}>
                <td>{product.pname}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.desc}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/mod/allproduct/update/${product.id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-warning">
          <Link to="/moddashboard">Back to List</Link>
        </button>
      </div>
    </div>
  );
};

export default ModProductList;