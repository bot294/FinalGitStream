async function get_data() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}
get_data();