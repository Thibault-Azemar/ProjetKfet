import axios from 'axios'
const TEST_URL = 'http://localhost:8080/hello'

class test{
    getTest(){
        return axios.get(TEST_URL)
    }
}

export default new test()