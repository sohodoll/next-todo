export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
