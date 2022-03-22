import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading
    className='loading'
    type={type}
    color={color}
    height={667}
    width={375}
  />
);

export default Loading;
