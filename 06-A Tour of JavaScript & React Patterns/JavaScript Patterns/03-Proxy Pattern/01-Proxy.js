//  with the proxy pattern, we actually use something called a proxy, which is kind of an object that sits in between that intercepts those requests and also intercepts those responses.
//  JavaScript, it's pretty easy to use proxies because JavaScript has a built in proxy object to use the proxy pattern.


const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person,{
  get:(target,prop)=> {
    console.log(`The value of ${prop} is ${target[prop]}`)
    return target[prop]
  },

  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  },
})





/* 

personProxy.name
- The value of name is John Doe
- 'John Doe'

personProxy.name = "Tolga"
Changed name from John Doe to Tolga
'Tolga'
 */