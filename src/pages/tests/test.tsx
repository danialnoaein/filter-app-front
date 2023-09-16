import { useParams } from "react-router-dom";

const Test = () => {
  const params = useParams();
  console.log(params);

  return <>TEST</>;
};

export default Test;
