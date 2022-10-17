


const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};



const personProxy = new Proxy(person,{
  get:(target,prop)=> {
    console.log(`The value of ${prop} is ${target[prop]}`)
    return Reflect.get(target, prop)
  },

  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
 return Reflect.set(target,prop,value)
  },
})
