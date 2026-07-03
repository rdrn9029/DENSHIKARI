const month = new Date().getMonth() + 1;

document.getElementById("calendarBtn").textContent =
    `${month}月のカレンダー`;

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTeacher);

function addTeacher() {

    const name =
        document.getElementById("nameInput").value;

    if (name === "") {
        alert("名前を入力してください");
        return;
    }

    const teacher = document.createElement("div");

    teacher.className = "teacher";
    teacher.textContent = name;

    document.getElementById("teacherList")
        .appendChild(teacher);

    document.getElementById("nameInput").value = "";
}
