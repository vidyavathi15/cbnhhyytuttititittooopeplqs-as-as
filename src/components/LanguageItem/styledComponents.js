import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-styled-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const ButtonEl = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  color: ${props => props.color};
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 800;
  border: 1px solid #db1c48;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${props => props.bgColor};
`
