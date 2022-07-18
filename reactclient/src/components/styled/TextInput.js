import styled from "styled-components";

const TextInput = styled.input.attrs(({ type }) => ({
  className: `border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full
  `,
}))``;

export default TextInput;
