document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(event){
  event.preventDefault();
  const form = event.target;
  const name = form.elements["name"].value.trim() || "Client";
  const caseType = form.elements["caseType"].value;
  const msg = document.getElementById("formMsg");
  msg.textContent = `Noted, ${name}. Your request for "${caseType}" has been filed in the Supreme Court of Vibes. Please keep 1 croissant ready.`;
  form.reset();
  return false;
}
