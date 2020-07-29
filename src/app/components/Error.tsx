import React from "react";

export interface IErrorComponentProps {
  message: string;
}
// TODO: Design a proper error box
export const ErrorComponent = ({
  message,
}: IErrorComponentProps): JSX.Element => (
  <>
    <div className='text-center'>{message}</div>
  </>
);
