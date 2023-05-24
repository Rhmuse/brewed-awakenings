import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    e => {
        const itemClicked = e.target;

        if (itemClicked.id.startsWith("employee")) {
            const [, employeePrimaryKey] = itemClicked.id.split("--")

            let matchingEmployee = null;
            for (const employee of employees) {
                if (employee.id === parseInt(employeePrimaryKey)) {
                    matchingEmployee = employee;
                }
            }

            let employeeOrders = [];
            for (const order of orders) {
                if (order.employeeId === matchingEmployee.id) {
                    employeeOrders.push(order);
                }
            }

            if (matchingEmployee !== null) {
                window.alert(`${matchingEmployee.name} sold ${employeeOrders.length} products`)
            } else {
                window.alert("Employee not found!")
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html;
}

