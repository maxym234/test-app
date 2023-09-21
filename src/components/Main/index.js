import { useState } from "react";
import { CommentsComponent } from "../Commnets";
import { ItemsComponent } from "../Items";
import { Main, Wrap, WrapComponents } from "./style";
import { getItemLS } from "../../utils/localStorage/localStorage";

export const MainComponent = ({ ...props }) => {
  const itemsLS = getItemLS('items') || []
  const activeItemLS = getItemLS('activeItem') || {}
  const [item, setItem] = useState({})
  const [items, setItems] = useState([]);
  // console.log(items, 'main items');
  return (
    <Wrap>
        <Main>
          <WrapComponents>
            <ItemsComponent items={itemsLS} item={activeItemLS} setItems={setItems} setItem={setItem} />
            <CommentsComponent items={items} item={activeItemLS} setItems={setItems} setItem={setItem} />
          </WrapComponents>
        </Main>
    </Wrap>
  );
};
