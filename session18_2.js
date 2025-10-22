let courseList = [
    {
        id: 1,
        name: "HTML",
        complete: "false"
    },
    {
        id: 2,
        name: "CSS",
        complete: "false"
    },
    {
        id: 3,
        name: "Basic of javascript",
        complete: "false"
    },
    {
        id: 4,
        name: "Node package Manager (npm)",
        complete: "false"
    },
    {
        id: 5,
        name: "Git",
        complete: "false"
    },
];
while (true) {
    let userInput = prompt("Please input C/R/U/D/E");
    if (userInput === "C") {
        let name = prompt("please input new course");
        let complete = prompt("please choose true or false");

        let course = {
            id: Math.random(),
            name: name,
            complete: complete,
        };
        courseList.push(course);
        displayCourse();

    } else if (userInput === "R") {
        displayCourse();

    } else if (userInput === "U") {
        let name = prompt("Please input course name that you want to update");
        let index = courseList.findIndex(function (el, i) {
            return el.name === name;
        });
        if (index === -1) {
            console.log("not found");
        } else {
            let complete = prompt("please choose true or false");
            courseList[index].complete = complete;
            displayCourse();
        }

    } else if (userInput === "D") {
        let name = prompt("Please input course name that you want to delete");
        let index = courseList.findIndex(function (el, i) {
            return el.name === name;
        });
        if (index === -1) {
            console.log("not found");
        } else {
            courseList.splice(index, 1);
            displayCourse();
        }
    } else if (userInput === "E") {
        console.log("Thanks for using Rikkei Academy");
        break;

    } else {
        console.log("invalid comand");
        break;
    }
}
function displayCourse() {
    console.log("Your course List:");
    for (let index in courseList) {
        index = Number(index);
        console.log( `${index + 1}.`, courseList[index].name);
        console.log("complete:", courseList[index].complete);
        console.log("-------------------");
    }
}

