async function get_Data() {
  let response = await fetch("#any link");
  let data = await response.json();
  console.log(data);
}
get_Data();