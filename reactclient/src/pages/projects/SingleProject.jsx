import React from "react";
import Card from "../../components/styled/Card";

const SingleProject = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">New Project</h1>
        <Card className=" divide-gray-200">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            temporibus ducimus ut itaque dolores repellendus, ipsum id voluptas
            molestias pariatur esse minima dolore beatae ad adipisci earum
            possimus vero accusantium?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SingleProject;
