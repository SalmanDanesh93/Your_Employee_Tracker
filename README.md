# Your_Employee_Tracker
User Story:

AS A business owner

I WANT to be able to view and manage the departments, roles, and employees in my company

SO THAT I can organize and plan my business

Acceptance Criteria:

GIVEN a command-line application that accepts user input,

WHEN I start the application,

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

WHEN I choose to view all departments,

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles,

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees,

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

WHEN I choose to add a department,

THEN I am prompted to enter the name of the department and that department is added to the database.

WHEN I choose to add a role,

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.

WHEN I choose to add an employee,

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

WHEN I choose to update an employee role,

THEN I am prompted to select an employee to update and their new role and this information is updated in the database.

ScreenShots:

The image below shows the creation of the Database and the tables included.

![schema](https://user-images.githubusercontent.com/107973681/192300427-3bac647d-a49d-431f-9ad2-c5c12203872c.png)

The image below shows the data that is added to each of the tables.

![seeds 0](https://user-images.githubusercontent.com/107973681/192300535-bac5b4f2-f6fe-4b15-9123-38bb3a7beb27.png)

The image below shows the creation of connection with mysql2.

![1 mysql connection](https://user-images.githubusercontent.com/107973681/192300581-f8dbdafb-a6aa-4e3a-9824-d221bd884711.png)


The image below shows the proimpted questions in server.js that the user will interact with.

![2 prompt questions](https://user-images.githubusercontent.com/107973681/192300644-1e66b085-d0f3-4f38-9c09-7fa0a0c48a7f.png)


The image below shows the functions that will be called on once the user selects something from the table.

![3 prompt question functions](https://user-images.githubusercontent.com/107973681/192300727-6396169e-6f6a-4771-b193-94f30f2d986c.png)


The image below shows the creation of the employee view and department view.

![4 employee   department view](https://user-images.githubusercontent.com/107973681/192300890-7c41ed8b-f344-494a-b40b-ccc82454d355.png)


The image below shows the function to add role to the database.

![5 role add](https://user-images.githubusercontent.com/107973681/192300975-39016255-ce66-4185-a05f-7834df016c90.png)


The image below shows the function to update employee information.

![6 employee update](https://user-images.githubusercontent.com/107973681/192301103-4c13d188-d448-48b2-a7fe-b22f3e4b3d0c.png)


The image below shows the prompt the user will see when initiating the application and the Employee View.

![7 Prompt](https://user-images.githubusercontent.com/107973681/192301199-73f810ca-6934-418d-b759-71c64871845e.png)


The image below shows the tables for Department View & Role View.

![8 Prompt](https://user-images.githubusercontent.com/107973681/192301354-1a943799-288c-4d0f-8025-e6fce3463835.png)
