const response = {
  name: "s나는 쓸데없는값",
  name1: "s나는 쓸데없는값",
  data: {
    access_key1: "sdifnvionwoiejfwoiejfwef",
    name2: "s나는 쓸데없는값",
    name3: "s나는 쓸데없는값",
    name4: "s나는 쓸데없는값",
    name5: "s나는 쓸데없는값",
    refresh_key: "asidfjsoidvniosndoijdviojsdviojewvoinwef",
  },
};

console.log(response.data);
console.log("✨ ‣ response.data:", response.data);
console.log("✨ ‣ response.data:", response.data);

const { access_key1: access_key, refresh_key } = response.data;
console.log("✨ ‣ access_key:", access_key);
console.log("✨ ‣ refresh_key:", refresh_key);
