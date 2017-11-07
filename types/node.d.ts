//  https://stackoverflow.com/questions/35666903/typescript-definitions-for-process-env-node-env
declare const env: ProcessEnv;

export interface ProcessEnv {
    [key: string]: string | undefined;
}