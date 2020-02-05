let a:String;
a = "hello world";

const char:Array<String> = a.split("");

export default char.map(c => c.toUpperCase());