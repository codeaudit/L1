(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{560:function(n,e){n.exports='Shape: tensor -> {| return tensor.shape |}\nResizeBilinear: _ -> {| return tf.image.resizeBilinear |}\nMaxPool: config -> {|\n    return registerFunction({\n        description = {\n            config: {\n                tensor: "The input tensor, of rank 4 or rank 3 of shape [batch, height, width, inChannels]. If rank 3, batch of 1 is assumed.",\n                filterSize: "The filter size, a tuple [filterHeight, filterWidth]",\n                stride: "The strides of the pooling: [strideHeight, strideWidth]"\n            }\n        },\n        implementation = tf.maxPool(config.tensor, config.filterSize, config.strides, "same")\n    })\n|}\n\nconst FUNCTIONS = []\n\nregisterFunction: (name, config, implementation) => {\n    FUNCTIONS[name] = { config, implementation }\n    return implementation\n}'}}]);