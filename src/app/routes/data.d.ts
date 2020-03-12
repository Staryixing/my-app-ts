import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { WrappedFormUtils } from "antd/lib/form/Form";
export default interface CommonType extends RouteComponentProps {
  dispatch: Dispatch,
  form: WrappedFormUtils
}