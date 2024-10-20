import "./Screen.css";
import { useState } from "react";

export default function Screen() {
    const [orderId, setOrderId] = useState("");
    const [price, setPrice] = useState("");
    const [dish, setDish] = useState("");
    const [table, setTable] = useState("");
    const [table1Details, setTable1Details] = useState([]);
    const [table2Details, setTable2Details] = useState([]);
    const [table3Details, setTable3Details] = useState([]);

    function orderIdChangeHandler(e) {
        if (e.target.value) {
            setOrderId(e.target.value);
        }
    }

    function priceChangeHandler(e) {
        if (e.target.value) {
            setPrice(e.target.value);
        }
    }

    function dishChangeHandler(e) {
        if (e.target.value) {
            setDish(e.target.value);
        }
    }

    function tableChangeHandler(e) {
        if (e.target.value) {
            setTable(e.target.value);
        }
    }

    function submitHandler() {
        console.log(orderId, price, dish, table);
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
                    <button type="submit" onClick={submitHandler}>Add to bill</button>
                </div>
                <h4>Details:</h4>
                <div className="tableBox">
                    <h5>Table 1</h5>
                    <ul id="table1"></ul>
                </div>
                <div className="tableBox">
                    <h5>Table 2</h5>
                    <ul id="table1"></ul>
                </div>
                <div className="tableBox">
                    <h5>Table 3</h5>
                    <ul id="table1"></ul>
                </div>
            </div>
        </>
    )
}