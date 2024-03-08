let form = document.forms["jobseeker"];
let skill = document.getElementsByName("skill");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {};

  let {
    username,
    useremail,
    password,
    status,
    gender,
    skill,
    address,
    address1,
    list,
    city,
    state,
    zip,
    checkbox,
    description,
  } = form.elements;
  obj.username = username.value;
  obj.useremail = useremail.value;
  obj.password = password.value;
  obj.status = status.value;
  obj.gender = gender.value;
  obj.address = address.value;
  obj.address1 = address1.value;
  obj.list = list.value;
  obj.city = city.value;
  obj.state = state.value;
  obj.zip = zip.value;
  obj.checkbox = checkbox.value;
  obj.description = description.value;
  obj.skill = [];
  for (let i of skill) {
    if (i.checked === true) {
      obj.skill.push(i.value);
    }
  }
  console.log(obj);

  //  -------------- OR ----------------

  const formdata = new FormData(form);
  const json = Object.fromEntries(formdata);
  console.log(json);
});
