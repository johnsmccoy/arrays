// 1. Create an array that holds at least five items. Each item should be a string that describes your experiance at NSS so far.

const experiences = ["great", "stressfull", "frustrating", "fun", "too much"];

for (let i = 0; i < experiences.length; i++) {
   console.log(experiences[i]);
};

experiences.forEach(
   function (a) {
       console.log(a);
 }
);

// 2. Iterate over the array and console log each item in the array.

{
    name: "Frappe",
    price: 6.99,
    category: "beverage",
    size: ["8 oz", "16 oz", "52 oz"]

};
{
    name: "Bagel",
    price: 4.99,
    category: "food",
    size: ["small", "medium", "large"]

};
{
    name: "Hat",
    price: 10.99,
    category: "merchandise",
    size: ["8 oz", "16 oz", "52 oz"]

}