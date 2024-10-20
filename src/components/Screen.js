import "./Screen.css";
import { useState } from "react";

export default function Screen() {
    const [orderId, setOrderId] = useState("");
    const [price, setPrice] = useState("");
    const [dish, setDish] = useState("");
    const [table, setTable] = useState("Table 1");

    function orderIdChangeHandler(e) {
        setOrderId(e.target.value);
    }

    function priceChangeHandler(e) {
        setPrice(e.target.value);
    }

    function dishChangeHandler(e) {
        setDish(e.target.value);
    }

    function tableChangeHandler(e) {
        setTable(e.target.value);
    }

    function submitHandler() {
        console.log(orderId, price, dish, table);
        if (orderId && price && dish && table && !localStorage.getItem(orderId)) {
            let newElement = document.createElement("li");
            newElement.classList.add("eachItem");
            let tableNo;
            newElement.innerHTML = dish + "  -  " + price + "        ";
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.onclick = deleteHandler;
            newElement.appendChild(deleteButton);
            if (table === "Table 1") {
                tableNo = document.getElementById("table1");
            } else if (table === "Table 2") {
                tableNo = document.getElementById("table2");
            } else {
                tableNo = document.getElementById("table3");
            }
            tableNo.appendChild(newElement);
            let objectToSaveInLocal = {
                "Dish": dish,
                "Price": price,
                "Table": table
            }
            let objectToSaveInHTML = {
                "OrderId": orderId,
                "Dish": dish,
                "Price": price,
                "Table": table
            }
            newElement.setAttribute("objectDetails", JSON.stringify(objectToSaveInHTML));
            localStorage.setItem(orderId, JSON.stringify(objectToSaveInLocal));
            setOrderId("");
            setDish("");
            setPrice("");
        }
    }

    function deleteHandler(e) {
        console.log("Deletion Button Pressed with value", e.target.parentElement);
        let elementGot = e.target.parentElement.parentNode;
        console.log(elementGot);
        let elementDetails = JSON.parse(e.target.parentElement.getAttribute("objectDetails"));
        let idGot = elementDetails["OrderId"];
        elementGot.removeChild(e.target.parentElement);
        console.log(idGot);
        localStorage.removeItem(idGot);
    }

    return (
        <>
            <div className="container">
                <h2 className="heading">
                    Make Waiter's Life Easy
                </h2>
                <div className="box">
                    <div className="fields">
                        <label className="inputLabel">Unique Order Id</label>
                        <input type="number" onChange={(e) => orderIdChangeHandler(e)} value={orderId} />
                    </div>
                    <div className="fields">
                        <label className="inputLabel">Choose Price</label>
                        <input type="number" onChange={(e) => priceChangeHandler(e)} value={price} />
                    </div>
                    <div className="fields">
                        <label className="inputLabel">Choose Dish</label>
                        <input onChange={(e) => dishChangeHandler(e)} value={dish} />
                    </div>
                    <div className="fields">
                        <label className="inputLabel">Choose Table</label>
                        <select onChange={(e) => tableChangeHandler(e)} value={table}>
                            <option>Table 1</option>
                            <option>Table 2</option>
                            <option>Table 3</option>
                        </select>
                    </div>
                    <button type="submit" onClick={submitHandler} className="buttonStyle">Add to bill</button>
                </div>
                <h4>Details:</h4>
                <div className="allTableContainer">
                    <div className="tableBox">
                        <h5>Table 1</h5>
                        <ul id="table1"></ul>
                    </div>
                    <div className="tableBox">
                        <h5>Table 2</h5>
                        <ul id="table2"></ul>
                    </div>
                    <div className="tableBox">
                        <h5>Table 3</h5>
                        <ul id="table3"></ul>
                    </div>
                </div>
            </div>
        </>
    )
}