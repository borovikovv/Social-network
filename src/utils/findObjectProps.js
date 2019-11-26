export const findObjectProps = (items, objProps, payload) => {
    return items.map((item) => {
        if(item.id === payload) {
            return {...item, ...objProps}
        }
        return item;
    });
};