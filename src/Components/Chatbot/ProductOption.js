import React from 'react';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4CAF50; /* Change to a more vibrant color */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 7px 10px;
  margin: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #45a049; /* Slightly darker shade on hover */
    transform: scale(1.05); /* Slight zoom effect */
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px; /* Space between icon and text */
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Align buttons vertically */
  align-items: center;
`;

const ProductOptions = (props) => {
  const options = [
    { text: "Groundnut Oil", handler: props.actionProvider.handleGroundnutOil, id: 1 },
    { text: "Sesame Oil", handler: props.actionProvider.handleSesameOil, id: 2 },
    { text: "Coconut Oil", handler: props.actionProvider.handleCoconutOil, id: 3 },
    { text: "Deepam Oil", handler: props.actionProvider.handleDeepamOil, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <Button key={option.id} onClick={option.handler}>
      <LaunchRoundedIcon />{option.text}
    </Button>
  ));

  return <OptionsContainer>{optionsMarkup}</OptionsContainer>;
};

export default ProductOptions;
