import React, { useState } from 'react';
import Table from '../Components/Table';
import data from '../assets/Data.json';
import MultiSelectDropdown from '../Components/MultiSelectDropdown.jsx';

export default function Emp_Data() {
  const headers = Object.keys(data.employees[0]);


  const [selectedDept, setSelectedDept] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedPro, setSelectedPro] = useState([]);
  const [filteredData, setFilteredData] = useState(data.employees);

  const allDepartments = [...new Set(data.employees.map(emp => emp.Department))];
  const allRoles = [...new Set(data.employees.map(emp => emp.Role))];

  const roleOptions =
    selectedDept.length > 0
      ? [...new Set(
          data.employees
            .filter(emp => selectedDept.includes(emp.Department))
            .map(emp => emp.Role)
        )]
      : allRoles;

  const projectOptions = (() => {
    let filtered = data.employees;

    if (selectedDept.length > 0) {
      filtered = filtered.filter(emp => selectedDept.includes(emp.Department));
    }
    if (selectedRole.length > 0) {
      filtered = filtered.filter(emp => selectedRole.includes(emp.Role));
    }

    return [...new Set(filtered.map(emp => emp.Project))];
  })();

const handleFilter = () =>{
  const filtered = data.employees.filter((emp) => {
    const deptMatch =
      selectedDept.length == 0 || selectedDept.includes(emp.Department);
    const roleMatch =
      selectedRole.length == 0 || selectedRole.includes(emp.Role);
    const proMatch =
      selectedPro.length == 0 || selectedPro.includes(emp.Project);
    return deptMatch && roleMatch && proMatch;
  });


  setFilteredData(filtered);

  const filteredRoles = [...new Set(filtered.map((emp) => emp.Role))];
  const filteredProjects = [...new Set(filtered.map((emp) => emp.Project))];

  if (selectedDept.length > 0 && selectedRole.length == 0) {
    setSelectedRole(filteredRoles);
  }
  if (selectedDept.length > 0 && selectedPro.length == 0) {
    setSelectedPro(filteredProjects);
  }
};


  const handleClear = () => {
    setSelectedDept([]);
    setSelectedRole([]);
    setSelectedPro([]);
    setFilteredData(data.employees);
  };

  return (
    <div className='head'>
      <h2 id="emp">Employee Details</h2>

      <div className="select" style={{ display: 'flex', gap: '10px' }}>

        <MultiSelectDropdown
          options={allDepartments}
          selected={selectedDept}
          setSelected={(dept) => {
            setSelectedDept(dept);
            setSelectedRole([]); 
            setSelectedPro([]);
          }}
          placeholder="Departments"
        />

      
        <MultiSelectDropdown
          options={roleOptions}
          selected={selectedRole}
          setSelected={(roles) => {
            setSelectedRole(roles);
            setSelectedPro([]); 
          }}
          placeholder="Roles"
        />

        
        <MultiSelectDropdown
          options={projectOptions}
          selected={selectedPro}
          setSelected={setSelectedPro}
          placeholder="Projects"
        />
        <button className='fil' onClick={handleFilter}>Filter</button>
        <button className='clr' onClick={handleClear}>Clear</button>
      </div>

      <Table data={filteredData} headers={headers} />
    </div>
  );
}
