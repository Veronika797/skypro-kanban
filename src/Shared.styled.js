import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;

  @media screen and (max-width: 376px) {
    overflow-y: scroll;
  }
`;
export default Wrapper;
