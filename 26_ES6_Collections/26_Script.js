/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a map
let technologies = new Map()
    .set(1,'html')
    .set(2,'css')
    .set(3,'javascript')
    .set(4,'bootstrap')
    .set(5,'jquery')
    .set(6,'Bootstrap');

console.log(technologies);

// get value
console.log(`Value : ${technologies.get(1)}`);

// has key
console.log(`Has 2 : ${technologies.has(2)}`);

// size of map
console.log(`Size : ${technologies.size}`);

// delete a key
technologies.delete(6);
console.log(technologies);

// Get all the keys
let output = 'Keys : ';
for(let key of technologies.keys()){
    output += `${key} `;
}
console.log(output);

// Get all the values
output = 'Values : ';
for(let value of technologies.values()){
    output += `${value} `;
}
console.log(output);

// Get all the entries
output = 'Entries : ';
for(let entry of technologies.entries()){
    output += `${entry[0]} => ${entry[1]} `;
}
console.log(output);

// Clear the map
technologies.clear();
console.log(technologies);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

// Create  a Set
let techSet = new Set()
    .add('html')
    .add('html')
    .add('javascript')
    .add('javascript')
    .add('jquery')
    .add('css')
    .add('bootstrap');

console.log(techSet);

// Has
console.log(`Has CSS ? ${techSet.has('css')}`);

// delete
techSet.delete('css');
console.log(techSet);

// Size
console.log(`Size : ${techSet.size}`);

// clear
techSet.clear();
console.log(techSet);