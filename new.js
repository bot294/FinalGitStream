async function get_data() {
  let response = await fetch("#any link");
  let data = await response.json();
  console.log(data);
}
get_data();