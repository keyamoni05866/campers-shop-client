const RecommendedProducts = () => {
  return (
    <div className="mt-12 mb-28 px-3 md:px-10  lg:px-16  ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] ">Explore Our</p>

        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            <span className="primary-color">Recommended</span> Products
          </h2>
          <button className="custom-outline-btn">View All</button>
        </div>
      </div>

      {/* Products Card */}

      <div className="mt-10 card-grid gap-4 mx-[20px]">
        <div className=" card bg-base-100 image-full max-w-[370px] shadow-xl">
          <figure>
            <img src="https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210659.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full max-w-[370px]   shadow-xl">
          <figure>
            <img src="https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210659.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 max-w-[370px] image-full   shadow-xl">
          <figure>
            <img src="https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210659.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 image-full max-w-[370px] shadow-xl">
          <figure>
            <img src="https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210659.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full max-w-[370px] shadow-xl">
          <figure>
            <img src="https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210659.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
