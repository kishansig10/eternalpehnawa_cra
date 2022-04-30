import ProductsComponent from "../ProductsComponent";
import {
  useGetProductCategoryQuery,
  useGetProductsQuery,
} from "../../../redux/services/products";
import { useSelector } from "react-redux";
import { applyFilter } from "../../../utils/utils";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const SuitContainer = () => {
  //useGetProductsQuery(200);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  console.log("xyz", id);
  const { data, error, isLoading } = useGetProductCategoryQuery(id);
  const filter = useSelector((state: any) => state.filter);
  const filteredData = applyFilter(data, filter);
  return (
    <ProductsComponent
      data={filteredData}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default SuitContainer;
