/** Types in JavaScript
 *  Primitive Types (immutable)
 *  - Number,String,Boolean,Undefined,Symbol,BigInt
 * 
 *  Special Primitive (immutable)
 *  - null(type of instance === "object")
 * 
 *  Structural Types (mutable)
 *  - Object Type
 *      - Data structures: Object,Array,Map,Set,Date,Class...
 *  - Function Type
 *      - derived from Object constructor
 */

// When you copy over a primitive into another variable or  you modify a primitive value;
// you get something brand new.

// When you create a variable that is equal to a Structural type. The value of that variable is not that
// object. The value of the variable is a pointer to that object. When two things share a pointer
// They will end up mutating same thing in the memory.