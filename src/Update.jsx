import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './All.css'; // Import CSS file for styling

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Alldata, setAlldata] = useState({
        // Name: "",
        // Age: ""
    });

    useEffect(() => {
        axios.get(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${id}`)
            .then(response => {
                setAlldata(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const onchangehandle = (e) => {
        const { name, value } = e.target;
        setAlldata(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onsubmithandle = (e) => {
        e.preventDefault();
        axios.put(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${id}`, Alldata)

        setAlldata({
            Name: "",
            Age: ""
        })
        navigate('/read');
    };

    return (
        <div className="update-container">
            {Alldata.Age ? (
                <form onSubmit={onsubmithandle}>
                    <input type="text" name="Name" placeholder="Name" value={Alldata.Name} onChange={onchangehandle} />
                    <input type="text" name="Age" placeholder="Age" value={Alldata.Age} onChange={onchangehandle} />
                    <button type="submit" className="update-button">Update</button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Update;
