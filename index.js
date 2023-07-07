import { userDetail } from "./services/authService.js";


const renderCode = `
    <div>
        <img src="${userDetail.image}"><br>
        <label class="left">User ID</label>
        <label class="right">${userDetail.id}</label> <br>
        <label class="left">Username</label>
        <label class="right">${userDetail.username}</label> <br>
        <label class="left">Email</label>
        <label class="right">${userDetail.email}</label> <br>
        <label class="left">First Name</label>
        <label class="right">${userDetail.firstName}</label> <br>
        <label class="left">Last Name</label>
        <label class="right">${userDetail.lastName}</label> <br>
        <label class="left">Gender</label>
        <label class="right">${userDetail.gender}</label> <br>
    </div>
`;

document.getElementById("message").innerHTML=renderCode;