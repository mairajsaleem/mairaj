import { Helmet, HelmetProvider } from "react-helmet-async";

type HeadComponentPropsType = {
  title: string;
  description: string;
};

export const HeadComponent = ({
  title,
  description,
}: HeadComponentPropsType) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    </HelmetProvider>
  );
};
