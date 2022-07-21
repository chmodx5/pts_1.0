import React, { useState } from "react";
import Button from "../../components/styled/Button";
import Card from "../../components/styled/Card";
import TextInput from "../../components/styled/TextInput";
import SelectInput from "../../components/styled/SelectInput";
import InputLabel from "../../components/styled/InputLabel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const [project, setProject] = useState({
    Name: "",
    ExpectedStartDate: "",
    ExpectedEndDate: "",
    CustomerId: "",
  });
  const [customerId, setCustomerId] = useState("");
  const [customers, setCustomers] = useState([]);

  let navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((res) => {
        setCustomers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createNewProject = (e) => {
    e.preventDefault();
    // console.log(project);
    axios
      .post("http://localhost:5000/api/projects", {
        Name: project.Name,
        ExpectedStartDate: project.ExpectedStartDate,
        ExpectedEndDate: project.ExpectedEndDate,
        CustomerId: customerId,
      })
      .then((res) => {
        navigate(`/projects/${res.data.ProjectId}`, {
          state: { project: res.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">New Project</h1>
      <Card className=" divide-gray-200">
        <form onSubmit={createNewProject}>
          <div className="px-5 py-7">
            <InputLabel>Name</InputLabel>
            {project.Name}
            <TextInput
              onChange={(e) => {
                setProject({ ...project, Name: e.target.value });
              }}
              value={project.Name}
              type="text"
            />
            <InputLabel>Expected Start</InputLabel>
            <TextInput
              onChange={(e) => {
                setProject({
                  ...project,
                  ExpectedStartDate: e.target.value,
                });
              }}
              type="date"
            />
            <InputLabel>Expected End</InputLabel>
            <TextInput
              type="date"
              onChange={(e) => {
                setProject({
                  ...project,
                  ExpectedEndDate: e.target.value,
                });
              }}
            />
            {/* dropdown */}
            <InputLabel>Customer</InputLabel>
            {customers.length > 0 ? (
              <SelectInput
                onChange={(e) => {
                  setCustomerId(e.target.value);
                }}
                value={customerId}
                type="select"
              >
                <option value="">Select Customer{customerId}</option>
                {customers &&
                  customers.map((customer) => (
                    <option value={customer.CustomerId}>{customer.Name}</option>
                  ))}
              </SelectInput>
            ) : (
              <div>Loading...</div>
            )}

            <Button type="submit">
              <span className="inline-block mr-2">Create</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewProject;
