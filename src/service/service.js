import axios from 'axios';

export const getAllDataPerikanan = async (limit, offest) => {
  const get = await axios.get(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?limit=${limit}&offset=${offest}`);
  return get?.data;
}

export const getDetailDataPerikanan = async (id) => {
  const getDetail = await axios.get(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list/`, { params: { search : { "uuid": id }}});
  return getDetail?.data;
}

export const insertDataPerikanan = async (data) => {
  const udpate = await axios.put(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4`, data);
  return udpate?.data
}

export const updateDataPerikanan = async (id, data) => {
  const insert = await axios.post(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list/`, { search: { "uuid": id }, set: data });
  return insert?.data
}

export const deleteDataPerikanan = async (id) => {
  const deletes = await axios.delete(`https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list/${id}`,);
  return deletes?.data
}