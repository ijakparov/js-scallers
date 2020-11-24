// import * as tf from '@tensorflow/tfjs-node'
import * as tf from '@tensorflow/tfjs'
import { std } from 'mathjs'




export class StandardScaler {
    /**
     * 
     * @param {data} data [DataRame | Series | Array]
     * @returns Array
     */
    fit(data) {
        let tensor_data = null
        if (Array.isArray(data)) {
            tensor_data = tf.tensor(data)

        }
        else {
            throw new Error("data must either be an Array, DataFrame or Series")
        }

        this.std = std(tensor_data.arraySync())
        this.mean = tensor_data.mean()

        let output_data = tensor_data.sub(this.mean).div(this.std).arraySync()

        return output_data
    }

    transform(data) {
        // if(!Array.isArray(data)){
        //     throw new Error(data)
        // }

        if (Array.isArray(data)) {
            let tensor_data = tf.tensor(data)
            let output_data = tensor_data.sub(this.mean).div(this.std).arraySync()
            return output_data
        } else {
            throw Error("Value Error: Data type not supoorted")
        }

    }
}
