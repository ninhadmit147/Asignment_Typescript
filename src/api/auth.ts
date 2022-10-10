import instance from "./config"


export const signup = (user: User) => {
    return instance.post('/signup', user);
};
export const signin = (user: User) => {
    return instance.post(`/signin`, user);
}