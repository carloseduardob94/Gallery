import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;

  > img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;

    border-radius: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CCC;
  border: none;
  border-radius: 5px;

  color: red;
  font-weight: bold;
  width: 20px;
  height: 20px;

  cursor: pointer;
  margin: auto;
  margin-top: 10px;
  

  &:hover {
    filter: brightness(.9);
  }
`;