import { chain_cloud } from "../../declarations/chain_cloud";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with chain_cloud actor, calling the greet method
  const greeting = await chain_cloud.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
