const form = document.querySelector(".queue-form");
let queueName = ''; 

form.addEventListener("submit", handleSubmit);

export const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { name }
  } = event.currentTarget;

  if (name.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Queue Name: ${name.value}`);
  queueName = name.value;
  console.log(queueName)
  event.currentTarget.reset();
  return queueName
}