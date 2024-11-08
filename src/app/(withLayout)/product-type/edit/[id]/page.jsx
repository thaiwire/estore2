import { EditProductType } from "@/screens/product-type/edit";

const EditProductTypePage = async ({ searchParams }) => {
  return (
    <>
      <EditProductType searchParams={searchParams} />
      {/* <h1>Edit Product Type </h1> */}
    </>
  );
};

export default EditProductTypePage;
