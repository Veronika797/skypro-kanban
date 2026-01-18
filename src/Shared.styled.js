import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 502px) {
    overflow-y: scroll;
  }
`;
export default Wrapper;
