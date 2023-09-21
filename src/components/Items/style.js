import styled from 'styled-components';
import { ButtonUI } from '../../UI/Button';

export const Form = styled.form`
  margin: 10px 0;
  display: flex;
  height: 38px;
`;

export const Input = styled.input`
  display: block;
  margin: 0 10px;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
  background-color: #17a2b8;
  border-color: #17a2b8;
  &:hover {
    color: #fff;
    background-color: #138496;
    border-color: #117a8b;
  }
`;

export const UL = styled.ul`
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
`;

export const LI = styled.li`
  display: flex;
  align-items: center!important;
  justify-content: space-between!important;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
  border-left: 4px solid deeppink;
  border-left: ${({ $isActive }) =>
    $isActive ? '4px solid deeppink' : '1px solid rgba(0,0,0,.125)'};
  &:first-child{
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  &:last-child{
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  & #active {
    border-left: 4px solid deeppink !important;
  }
`;

export const WrapComponents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  color: #fff;
  background-color: #17a2b8;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
`;

export const ButtonDelete = styled(ButtonUI)`
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545;
  &:hover {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
`;