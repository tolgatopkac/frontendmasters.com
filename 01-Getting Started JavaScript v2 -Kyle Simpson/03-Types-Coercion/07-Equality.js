// Checking Equality
// == vs ===

// YANLIŞ OLAN BUNLAR
// == checks value(loose)
// === checks value and type (strict)

// DOĞRUSU
// == allows coercion (types different)
// == türler farklı olduğunda coercion'a izin verir.
// === disallows coercion (types same)

// Examples

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2; //true
studentName1 === studentName2; //true

workshopEnrollment1 == workshopEnrollment2; //true
workshopEnrollment2 === WorkshopEnrollment1; //true
