import "../style.css";

export default function Card({
  id,
  personal_info,
  employee_name,
  image,
  employee_salary,
  employee_age,
}) {
  const { address, phone_number, zipcode } = personal_info;
  const { profile_image, description } = image;

  const element = document.createElement("div");
  element.className = "card";
  element.innerHTML = `
                <img src=${profile_image} alt="Lamp" class='profile_image'>

                <p class='name'>${employee_name}</p>
                <p class=''>$${employee_salary} per year</p>
                <p>${employee_age} y.o.</p>
            `;

  return element;
}
