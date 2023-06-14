import React from "react";
import "./_maincontainer.scss";
import Sidebar from "../Sidebar/Sidebar";

const MainContainer = () => {
  return (
    <div>
      <section className="main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
