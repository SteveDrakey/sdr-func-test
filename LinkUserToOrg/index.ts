/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

import { AzureFunction, Context } from "@azure/functions"

const activityFunction: AzureFunction = async function (context: Context): Promise<string> {
    context.log(`Linking User To Org`);

    if ( Math.random() * 2 < 1 ) {
        throw 'error linking user to org';
    } 
    return `User Linked to org`;
};

export default activityFunction;
