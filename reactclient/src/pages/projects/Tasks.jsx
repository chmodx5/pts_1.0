import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/styled/Button";
import Card from "../../components/styled/Card";
import TextInput from "../../components/styled/TextInput";
import SelectInput from "../../components/styled/SelectInput";
import InputLabel from "../../components/styled/InputLabel";

const Tasks = () => {
  const [projects, setProjects] = useState([]);
  const [task, SetTask] = useState({
    name: "",
    expectedStart: "",
    expectedEnd: "",
    customer: "",
  });
  const [selectedProject, setSelectedProject] = useState("");
  const [customers, setCustomers] = useState([]);

  //when the page loads we fetch the projects list
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get all customers loads when the page loads
  useEffect(() => {
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
  //  adding a new service

  const addNewTask = (e) => {
    //prevent the page from refreshing
    e.preventDefault();
    //post the new task to the server
    axios
      .post("http://localhost:5000/api/tasks", {
        Name: task.name,
        ExpectedStart: task.expectedStart,
        ExpectedEnd: task.expectedEnd,
        Customer: task.customer,
        Project: selectedProject,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("add new task");
  };
  return (
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 className="font-bold text-center text-2xl mb-5">New Task</h1>
      <Card className=" divide-gray-200">
        <div className="px-5 py-7">
          {/* dropdown */}
          <InputLabel>Select Project</InputLabel>
          <SelectInput
            type="select"
            onChange={(e) => {
              setSelectedProject(e.target.value);
            }}
          >
            <option value="">select project</option>
            {/* check if the projects list is empty */}
            {projects &&
              projects.map((project) => (
                <option key={project.ProjectId} value={project.ProjectId}>
                  {project.Name}
                </option>
              ))}
          </SelectInput>
        </div>
      </Card>
      <br />

      <h1 className="font-bold text-center text-2xl mb-5">
        {projects &&
          projects.map((project) => (
            <span key={project.ProjectId}>
              {project.ProjectId.toString() == selectedProject.toString() &&
                project.Name}
            </span>
          ))}
      </h1>

      <Card className=" divide-gray-200">
        {task.expectedStart}
        <form onSubmit={addNewTask}>
          <div className="px-5 py-7">
            <InputLabel>Name</InputLabel>
            <TextInput
              onChange={(e) => {
                SetTask({ ...task, name: e.target.value });
              }}
              type="text"
            />
            <InputLabel>Expected Start</InputLabel>
            <TextInput
              onChange={(e) => {
                SetTask({ ...task, expectedStart: e.target.value });
              }}
              type="date"
            />
            <InputLabel>Expected End</InputLabel>
            <TextInput
              onChange={(e) => {
                SetTask({ ...task, expectedEnd: e.target.value });
              }}
              type="date"
            />

            {/* dropdown */}
            <InputLabel>Customer</InputLabel>
            <SelectInput
              onChange={(e) => {
                SetTask({ ...task, customer: e.target.value });
              }}
              type="select"
            >
              <option value="">Select Customer</option>
              {customers &&
                customers.map((customer) => (
                  <option key={customer.CustomerId} value={customer.CustomerId}>
                    {customer.Name}
                  </option>
                ))}
            </SelectInput>

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

export default Tasks;
