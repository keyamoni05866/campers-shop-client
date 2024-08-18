import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/api/api";
import { TProduct } from "../../types";

const ProductsTable = () => {
  const { data: products } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  // console.log(products);

  // delete operation
  const handleDelete = (productDeleteId: string) => {
    // console.log(productDeleteId);
    deleteProduct(productDeleteId);
  };

  return (
    <table className="table-xs md:table-md lg:table lg:mx-10  ">
      {/* head */}
      <thead className="">
        <tr className="text-sm md:text-base lg:text-lg">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}

        {products?.data && products?.data?.length > 0 ? (
          products?.data?.map((product: TProduct) => (
            <tr className="text-xs md:text-sm lg:text-base">
              <td className="p-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span>{product.name}</span>
              </td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                {/* <div className=""> */}
                <button className="me-2 btn btn-outline btn-success mb-2  btn-xs lg:btn-sm">
                  Details
                </button>
                <button className="me-2 mb-2  btn  btn-xs lg:btn-sm">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn text-white bg-[#ff0000] hover:bg-[#c51313]  btn-xs lg:btn-sm"
                >
                  Delete
                </button>
                {/* </div> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-3">
              No Product Found!!! Please Add
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductsTable;
