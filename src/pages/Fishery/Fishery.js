/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Table from '../../components/Table'
import { useHooksData } from '../../hooks/HookData';
import './style.scss';

function Fishery() {
  const { fishery, getAll } = useHooksData();
  const [fish, setFish] = useState([]);

  useEffect(() => {
    getAll()
  }, [getAll])

  useEffect(() => {
    if(fishery) {
      const removeNulls = removeEmpty(fishery.perikanan)
      setFish(removeNulls)
    }
  }, [fishery])

  function removeEmpty(arrayOfObject) {
    const results = [];
    arrayOfObject.map((item) => {
      if (item.uuid !== null) {
        return results.push(item);
      }
    })
    return results;
  }

  const headers = ['Komoditas', 'Provinsi', 'Kota', 'Jumlah', 'Harga', 'Date', 'Action'];

  const dataTables = (dataTable) => {
    return dataTable.map((v, index) => [
      v.komoditas,
      v.area_provinsi,
      v.area_kota,
      v.size,
      v.price,
      moment(v.tgl_parsed).format('DD MMMM YYYY'),
      <div key={index} className="btn-action">
        <Link to={`edit/${v.uuid}`}>
          <button type="button">Edit</button>
        </Link>
          <button>Delete</button>
      </div>
    ]);
  };

  return (
    <section className='table'>
      <div className="search">
        <input type="text" id="search" name="search" placeholder="Search"/>
        <Link to={'/create'}>
          <button type="button">Create</button>
        </Link>
      </div>
      <Table
        data={dataTables(fish)}
        headers={headers} />
    </section>
  );
}

export default Fishery;