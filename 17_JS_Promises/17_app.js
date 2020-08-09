let success = () => {
  console.log('Successful');
};
let fail = () => {
    console.log('failed');
};

let someTask = (success,failed) => {
    let taskDone = true;
    if(taskDone){
        success();
    }
    else{
        failed();
    }
};

// Promise
let promise1 = new Promise((resolve,reject) => {
    // trying fulfill
    let isDone = false;
    if(isDone){
        resolve('Promise 1 is Done');
    }
    else{
        reject('Promise 1 is NOT Done');
    }
});

promise1.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});

// Dependent Promises
let doTask = new Promise((resolve,reject)=> {
    let isTaskDone = true;
    if(isTaskDone){
        resolve('Task is Done');
    }
    else{
        reject('Task is NOT Done');
    }
});

let doProject = new Promise((resolve,reject)=> {
    let isProjectDone = true;
    if(isProjectDone){
        resolve('Project is Done');
    }
    else{
        reject('Project is NOT Done');
    }
});

let getJob = new Promise((resolve,reject)=> {
    let gotJob = true;
    if(gotJob){
        resolve('Got JOB');
    }
    else{
        reject('NOT Got JOB');
    }
});

doTask.then((message) => {
    console.log(message);
    doProject.then((message) => {
        console.log(message);
        getJob.then((message) => {
            console.log(message);
            console.log('Everything is Done');
        });
    });
});


