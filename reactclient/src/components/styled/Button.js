// import styled from "styled-components";

// const Button = styled.button.attrs(({ type }) => ({
//   className: `block rounded-xl transition-all ease-in  w-full py-2 capitalize
//   ${
//     type === "nav"
//       ? " hover:text-primary-main"
//       : "bg-primary-main hover:bg-primary-main"
//   }
//   `,
// }))``;

// export default Button;
import styled from "styled-components";

const Button = styled.button.attrs(({ type }) => ({
  className: `transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block
  ${
    type === "nav"
      ? " hover:text-primary-main"
      : "bg-primary-main hover:bg-primary-main"
  }
  `,
}))``;

export default Button;
