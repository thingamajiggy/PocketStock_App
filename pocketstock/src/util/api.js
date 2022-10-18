import axios from "axios";

const shopApi = axios.create({
    baseURL:"https://super-pocket-stock.herokuapp.com/api"
});

export const getOrders = () => {
    return shopApi.get("/orders").then((res) => {
        return res.data
    })
};

export const postOrder = (body) => {
    return shopApi.post("/orders", body).then((res) => {
        console.log(res)
        return res.data
    })
}

export const deleteOrder = (order_id) => {
    return shopApi.delete(`/orders/${order_id}`)
    .then((res) => {
        return res.data;
    })
}