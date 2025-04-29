import toast from "react-hot-toast";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id);
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('added this item')
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id);
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('added wishlist item')
    }
}

export const deleteBlog = id => {
    let blogs = getStoredReadList()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('read-list', JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmark!')
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };