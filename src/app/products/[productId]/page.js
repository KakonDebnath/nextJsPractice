const DynamicProductPage = ({ params, searchParams }) => {
  const productId = params.productId;
  console.log(searchParams);
  return (
    <div>
      <h>Dynamic Product Page ProductId: {productId}</h>
      <br />
      <h>Dynamic Product Page Query Param: {searchParams.hello}</h>
    </div>
  );
};

export default DynamicProductPage;
