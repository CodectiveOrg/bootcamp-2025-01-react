import { PropsWithChildren, useContext } from "react";

import { Slide, ToastContainer } from "react-toastify";

import { ThemeContext } from "./ThemeProvider.tsx";

type Props = PropsWithChildren;

function ToastProvider({ children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Slide}
      />
    </>
  );
}

export default ToastProvider;
