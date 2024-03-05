const DynamicProductPage = ({ params }) => {
  const productId = params.productId;
  return (
    <div>
      <h>Dynamic Product Page ProductId: {productId}</h>
    </div>
  );
};

export default DynamicProductPage;
