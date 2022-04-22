/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    const retryOptions =  new df.RetryOptions(1000, 100);

    outputs.push(yield context.df.callActivityWithRetry("CreateUser", retryOptions,"UserID" ));
    outputs.push(yield context.df.callActivityWithRetry("LinkUserToOrg", retryOptions,"UserID" ));
    outputs.push(yield context.df.callActivityWithRetry("AssignUserRoles", retryOptions,"UserID " ));
    return outputs;
});

export default orchestrator;
