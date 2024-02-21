import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import './All.css'; // Import CSS file

const Create = () => {
    const navigate = useNavigate();
    const [Alldata, setAlldata] = useState({
        Name: "",
        Age: ""
    });

    const onchangehandle = (e) => {
        const { name, value } = e.target;
        setAlldata(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onsubmithandle = (e) => {
        e.preventDefault();
        axios.post('https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush', Alldata)
            .then(() => navigate('/read'))
            .catch(error => console.error('Error submitting data:', error));

        setAlldata({
            Name: "",
            Age: ""
        });
    };

    return (
        <div className="create-container">
            <form onSubmit={onsubmithandle}>
                <input type="text" name="Name" placeholder="Name" value={Alldata.Name} onChange={onchangehandle} />
                <input type="text" name="Age" placeholder="Age" value={Alldata.Age} onChange={onchangehandle} />
                <button type="submit">Submit</button>
            </form>
            <h1>{Alldata.Name} :: {Alldata.Age}</h1>
        </div>
    );
};

export default Create;
