import { Aside, Comment, Title, Wrap } from "./style";

export const LeftComponent = ({ ...props }) => {

  return (
    <Wrap>
        <Aside>
            <Title>DAYRY APP</Title>
            <Comment>Comment whit no sense</Comment>
        </Aside>
    </Wrap>
  );
};
