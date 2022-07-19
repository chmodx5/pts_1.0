import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/styled/Button";
import Card from "../../components/styled/Card";
import TextInput from "../../components/styled/TextInput";
import SelectInput from "../../components/styled/SelectInput";
import InputLabel from "../../components/styled/InputLabel";
import moment from "moment";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto space-y-4 md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">All Projects</h1>
          {projects &&
            projects.map((project) => {
              return (
                <Card key={project.ProjectId} className=" divide-gray-200">
                  <div className="px-5 py-7">
                    <h1>{project.Name}</h1>
                    <p>
                      Expected Start date :
                      {moment(project.ExpectedStartDate).format("MMM Do YY")}
                    </p>
                    <p>
                      Expected Ene date :
                      {moment(project.ExpectedEndDate).format("MMM Do YY")}
                    </p>
                    <p>customer id : {project.CustomerId}</p>
                  </div>
                </Card>
              );
            })}

          <br />
        </div>
      </div>
    </div>
  );
};

export default Projects;
