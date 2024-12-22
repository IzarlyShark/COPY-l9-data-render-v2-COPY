// src/CafesTable.jsx  
import React, { useEffect, useState, useMemo } from 'react';  
import FilterCafes from './FilterCafes';  

const subwayOptions = [  
  { name: "Московская", code: "Moscow" },  
  { name: "Арбат", code: "Arbat" },  
  { name: "Александровский сад", code: "Alexandrovsky Garden" }, // Исправлено здесь
  { name: "Парк Культуры", code: "Culture" },  
  { name: "Театральная", code: "Theater" },  
];

const CafesTable = () => {  
    const [cafes, setCafes] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  
    const [selectedSubway, setSelectedSubway] = useState('All');  

    useEffect(() => {  
        const fetchCafes = async () => {  
            try {  
                const response = await fetch('/cafes');  
                if (!response.ok) {  
                    throw new Error('Network response was not ok');  
                }  
                const data = await response.json();  
                console.log('Fetched cafes:', data); // Для отладки  
                if (Array.isArray(data.cafes)) {  
                    setCafes(data.cafes);  
                } else {  
                    console.error('Expected cafes to be an array but got:', data.cafes);  
                    setCafes([]);  
                }  
            } catch (error) {  
                setError(error.message);  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchCafes();  
    }, []);  

    // Фильтрация кафе по выбранной станции метро 
    const filteredCafes = useMemo(() => {
        return selectedSubway === 'All'   
            ? cafes   
            : cafes.filter(cafe => cafe.subwayCode === selectedSubway);
    }, [cafes, selectedSubway]);

    if (loading) {  
        return <div>Загрузка...</div>;  // Можно заменить на индикатор загрузки
    }  

    if (error) {  
        return <div>Ошибка: {error}</div>;  // Можно добавить больше информации о ошибке
    }  

    return (  
        <div className='cafesTable'>  
            <FilterCafes subwayOptions={subwayOptions} onSelect={setSelectedSubway} />  
            <ul className="cardsList">  
                {filteredCafes.map(cafe => (  
                    <li className="card" key={cafe.id}>  
                        <img src={cafe.img || 'https://via.placeholder.com/150'} alt={cafe.name} />  
                        <h2>{cafe.name}</h2>  
                        <p>{cafe.desc}</p> {/* Используем cafe.desc вместо cafe.description */}  
                        <p>{cafe.address}</p>  
                        <p>Станция метро: {cafe.subwayCode}</p> {/* Используем subwayCode вместо subway */}  
                        <p>{cafe.workTime}</p> {/* Используем workTime вместо hours */}  
                    </li>  
                ))}
                            </ul>  
        </div>  
    );  
};  

export default CafesTable;