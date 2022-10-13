import axios from "axios";

const shopApi = axios.create({
    baseURL:"https://finalproject-team3.herokuapp.com/api"
});

export const getOrders = () => {
    return shopApi.get("/order").then((res) => {
        return res.data
    })
};

export const postOrder = (body) => {
    return shopApi.post("/order").then((res) => {
        console.log(res)
        return res.data
    })
}

export const deleteOrder = (order_id) => {
    return shopApi.delete(`/order/$(order_id)`)
    .then((res) => {
        return res.data;
    })
}