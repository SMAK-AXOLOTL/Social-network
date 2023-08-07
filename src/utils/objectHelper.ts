export const updateUserInUsersArray = (items: any, objPropName: any, itemId: any, newObjProps: any) => {
    return items.map((i: any) => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i
    })
}

