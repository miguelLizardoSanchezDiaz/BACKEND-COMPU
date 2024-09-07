import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'default', label: 'Ordenar por defecto' },
  { value: 'price_popular', label: 'Ordenar por popularidad' },
  { value: 'price_desc', label: 'Ordenar por precio: de menor a mayor' },
  { value: 'price_asc', label: 'Ordenar por precio: de mayor a menor' }
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: '41px',
    border: '1px solid #b8b8b8',
    display: 'flex',
    alignItems: 'center',
    padding: '0 6px',
    whiteSpace: 'nowrap',
    color: '#666',
    backgroundColor: '#fff',
    fontSize: '14px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0', 
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '100%', 
  }),
  option: (provided, state) => ({
    ...provided,
    /*backgroundColor: state.isSelected ? '#f0f0f0' : '#CACACA',*/
    backgroundColor: 'rgba(202, 202, 202, 0.7)',
    color: '#666',
    padding: '10px',
    fontSize: '14px'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#666',
    fontSize: '14px'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#666',
    fontSize: '14px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
};

const CustomSelect = () => (
  <Select
    options={options}
    styles={customStyles}
    defaultValue={options[0]}
    isSearchable={false}
  />
);

export default CustomSelect;
