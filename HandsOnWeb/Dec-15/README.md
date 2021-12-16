1. CSSOM vs DOM vs Render Tree

-> CSSOM contains style properties. (Like margin, padding, border, color, etc. etc).
-> DOM contains HTML Attributes. (Like onClick, src, class, value, type, id, Listeners, target, name).
-> DOM also contains the content (Like, innerText, innerHTML, children, grandchildren, etc. etc.).

-> Render Tree -> Combination of CSSOM + DOM.
-> This Tree contains the HTML attributes as well as the style properties.

Q. What is a Scope?
-> Block where the variable can be accessed.
-> Availability/Accessability.
-> The block of code upto which the extent of my variable/function/constant (whatever reference) can be accessed.

Scope Chaining -> Scope + Chaining
-> The functionality of checking the current scope and if the reference is not available, then check the parent scope and still if unavailable, then check it's parent and then it's parent and finally Reference Error.

1. In depth for let & var & const for scope and hoisting.

Lexical Scope -> Lexical + Scope. relating to the scope.
-> Relative Scope.
-> Scope within which we can access something (variable, function, const).
-> This is the reference scope where all the required variables/functions/constants vagera vagera are available.

3.1 let vs var in a loop.
4. Developer Console.