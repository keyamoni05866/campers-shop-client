// import swal from "sweetalert";
import { toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/api/api";
import { TProduct } from "../../types";

import swal from "sweetalert2";

import UpdateProductModal from "./UpdateProductModal";

const ProductsTable = () => {
  const { data: products } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  // console.log(products);

  // delete operation
  const handleDelete = async (productDeleteId: string) => {
    // console.log(productDeleteId);
    // deleteProduct(productDeleteId);
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then(async (result: any) => {
        if (result.isConfirmed) {
          const res = await deleteProduct(productDeleteId);
          toast.success(res.data?.message);
        }
      });
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
            <tr key={product._id} className="text-xs md:text-sm lg:text-base">
              <td className="p-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask bg-base-300 mask-squircle h-14 w-14">
                      <img src={product.image} alt="Product Image" />
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

                {/* <UpdateProductModal {...product}> */}
                <button className="me-2 mb-2 btn btn-xs lg:btn-sm">
                  Update{" "}
                </button>
                {/* </UpdateProductModal> */}

                {/* <label
                  className="me-2 mb-2 btn btn-xs lg:btn-sm"
                  htmlFor={`${product._id}`}
                > */}
                {/* <Link to={`/upd ateProduct/${product._id}`}> */}
                {/* <UpdateProductModal> */}
                {/* <Link to={`/updateProduct/${product._id}`}>Update</Link> */}
                {/* </UpdateProductModal> */}
                {/* </Link> */}
                {/* </label> */}
                {/* <UpdateProductModal></UpdateProductModal> */}

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
