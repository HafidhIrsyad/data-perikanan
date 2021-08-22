/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useHooksData } from '../hooks/HookData';
import './style.css'

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

  console.log(fish)

  const headers = ['Komoditas', 'Provinsi', 'Kota', 'Jumlah', 'Harga', 'Date', 'Action'];

  return (
    <section className="table">
      <h1>Daftar Harga Perikanan Di Indonesia</h1>
      <table>
        <thead>
          <tr>{headers.map((v, i) => <th key={i}>{v}</th>)}</tr>
        </thead>
          {fish && fish?.map((display, index) => (
            <tbody key={index}>
              <tr>
                <td>{display.komoditas}</td>
                <td>{display.area_provinsi}</td>
                <td>{display.area_kota}</td>
                <td>{display.size}</td>
                <td>{display.price !== null ? display.price : '50000'}</td>
                <td>{moment(display.tgl_parsed).format('DD MMMM YYYY')}</td>
                <td>
                  <div>
                  <Link to={`edit/${display.uuid}`}>
                    <button type="button">Click Me!</button>
                  </Link>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </section>
  );
}

export default Fishery;