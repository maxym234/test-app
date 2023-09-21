import styled from 'styled-components';
import { ButtonUI } from '../../UI/Button';

export const Comment = styled.div`
  display: flex;
  align-items: flex-start;
  border: none;
  margin: 10px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
`;

export const ColorCard = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ $background }) =>
    $background ? $background : 'black'};
`;

export const Text = styled.pre`
  padding-left: 10px;
  font-family: monospace;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 87.5%;
  margin: 0;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 62px;
`;

export const InputColor = styled.input`
  width: 70px;
  height: 60px;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const InputArea = styled.textarea`
  display: block;
  width: 317px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  font-family: sans-serif;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin: 0 10px;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;


export const Button = styled(ButtonUI)`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  &:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

