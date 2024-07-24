import { ReactNode } from "react";

// ReactNode allows us to pass HTML content as a prop
// Children allows us to define the prop variable inside component <h>here</h>
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
