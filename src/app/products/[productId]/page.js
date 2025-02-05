import React from "react";

const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);
  //  console.log(productId);
  return (
    <div>
      <h2>Dynamic Product Page: {productId}</h2>
    </div>
  );
};

export default DynamicProductPage;
