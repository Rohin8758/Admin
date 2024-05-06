import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditProduct = (props) => {
  const [images, setImages] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");

  useEffect(() => {
    if (props.productId) {
      axios
        .get(`http://localhost:5000/admin/getsingleproduct/${props.productId}`)
        .then(function (response) {
          // console.log(props.productId);
          console.log(response.data);
          setImages(response.data.images);
          setTitle(response.data.title);
          setPrice(response.data.price);
          setDiscount(response.data.discount);
          setDescription(response.data.description);
          setProductType(response.data.productType);
        })
        .catch(function (error) {
          // Handle Error
          console.log(error);
        });
    }
  }, [props]);

  const updateProduct = (e) => {
    e.preventDefault();
    console.log(title);
    if (props.productId) {
      axios
        .patch(
          `http://localhost:5000/admin/updateproductdata/${props.productId}`,
          {
            images: images,
            title: title,
            price: price,
            discount: discount,
            description: description,
            productType: productType,
          }
        )
        .then(function (response) {
          // handle success
          console.log(response);
          props.onHide();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  const updateImage = (e) => {
    e.preventDefault();
    if (props.productId) {
      axios
        .post(
          `http://locahhost:5000/admin/updateProductimages/${props.productId}`,
          {
            images: e.target.files,
          }
        )
        .then(function (response) {
          console.log(response);
          props.onHide();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton={true} className="bg-cyan">
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Page
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <div>
              {/* left column */}
              {/* general form elements */}
              <div className="card card-primary  mx-auto">
                {/* form start */}
                <form>
                  <div className="card-body">
                    <label htmlFor="InputImage">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="InputImage"
                      placeholder="Images"
                      alt="Image"
                      multiple
                      onChange={updateImage}
                    />
                    <label htmlFor="InputImage">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputtitle"
                      placeholder="Title"
                      alt="Name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="form-group">
                      <label htmlFor="InputEmail">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputprice"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputMobile">Discount</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputdiscount"
                        placeholder="Discount"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                      <div className="form-group">
                        <label htmlFor="InputMobile">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputdiscount"
                          placeholder="Discount"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputProductType">ProductType</label>
                      <br />
                      <div className="col-sm-10 check-item">
                        <div className="main-items">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="exampleCheck2"
                            name="item"
                            onChange={(e) => {
                              if (e.target.value === "on") {
                                setProductType("hot item");
                              }
                            }}
                          />
                          <span className="check-product-type">Hot Item</span>
                        </div>
                        <div className="main-items">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="exampleCheck2"
                            name="item"
                            onChange={(e) => {
                              if (e.target.value === "on") {
                                setProductType("new arrival");
                              }
                            }}
                          />
                          <span className="check-product-type">
                            New Arrival
                          </span>
                        </div>
                        <div className="main-items">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="exampleCheck2"
                            name="item"
                            onChange={(e) => {
                              if (e.target.value === "on") {
                                setProductType("on sale");
                              }
                            }}
                          />
                          <span className="check-product-type">On Sale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={updateProduct}
                  >
                    Add
                  </button>
                  <Button onClick={props.onHide}>Close</Button>
                </form>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProduct;
