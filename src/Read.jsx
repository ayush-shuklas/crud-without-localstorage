import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './All.css'; // Import CSS file for styling

const Read = () => {
    const [Alldata, setAlldata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/');
            setAlldata(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onRemove = async (id) => {
        try {
            await axios.delete(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${id}`);
            getData();
        } catch (error) {
            console.error('Error removing data:', error);
        }
    };

    const onUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div className="read-container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Alldata.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.Name}</td>
                            <td>{data.Age}</td>
                            <td>
                                <button className="update-button" onClick={() => onUpdate(data.id)}>Edit</button>
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => onRemove(data.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
