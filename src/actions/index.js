export const login = () => ({
    type: 'setAuth',
    auth: true
})

export const logout = () => ({
    type: 'setAuth',
    auth: false
})