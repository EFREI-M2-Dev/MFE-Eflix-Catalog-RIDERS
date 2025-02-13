import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchData } from '../service/catalog';

const Catalog = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await fetchData();
        setData(result);
      } catch(e){
        error.log('Failed to fetch datas:', e);
      }
    }

    getData();
  })

  if (!data) return <div>Loading...</div>;

  return (<>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700">
          This is a skeleton microfrontend that can be used as a template for creating new MFEs.
        </p>
      </div>
    </div>

    <div>
      {data.map((movie) => (
        <h1 id={movie.id}>{movie.title}</h1>
      ))}
    </div>
</>);
};

export default Catalog; 