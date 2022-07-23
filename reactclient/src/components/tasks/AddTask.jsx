import React, { useState, useEffect } from "react";
import Button from "../../components/styled/Button";
import Card from "../../components/styled/Card";
import TextInput from "../../components/styled/TextInput";
import SelectInput from "../../components/styled/SelectInput";
import InputLabel from "../../components/styled/InputLabel";
import axios from "axios";

const AddTask = () => {
  const [task, setTask] = useState({
    Name: "",
    ExpectedStartDate: "",
    ExpectedEndDate: "",
    CustomerId: "",
  });
  const [teams, setTeams] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teams")
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const createTask = (e) => {
    e.preventDefault();
    // console.log(task);
    axios
      .post("http://localhost:5000/api/tasks", {
        Name: task.Name,
        ExpectedStartDate: task.ExpectedStartDate,
        ExpectedEndDate: task.ExpectedEndDate,
        CustomerId: customerId,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className=" divide-gray-200">
        <form onSubmit={createTask}>
          <div className=" py-7">
            <InputLabel>Name</InputLabel>
            {task.Name}
            <TextInput
              onChange={(e) => {
                setTask({ ...task, Name: e.target.value });
              }}
              value={task.Name}
              type="text"
            />
            <InputLabel>Expected Start</InputLabel>
            <TextInput
              onChange={(e) => {
                setTask({
                  ...task,
                  ExpectedStartDate: e.target.value,
                });
              }}
              type="date"
            />
            <InputLabel>Expected End</InputLabel>
            <TextInput
              type="date"
              onChange={(e) => {
                setTask({
                  ...task,
                  ExpectedEndDate: e.target.value,
                });
              }}
            />

            {teams ? (
              <SelectInput type="select">
                <option value="">Select Team</option>
                {teams.map((team) => (
                  <option key={team.TeamId} value={team.TeamId}>
                    {team.Name}
                  </option>
                ))}
              </SelectInput>
            ) : (
              <div>Loading...</div>
            )}
            {/* dropdown */}
            {/* <InputLabel>Customer</InputLabel>
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
            )} */}

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
      </div>
    </div>
  );
};

export default AddTask;
