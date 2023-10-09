/** @format */

import { Helmet } from "react-helmet-async";

const useHelmet = (routeName) => {
  return (
    <Helmet>
      <title>G.Shop | ${routeName}</title>
    </Helmet>
  );
};
export default useHelmet;
