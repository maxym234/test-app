import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, Form, Input, UL, LI, Badge, ButtonDelete, WrapComponents } from "./style";
import { userId } from "../../utils/randomID";
import { getItemLS, setItemLS } from "../../utils/localStorage/localStorage";
import { WrapComponent, Title } from "../Main/style";

export const ItemsComponent = ({ items = [], item = {}, setItems = () => {}, setItem = () => {} }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isСhoice, setIsСhoice] = useState(false);
  const activeItem = getItemLS('activeItem') || {}
  const onSubmit = (data) => {
    const id = userId()
    items.length === 0 && setItemLS('activeItem', {...data, id})
    setItemLS('items', [...items, {...data, id}])
    setItems([...items, {...data, id}]) 
    reset();
  };
  
  const handleDelete = (e, id) => {
    e.stopPropagation()
    const newItem = items?.filter((item) => item.id !== id)
    setItemLS('items', newItem)
    console.log(items);
    item?.id === id && setItemLS('activeItem', newItem?.[0] || {})
    // item?.id === id && console.log('delet');
    setItems(newItem)
  };
  
  const handleChoose = (item) => {
    setItemLS('activeItem', item)
    setIsСhoice(item?.id);
    setItem(item)
  };
  return (
    <WrapComponent>
      <Title>Items</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Type name here..." 
        {...register("name", 
        { 
          required: "This input is required.",
          }
        )} />
        <Button type="submit">Add New</Button>
      </Form>
      {errors.name && <p style={{color: 'red'}}>{errors.name?.message}</p>}
      <UL>
        {items?.map((item) => {
          const { id, name, comments = [] } = item
          return (
            <LI key={id} id='active' onClick={() => handleChoose(item)} $isСhoice={isСhoice} $isActive={activeItem?.id === id ? true : isСhoice === id ? true : false}>
              <span>{name}</span>
              <WrapComponents>
                <Badge>{comments.length}</Badge>
                <ButtonDelete onClick={(e) => handleDelete(e, id)} >Delete</ButtonDelete>
              </WrapComponents>
            </LI>
          )
        })}
      </UL>
    </WrapComponent>
  );
};
