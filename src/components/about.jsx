import React from "react";
import PageHeader from "../common/pageHeader";

export const About = () => {
  return (
    <div className="container">
      <PageHeader titleText={`About GreenLeaf App`} />
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
