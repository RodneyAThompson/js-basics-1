// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration
let lifeCycle = ["planning", "analysis of requirements", "design", "testing and integration", "implementation", "maintain"];

for(let i = 0; i < 6; i++) {
    console.log(lifeCycle[i]) ;
}

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
*/
var planning = "requirement analysis, quiality assurance requirements and identification of risks.";
var analysisOfRequirements = "Define and document product requirements.";
var design = "Decision regarding the architcture and make of the solution based on requirements."; 
var testinAndIntegration = "The software is tested and checked for quality and performance acceptance.";
var implementation = "Provisioning and configuring infrastructure, and defining a software deployment strategy.";
var maintain = "Software is operationalized to monitor, control, and detect performance issues or inciddents related to deployment.";