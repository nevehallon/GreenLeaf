import React from "react";
import PageHeader from "../common/pageHeader";

export const Home = () => {
  return (
    <div className="container text-center">
      <PageHeader titleText={`GreenLeaf App Home Page`} />
      {/*           ${(<i className="fab fa-envira"></i>)}  */}
      <div className="row">
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at et rerum? Quisquam, voluptas autem
            suscipit modi repudiandae possimus, commodi totam eos illo accusantium vel minima velit atque veniam
            doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};
