import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import styles from './styles.scoped.css';

export default function Table(props) {
  const { className, data, drag, headers, onClick,
    onDragStart, onDragOver, onDragEnd, loading } = props;

  const renderBody = () => {
    if (loading || !data.length) {
      return (
        <tr>
          <td className='nodata' colSpan={headers.length}>
          {loading ? <Spinner className={styles.spinner} color="#ee3124" /> : (
              <>
                <h3>Data tidak di temukan</h3>
              </>
            )}
          </td>
        </tr>
      );
    }

    return data.map((value, i) => {
      const tds = value.map((v, i) => <td className={styles['with-data']} key={i}>{v}</td>);
      return (
        <tr
          draggable={drag}
          key={i}
          onClick={() => onClick(i)}
          onDragEnd={() => onDragEnd(i)}
          onDragOver={() => onDragOver(i)}
          onDragStart={() => onDragStart(i)}
          style={{ cursor: onClick && 'pointer' }}>
          {tds}
        </tr>);
    });
  };

  return (
    <table className={[styles.root, className].join(' ')}>
      <thead>
        <tr>{headers.map((v, i) => <th key={i}>{v}</th>)}</tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
}

Table.defaultProps = {
  actionButton: {},
  className: '',
  data: [],
  drag: false,
  headers: [],
  loading: false,
  onClick: () => {},
  onDragEnd: () => {},
  onDragOver: () => {},
  onDragStart: () => {},
};

Table.propTypes = {
  actionButton: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.array),
  drag: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  ),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
};
