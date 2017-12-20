import React from 'react';
import PropTypes from 'prop-types';
import styled /*, { css }*/ from 'styled-components';
// import { Link } from 'react-router-dom';

const Test = () => {
  return  <p>this is cool</p>
}

const StyledTest = styled(Test)`
  background: red;
  background-color: rgba(21,19,21,0.83);
  border-radius: 8px;
  color: white;
  height: ${props => props.small ? 40 : 60}px;
  width: ${props => props.small ? 60 : 120}px;
`;

const StyledDiv = styled.div`
  background-color: rgba(218,219,221,0.3);
`;

const Button = styled.button`
  background-color: rgba(21,19,21,0.83);
  border-radius: 10px;
  color: white;
  height: ${props => props.small ? 30 : 40}px;
  width: ${props => props.small ? 60 : 90}px;

  &:hover {
    background-color: rgba(21,19,21,0.64);
  }
`;

const Item = (props) => (
  <div className="item-div" style={{ border: "1px solid black" }}>
    <StyledTest />
    { console.log('Item props: ', props) }
    {/* ant design component here nb??? */}
    <StyledDiv> 
      Item: {props.item.name}
      <br/>
      Stock: {props.item.stock}
      <br/>
      Id: {props.item.id}
      <br />
      <input type="number" min={1} max={props.item.stock} />
      <br/>

      <Button
        small={false}
        onClick={() => props.onClickFn(props.item, 3)}
        disabled={props.item.stock < 1}
      >
        {window.location.pathname === "/cart" ? "Remove From Cart" : "Add to cart"}
      </Button>
    </StyledDiv>
    {( 
      window.location.pathname === "/cart" && 
      <div>
        <p>Amt in Cart: {props.item.amt}</p>
        <input type="number" min={0} max={props.item.amt} defaultValue={props.item.amt} />

        <Button 
          onClick={() => props.onClickFn(props.item, 3)}
        >
          Remove From Cart
        </Button>
      </div>
    )}
  </div>
);

Item.propTypes = {
  onClickFn: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default Item;