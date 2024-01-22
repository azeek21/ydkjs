const Task = {
  identify: function (id) {
    this.id = id;
    console.log("[TASK.id]: assigned id: ", id);
  },
  doSmth: function (tool) {
    console.log("[TASK.doSmth]: doing smth with: ", tool);
  },
  generalFunc: function () {
    console.log("[TASK.generalFunc]: just a general func to show delegation");
  },
};

const SimpleTaks = {
  myName: function (name) {
    this.identify(Math.random());
    this._name = name;
    console.log("[SIMPLETASK.myName]: my name is: ", name);
  },
  // AVOID: it shadows parent's functino (Task.generalFunc)
  generalFunc: function () {
    // polymorphysm: super.method()
    Object.getPrototypeOf(this).generalFunc();
    console.log("[SIMPLETASK.generalFunc]: bad polymorphsm with delegation");
  },
  // DO INSTEAD
  doSpecificThingToSimpleTask: function (task) {
    // polymorphysm (pseudoploymorphysm): super.method()
    this.doSmth("hand");
    console.log(
      "[SIMPLETASK.doSpecificThingToSimpleTask]: good delegation doing simple task of " +
        task
    );
  },
};

// inheritance: Simpletask inherits from Task.
// BUT: this all shinanigans are just DELEGATION
Object.setPrototypeOf(SimpleTaks, Task);

SimpleTaks.myName("tasker1");
SimpleTaks.generalFunc();
SimpleTaks.doSpecificThingToSimpleTask("Mawning the law");
