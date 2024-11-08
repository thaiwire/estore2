import ProductTypes from "@/screens/product-type";
import { getProductTypes } from "@/actions/productTypeAction";
import ProductType from "@/screens/product-type";

const ProductTypeManagement = async () => {
  const productTypes = await getProductTypes();
  return (
    <div>
      <ProductTypes productTypes={productTypes} />
    </div>
  );
};

export default ProductTypeManagement;
