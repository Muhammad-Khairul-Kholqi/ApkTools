// About.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4001/form");
                console.log("API Response:", response.data); // Periksa respons di konsol
                setData(response.data.data); // Perbarui pengambilan data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

    return (
        <div>
            <div>
                About Us
            </div>
            <div>
                {/* Render all data received from the API */}
                {data && data.map(item => (
                    <div key={item.id}>
                        {/* Render all data properties */}
                        <p>ID: {item.id}</p>
                        <p>Title: {item.title}</p>
                        <p>HTML: {item.html}</p>
                        <p>CSS: {item.css}</p>
                        <p>JS: {item.js}</p>
                        <p>Video: {item.video}</p>
                        <p>Description: {item.description}</p>
                        {/* Add more properties as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
