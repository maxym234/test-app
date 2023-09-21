import { useForm } from "react-hook-form";

import { Button, Form, Comment, ColorCard, Text, InputColor, InputArea } from "./style";
import { commentId } from "../../utils/randomCommentId";
import { setItemLS } from "../../utils/localStorage/localStorage";
import { Title, WrapComponent } from "../Main/style";

export const CommentsComponent = ({ items = [], item = {}, setItems = () => {}, setItem = () => {} }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    const id = commentId() 
    const newItemS = items?.map(el => el?.id === item?.id ? {...el, comments: [...item?.comments || [], {...data, id}]} : el)
    setItemLS('items', newItemS)
    setItems(newItemS);
    newItemS.length > 0 && setItemLS('activeItem', {...item, comments: [...item?.comments || [], {...data, id: `${item?.id}-${id}`}]})
    setItem({...item, comments: [...item?.comments || [], {...data, id: `${item?.id}-${id}`}]})
    reset()
  }
  return (
    <WrapComponent>
      <Title>Comments #{item.id}</Title>
      {item?.comments?.map((element) => {
        const { id = '', color = '', body = ''} = element
        return(
          <Comment key={id}>
            <ColorCard $background={color} />
            <Text>{body}</Text>
          </Comment>
        )
      })}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputColor type="color" {...register("color")} />
        <InputArea placeholder="Type comment here..." {...register("body", { required: "This input is required." })} />
        <Button type="submit">Add New</Button>
      </Form>
      {errors.body && <p style={{color: 'red'}}>{errors.body?.message}</p>}
    </WrapComponent>
  );
};
