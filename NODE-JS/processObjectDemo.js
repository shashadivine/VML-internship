// global object, no need to import

// argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env - system's variables
console.log(process.env);
console.log(process.env.LOGNAME);

// pid - id of the nodejs process
console.log(process.pid);

// cwd (current working directory)
console.log(process.cwd());

// string that represents the title of ur nodejs
console.log(process.title);

// memory usage
console.log(process.memoryUsage());

// update - time when u run the command to the system executing
console.log(process.uptime());

// listener
process.on('exit', (code) => {
  console.log(`About to exit with code ${code}`);
});

// exit - exit the process, and u can execute specific code wherein 0 = success, 1 = general error
process.exit(0);
console.log("Hi from after exit");
