import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "this is the Chat App called Chatpro",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
