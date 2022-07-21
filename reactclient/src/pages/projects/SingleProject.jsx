import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/styled/Card";
import axios from "axios";

const SingleProject = () => {
  const [project, setProject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then((res) => {
        console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-xl">
      <h1 className="font-bold text-center text-2xl mb-5 capitalize">
        {project.Name}
      </h1>
      <Card className=" divide-gray-200">
        <div className="px-5 py-7">
          <h1>{project.Name} - Tasks</h1>
        </div>
        <div className="px-6 py-4 grid grid-cols-2">
          <div className="">
            <h3>Add task</h3>
            <ul>
              <li>tasks</li>
            </ul>
          </div>
          <div>
            <h3>All Tasks</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleProject;
