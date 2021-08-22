import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import styles from './styles.scoped.css';


export default function Table(props) {
  const { className, headers, loading, data } = props;

  const renderBody = () => {
    if (loading || !data.length) {
      return (
        <tr>
          <td className={styles.nodata} colSpan={headers.length}>
            {loading ? <Spinner className={styles.spinner} color="#ee3124" /> : (
              <>
                <h3>Data tidak di temukan</h3>
              </>
            )}
          </td>
        </tr>
      );
    }
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
  headers: [],
  loading: false,
};

Table.propTypes = {
  actionButton: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.array),
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  ),
  loading: PropTypes.bool,
};
