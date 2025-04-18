import React from 'react'

export const getMoviesData = async () => {
    try {
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4c59a226&s=titanic&page=2");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getMoviesData;
